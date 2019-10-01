import request from'./api'

const Auth = {
    login : (loginData) => {
       return request.post("api/login", loginData)
    },

}

export default {Auth}