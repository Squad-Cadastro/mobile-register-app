import axios from "axios";

const api = axios.create({
  baseURL: "https://8vuj4fie87.execute-api.us-east-1.amazonaws.com",
  
});

export default api;
// https://8vuj4fie87.execute-api.us-east-1.amazonaws.com <- API GATEWAY AWS
// http://backendregisterjavaapp-env.eba-cuqnykim.us-east-1.elasticbeanstalk.com/clientes
// http://localhost:8080"
// http://localhost:8080/cep/
