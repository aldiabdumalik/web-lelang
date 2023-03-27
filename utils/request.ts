import { stringify } from "querystring"
import redis from "@/plugins/redis";

interface RequestProps {
  url: string;
  method: string | 'GET';
  body?: any;
  headers?: any;
  queryParams?: any;
}

export default async function request({url, method, body, headers, queryParams}: RequestProps) {
  let defaultHeader = {
    'Accept': 'application/json',
    'Content-Type' : 'application/json',
  }

  const _token = await redis.get('_token');
  defaultHeader = {...defaultHeader, ...{'Authorization' : 'Bearer ' + _token}};
  // console.log(_token);

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

  return fetch(url, options).then(async res => {
    if (res.ok) {
      return res.json();
    } else {
      const json = await res.json();
      return await Promise.reject(json);
    }
  });
}
