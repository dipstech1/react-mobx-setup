import request from'./api'

const Dashboard = {
    userData : () => {
       return request.get("api/users?page=2")
    }
}

export default {Dashboard}