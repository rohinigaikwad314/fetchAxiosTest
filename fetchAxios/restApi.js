//HTTP Methods
// GET POST PUT PATCH DELETE
import Axios from 'axios';
const FETCH_URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (endpoint, fData) => {
  const options = {
    method: 'GET',
    url: `${FETCH_URL}${endpoint}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: fData,
  };
  const response = await Axios(options);

  const data = response.data;

  console.log('response status', response.status);
  console.log('response text', response.statusText);
  console.log('data', data);
};

//Get Request
// fetchData('/posts');

//POST Method
const createData = async (endpoint) => {
  const options = {
    method: 'POST',
    url: `${FETCH_URL}${endpoint}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
      title: 'rohini',
      body: 'gaikwad',
      userId: 22,
    },
  };

  const response = await Axios(options);

  const data = response.data;

  console.log('response status', response.status);
  console.log('response text', response.statusText);
  console.log('data', data);
};
//post request
// createData('/posts');

//PUT Method
const upsertData = async (endpoint) => {
  const options = {
    method: 'PUT',
    url: `${FETCH_URL}${endpoint}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
      title: 'Appz',
      body: 'Technology',
      userId: 100,
    },
  };

  const response = await Axios(options);

  const data = response.data;

  console.log('response status', response.status);
  console.log('response text', response.statusText);
  console.log('data', data);
};
//PUT request
upsertData('/posts/1');

//PATCH Method

const updateData = async (endpoint) => {
  const options = {
    method: 'PATCH',
    url: `${FETCH_URL}${endpoint}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    data: {
      title: 'Gaikwad Rohini',
    },
  };

  const response = await Axios(options);

  const data = response.data;

  console.log('response status', response.status);
  console.log('response text', response.statusText);

  console.log('data', data);
};
//PATCH Request
// updateData('/posts/1');

//DELETE Method

const deleteData = async (endpoint) => {
  const options = {
    method: 'DELETE',
    url: `${FETCH_URL}${endpoint}`,
    headers: {
      'Contentet-type': 'application/json; charset=UTF-8',
    },
  };

  const response = await Axios(options);

  const data = response.data;

  console.log('status', response.status);
  console.log('status text', response.statusText);
  console.log('data', data);
};
//delete request
// deleteData('/posts/1');
