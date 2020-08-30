import axios from 'axios';

let api = 
axios.create(
  {
      baseURL: 'http://localhost:4000/'
  }
);

const config = {
    headers: {
      'content-type': 'application/json'
    }
};

const configForm = {
    headers: {
      'content-type': 'multipart/form-data'
    }
};


export var GlobalData = [];

if (window.localStorage.getItem('RPS2D')) {
    LoadGlobalData();
} else {
    ResetGlobalData();
}

export function LoadGlobalData() {
    GlobalData = JSON.parse(window.localStorage.getItem('RPS2D'));
}

export function BakeGlobalData() {
    window.localStorage.setItem('RPS2D', JSON.stringify(GlobalData));
}

export function ResetGlobalData() {
    GlobalData = {};
    GlobalData['config'] = config;
    GlobalData['config_form'] = configForm;
    BakeGlobalData();
}
GlobalData['api'] = api;