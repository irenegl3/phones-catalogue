
import React, { Component } from 'react';
import axios from 'axios';
import Catalogue from './Catalogue';

let urljoin = require('url-join');
const service = process.env.SERVICE || 'http://localhost:3001';
const apiBaseUrl = process.env.NODE_ENV === "development" ? urljoin(service) : window.location.href


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
      loading: null,
      selected: null,
      info: null,
      formCreate: null,
      formUpdate:null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeOfState = this.handleChangeOfState.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    axios.get(urljoin(apiBaseUrl, "/phones"))
      .then((response) => {
        this.setState({
          loading: null,
          phones: response.data
        })
      })
      .catch((error) => {
        this.setState({
          loading: null
        })
        alert(`Erros when connecting to the server. ${error.response && error.response.data ?
          error.response.data.error || '' : ''}`)
      })
  }

  handleClick(phone, service) {
    switch (service) {
      case 'create':
        this.setState({
          formCreate: true
        });
        break;
      case 'info':
        this.setState({
          selected: phone,
          info: true
        });
        break;
      case 'update':
        this.setState({
          selected: phone,
          formUpdate: true
        });
        break;
      default: 
      this.setState({
        formCreate: null,
        formUpdate: null,
        info:null
      });
      break;
    }
  }

  handleChangeOfState(id, paramsToUpdate) {
    let newPhones = this.state.phones.slice();
    let formData = new FormData();
    this.setState({
      loading: true,
      selected: null,
      formCreate: null,
      formUpdate: null
    });
    let aux;
    let phoneId = ""; //ver que tipo es
    let targetPhone;

    // If id, update existing phone
    if (id) {
      phoneId = id;
      for(let i=0;i<newPhones.length;i++){
        if(newPhones[i].id === id){
          targetPhone = newPhones[i];
          aux = i;
          break;
        }
      }
    }
    // If id is null, create new phone 
    else {
      aux = newPhones.length;
      paramsToUpdate.countPhones = newPhones.length;
    }
    formData.append("body", JSON.stringify({ phoneId: phoneId, paramsToUpdate: paramsToUpdate }));
    axios.post(urljoin(apiBaseUrl, "/phones"), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        let res ={};
        res = response.data;
        // phone already exists
        if (res === null) {
          this.setState({
            loading: null
          })
          alert('The phone you are trying to insert already exists.');
        }
        else {
          if (!id) {
            newPhones.push(res);
          } else { // update
            newPhones[aux].id = res[1][0].id;
            newPhones[aux].name = res[1][0].name;
            newPhones[aux].manufacturer = res[1][0].manufacturer;
            newPhones[aux].description = res[1][0].description;
            newPhones[aux].color = res[1][0].color;
            newPhones[aux].screen = res[1][0].screen;
            newPhones[aux].processor = res[1][0].processor;
            newPhones[aux].imageFileName = res[1][0].imageFileName;
            newPhones[aux].ram = res[1][0].ram;
            newPhones[aux].price = res[1][0].price;
          }
          this.setState({
            phones: newPhones,
            loading: null
          })
        }
      })
      .catch((error) => {
        this.setState({
          loading: null
        });
        alert(`Error en la conexión con el servidor. ${error}`);
        console.log(error);
      })
  }


  render() {
    let catalogue;
    if (this.state.loading === true) {
      catalogue = "Loading...";
    }
    else {
      catalogue = <Catalogue
        phones={this.state.phones}
        selected={this.state.selected}
        info={this.state.info}
        formCreate={this.state.formCreate}
        formUpdate={this.state.formUpdate}
        handleClick={this.handleClick}
        handleChangeOfState={this.handleChangeOfState}
      />
    }

    return (
      <div>
        <div >
          {catalogue}
        </div>
        <div className={"footer"}>
          <p>Irene García López</p>
          <p>November 2020</p>
        </div>
      </div>
    );
  }
}

export default App;