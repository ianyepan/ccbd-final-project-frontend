import {API_BASE_URL} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {headers: {'content-type':'application/json'}});
}

function get_token_from_local_storage(){
  return localStorage.getItem('access_token');
}

export async function get_my_favorite_list(){
    const requestOptions = {
      method: 'GET',
      headers: {
          'access_token': get_token_from_local_storage()
      },
    };
    return fetch(`${API_BASE_URL}/favorite_list`, requestOptions).then(response => response.json());
}

export async function add_restaurant_to_favorite_list(rid) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'access_token':  get_token_from_local_storage()
    }
  }
  return fetch(`${API_BASE_URL}/favorite_list?rid=${rid}`, requestOptions);

}

export async function remove_restaurant_from_favorite_list(rid) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'access_token': get_token_from_local_storage()
    }
  }
  return fetch(`${API_BASE_URL}/favorite_list?rid=${rid}`, requestOptions);
}

export async function get_access_token(auth_token){
  var details = {
    'grant_type': 'authorization_code',
    'client_id': '28rtt451qusispi2q63ecb880h',
    'code': auth_token,
    'redirect_uri': 'http://localhost:8888'
  };
  
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody
  };
  return await fetch('https://omegameal.auth.us-east-1.amazoncognito.com/oauth2/token', requestOptions)
      .then(response => response.json())
}
