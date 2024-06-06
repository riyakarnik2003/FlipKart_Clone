import axios from 'axios'

const URL = ''
export const autheticateSignUp= async (data)=>{
    try {
        await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log('error in signup api')
    }
}


export const autheticateLogin= async (data)=>{
    try {
      await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log('error in login api')
    }
}


