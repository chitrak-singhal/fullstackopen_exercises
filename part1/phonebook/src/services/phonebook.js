import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll= ()=>{
    return axios.get(baseUrl)
}

const create = new_name => {
    return axios.post(baseUrl, new_name)
}

const del = id=>{
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    create,
    del,
}