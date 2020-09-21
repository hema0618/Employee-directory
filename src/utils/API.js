import axios from "axios";
// Export an object containing methods
export default{ 
    
    getUsers:function(){    

        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};