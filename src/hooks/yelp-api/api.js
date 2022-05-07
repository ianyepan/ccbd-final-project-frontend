import {API_BASE_URL} from './config';
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {headers: {'content-type':'application/json'}});
}

export async function create_favorite_list(token){
    console.log(token)
    const requestOptions = {
      method: 'POST',
      headers: {
          'access_token':'eyJraWQiOiJ4UXF4Z2N6T1lcLzhsTlwvZjZ5aGJFNGNyRURicVZVam1KVTdcL1lnd1ZKakxFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlNjNkNDM4ZC0xMGJjLTQ5YTMtODcxMi1mODlmZTRlODUwMWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9TVG1ha0xOWXkiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIyOHJ0dDQ1MXF1c2lzcGkycTYzZWNiODgwaCIsIm9yaWdpbl9qdGkiOiI3NzU2YjMxYy00MmFhLTQxMWEtYWE5NS00NjZjNGRjZGMwYjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjUxOTU5Mzk3LCJleHAiOjE2NTE5NjI5OTcsImlhdCI6MTY1MTk1OTM5NywianRpIjoiNzI1ZmI1YTktZmI4Ni00MTA3LWIwODAtNmExNmQxMWI3MTA3IiwidXNlcm5hbWUiOiJlNjNkNDM4ZC0xMGJjLTQ5YTMtODcxMi1mODlmZTRlODUwMWUifQ.et0dUapi637YTRlRPUWUi0lC56UK-KgNF_4jgIcjKlcG4AVv2Cd9gyWcDjMLXcQi1WJudvDik_fOfoEGmk4nGt4h7Zyvk4nHooKZ2wcAkA8D0j47WRC7sJo2AQchAXgGAPHkTjm_mnXcgjPMXsMFAAvWkbVIm8P3gRdRD3eIAplaidMMDCXdcxGLqTxSV6DTwUsSPjvZqGInJQNvk3fOLgFr-HtWKHjVB7VwOVn79w1Ef9LJQUCbDhrjBZ7N41CTtC7HsOLKIbLsfRWsEQmot7wJhmnaEdLh-vPGsXB_OFDKqJ86RZYmXK_WAMUhKGlZP_ntxkiHR-UCIF55aCMyYA'
      },
    };
    return fetch(`${API_BASE_URL}/favorite_list`, requestOptions)
}

export async function get_access_token(token){
  var details = {
    'grant_type': 'authorization_code',
    'client_id': '28rtt451qusispi2q63ecb880h',
    'code': token,
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
