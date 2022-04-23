import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}
// async는 넣어야함(서버도 마찬가지)
export const postUser = async (payload: 
    {userid:string, password:string, email:string, 
     name:string, phone:string, birth:string, address:string}) => {
         try{
            alert('진행 4 : API 진입 ## (5번은 server에 있음)')
            const response : AxiosResponse<unknown, UserType[]> = await axios.post(`${SERVER}/user/join`,payload, {headers})
            alert('진행 6 : 응답성공 '+JSON.stringify(response.data))
            return response.data
         }catch(err){
            return err;
         }
    }