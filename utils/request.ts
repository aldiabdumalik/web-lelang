import { stringify } from "querystring"
import { getLocalState } from "./localStorage"

export default async function request({
  url = '',
  method = 'GET',
  body = {},
  headers = {},
  queryParams = {}
}) {
  let defaultHeader = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json',
  }

  if (typeof window !== 'undefined') {
    const USER_TOKEN = localStorage.getItem('_token');
    defaultHeader = {...defaultHeader, ...{'Authorization' : 'Bearer ' + USER_TOKEN}};
  }

  const requestHeaders = {...defaultHeader, ...headers};

  if (queryParams) {
    url = `${url}?${stringify(queryParams)}`;
  }

  let options = {
    method: method,
    headers: new Headers(requestHeaders)
  }

  if (method != 'GET') {
    options = {...options, ...{body: body ? JSON.stringify(body) : null }};
  }

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then(function(json) {
        return Promise.reject(json);
      });
    }
  });
}
