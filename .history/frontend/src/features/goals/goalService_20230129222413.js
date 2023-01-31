import axios from 'axios'

const API_URL = '/api/goals/'

//create new goal
const createGoal = async(goalData,token) => {
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL,goalData,config)
    return response.data
}

//login user
const login = async(userData) => {
    const response = await axios.post(API_URL + 'login',userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))//and include our token
    }
    return response.data
}

//logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {register,logout,login}

export default authService