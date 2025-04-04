import axios from 'axios';
// import { dispatch } from '../store/store';
import { getItem, setItem } from '../utilities/storage';
import { AUTH_KEY_ITEM } from '../common/constant';


axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

// Temporary solution
axios.defaults.headers['authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODM1N2UwMmY1MzBkODRlYjI3M2MyYmI4NzMyMzEzYWE2MjQ4MWY3MzJmY2U5NmM4MTdlYWE3Y2EyMDI5OWNkNTZlZTIwNjRjZTlmYTczODkiLCJpYXQiOjE3Mzk3OTc3MDYuMzQ2NTIsIm5iZiI6MTczOTc5NzcwNi4zNDY1MjMsImV4cCI6MTczOTg4NDEwNi4zMzcxMjUsInN1YiI6IjEwIiwic2NvcGVzIjpbXX0.nO_--h6muyz71qRpO9X-xE0ZnOsiMKGAxpTlIELoRDRzDWN8qrdL1wtnVpKueaun-YWlNuNv5GhKf-69KVFoVTo_CHvZPTfBt03N4JqOc_qNivbxtc6ig8WG8LqEsQ-5F-an0ynapAxKVEgr0Xs94Z2kgYvhPn4zMe-SoKAJFioURBzXZIGwGyrpC6FVL2BKS736YbFRJAmYZzDAa_ggjUSebjgoRdRong0vjjxubEkv1GdhB7cPPo2-HPMNWOeOFzJ8W4H_9RX-byTH_Xc3uveOKmOM4VxhGovrj0oCphUEWjpXA-qGARl_kKOtckvz7bh8-lVczCblxMz1Soq_AYEhvW5Ak-WAEjKANh_AkuZXm5UNQoqI8MbXHzdgA1KIvSAJjLh4yoMWUBrkWubKU2bq23v69v5wmEOTpdr70c70ArYbYW5RWUh6Uzqm3lbbxJE2hP7i3yJuSSd1tC39jWA6-xKybtcmW7QIJwOHPwoUnqgS3Nrs3UBsfEKSk3G93Wk9ikCmhMYMsZ8R71aqz_7vUItTGzWjBiukzMY62t-XEtXa4jkc5BHCe0Z7O9CO9VnTS9LwGTyd7e-WSNQPxDHZ1WRIK0XPW5q9g94Qyu554Cr0ZUUSGyweObbR7JXtUoALCV3ROLjuIbZaZhc1SgBd0li_tHsoN2ClcdjTBx0`;


if (getItem(AUTH_KEY_ITEM)) {
    axios.defaults.headers['authorization'] = getItem(AUTH_KEY_ITEM);
    document.cookie = `authorization=${getItem(AUTH_KEY_ITEM)}`;
}

const client = axios;

export const setAuthToken = (token) => {
    axios.defaults.headers['authorization'] = token;
    document.cookie = `authorization=${token}`;
};

export const removeAuthToken = () => {
    delete axios.defaults.headers['authorization'];
    document.cookie = `authorization=${undefined}`;
};

// to parse error(s) caught by axios during any HTTP request
export function parseClientError(error) {
    if (error.response && error.response.status === 401) {
        // dispatch(handleLogout());
    }
    const message = (error.response
        && error.response.data)
        || error.message
        || error.toString();
    return message;

    // const message = (error.response
    //     && error.response.data
    //     && error.response.data.message)
    //     || error.message
    //     || error.toString();
    // return message;

    // if (error.response && error.response.data) {
    //     console.log('in response error');
    //     parsed = error.response.data;
    // } else if (error.message) {
    //     console.log('in mesage error');
    //     parsed = error.message;
    // } else if(error.request) {
    //     console.log('in request error');
    //     parsed = error.request;
    // }
    // else {
    //     console.log('in default error');
    //     parsed = error;
    // }

    // return parsed;
}

async function request(method, url, data = {}, params = {}) {
    try {
        const response = await client({
            method: method,
            url: url,
            data: data,
            params: params,
        });
        if (response.headers.authorization) {
            setAuthToken(response.headers.authorization);
            setItem(AUTH_KEY_ITEM, response.headers.authorization);
        }
        return response;
    } catch (e) {
        throw parseClientError(e);
    }
}

export async function post(url, data = {}, params = {}) {
    return await request('post', url, data, params);
}

export async function get(url, data = {}, params = {}) {
    return await request('get', url, data, params);
}

export async function del(url, data = {}, params = {}) {
    return await request('delete', url, data, params);
}

export async function put(url, data = {}, params = {}) {
    return await request('put', url, data, params);
}