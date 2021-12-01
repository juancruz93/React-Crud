import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const productcreate = payload => api.post(`/productcreate`, payload)
export const products = () => api.get(`/products`)
export const productupdate = (id, payload) => api.put(`/productupdate/${id}`, payload)
export const productdelete = id => api.get(`/productdelete/${id}`)
export const productsearch = id => api.get(`/productsearch/${id}`)

const apis = {
    productcreate,
    products,
    productupdate,
    productdelete,
    productsearch,
}

export default apis
