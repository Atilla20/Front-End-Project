import axios from "axios";

const API = {
    //Gets all of the companies from db
    getCompanies: function() {
        return axios.get("/api/company");
    },

    //Gets company with it's given id
    getId: function(id) {
        return axios.get("/api/company/" + id);
    },

    deleteCompany: function(id) {
        return axios.get("/api/company" + id);
    }
};

export default API;