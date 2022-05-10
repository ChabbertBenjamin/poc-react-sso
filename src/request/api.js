import axios from "axios"
import {useKeycloak} from "@react-keycloak/web";
import axiosInstance from './axiosInstance'

function api(){
    const useRequest = async () =>{
        const { keycloak } = useKeycloak();
        try{
            let response = await axios({ method: 'get', url: 'http://localhost:5050/demo', headers: { 'Authorization': 'Bearer ' + keycloak.token } })
            console.log(response.data)
            //OR
            //console.log(response)
            return response.data;
        }catch (err){
            console.error(err);
        }
    }
    return{
        useRequest,
    };
}
export default api();