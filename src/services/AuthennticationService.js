import axios from "axios";

export default  class AuthennticationService{
    // Service method to get RESTAPI of dealers Information
  static async getDealerInfo() {
    
    return axios.get('http://localhost:8088/producthive/api/dealers')
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching dealer info:", error);
        throw error;
      });
  }

}

