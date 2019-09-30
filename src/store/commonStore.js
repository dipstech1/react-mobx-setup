import { observable, action, reaction } from 'mobx';


class CommonStore {

    @observable token = window.localStorage.getItem('token')

    constructor(){
        reaction(
            () => this.token,
            token => {
                if(token)
                    window.localStorage.setItem('token', token)
                else    
                    window.localStorage.removeItem('token')
            }
        )
    }

    @action setToken(token){
        this.token = token
    }

    @action removeToken(token){
        this.token = ""
    }
}

export default new CommonStore()