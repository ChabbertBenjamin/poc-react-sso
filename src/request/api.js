import axios from "axios"
import {useKeycloak} from "@react-keycloak/web";
import axiosInstance from './axiosInstance'

function api(){
    const useRequest = async (props) =>{
        const { keycloak } = useKeycloak();
        try{


            //console.log(keycloak.token)

            const config = {
                headers:{
                    Authorization: `Bearer ` + keycloak.token,
                }
            };

            //axios.defaults.headers.common["Access-Control-Allow-Origin"] =  '*'
            //axios.defaults.headers.common[`Access-Control-Allow-Header`] =  '*'
            //axios.defaults.headers.common[`Access-Control-Allow-Credentials`] =  true
            //axios.defaults.headers.common['Authorization'] =  `Bearer ` + keycloak.token;
            //axios.defaults.headers.common['Access-Control-Max-Age'] =  360



            let response = "tesst";
            console.log(response)
            /*response = await axios.get(
                'http://localhost:8090/users')
*/
            //console.log(response.data)

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