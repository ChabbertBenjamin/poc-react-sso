import React, {Component} from "react";
import Keycloak from 'keycloak-js'

class Secured extends Component{
    constructor(props) {
        super(props);
        this.state = {keycloak:null, authenticated:null}
    }
    componentDidMount() {
        const keycloak = new Keycloak('keycloak.json')
        keycloak.init({onLoad: 'check-sso',enableLogging :true}).then(authenticated =>{
            this.setState({keycloak:keycloak, authenticated:authenticated})
            if(authenticated){
                window.accessToken = keycloak.token;
            }
        })
    }
    render(){
        if(this.state.keycloak){
            if(this.state.authenticated) return(
                <div>
                    <p>This is a keycloak-secured component</p>
                </div>
            ); else return (<div>Unable to authenticate</div>)

        }
        return(
            <div>Initializing keycloak...</div>
        );
    }
}
export default Secured;
