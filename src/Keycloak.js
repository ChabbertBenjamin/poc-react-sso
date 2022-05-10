import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/auth",
    realm: "SpringBootKeycloak",
    clientId: "react-front",
});

export default keycloak;