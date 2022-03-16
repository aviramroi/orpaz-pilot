
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

axios.defaults.baseURL = BASE_URL

export async function getForm(id:string){
    return await axios.get(`/forms/${id}`)
}

export async function sendReport(id:string,data:any){
    return await axios.post(`/forms/${id}/answers`,data)
} 

export async function getReports(id:string){
    return await axios.get(`/forms/${id}/answers`)
}