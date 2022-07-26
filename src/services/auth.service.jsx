import axios from "axios";
const API_URL = "http://185.244.216.51:8079/api/auth/";

const login = (username, password) => {

    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        });
};


const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
        return response.data;
    });
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    login,
    logout,
    getCurrentUser,
}
export default AuthService;