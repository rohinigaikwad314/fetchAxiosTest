//HTTP Methods
// GET POST PUT PATCH DELETE

const FETCH_URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  const response = await fetch(`${FETCH_URL}${endpoint}`, options);

  const data = await response.json();

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
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: 'rohini',
      body: 'gaikwad',
      userId: 22,
    }),
  };

  const response = await fetch(`${FETCH_URL}${endpoint}`, options);

  const data = await response.json();

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
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: 'Appz',
      body: 'Technology',
      userId: 100,
    }),
  };

  const response = await fetch(`${FETCH_URL}${endpoint}`, options);

  const data = await response.json();

  console.log('response status', response.status);
  console.log('response text', response.statusText);
  console.log('data', data);
};
//PUT request
// upsertData('/posts/1');

//PATCH Method

const updateData = async (endpoint) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: 'Gaikwad Rohini',
    }),
  };

  const response = await fetch(`${FETCH_URL}${endpoint}`, options);

  const data = await response.json();

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
    headers: {
      'Contentet-type': 'application/json; charset=UTF-8',
    },
  };

  const response = await fetch(`${FETCH_URL}${endpoint}`, options);

  const data = await response.json();

  console.log('status', response.status);
  console.log('status text', response.statusText);
  console.log('data', data);
};
//delete request
// deleteData('/posts/1');
