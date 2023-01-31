import axios from 'axios'

const API_URL = '/api/users/'

//register user
const register = async(userData) => {
    const response = await axios.post(API_URL,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))//and include our token
    }
    return response.data
}

const logout = () => {
    
}

const authService = {register}

export default authService