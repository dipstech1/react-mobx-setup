import {action, observable, computed} from 'mobx'
import auth from'../services/authService'
import commonStore from './commonStore'

class AuthStore{

    @observable loginData = {
        email:"",
        password:""
    }

    @action setEmail(email){
        this.loginData.email = email;
    }

    @action setPassword(password){
        this.loginData.password = password
    }

    @computed get getJsonLoginData(){
        return JSON.stringify(this.loginData)
    }

    @action login(){
       return auth.Auth.login(this.loginData)
            .then(({token}) => {
                commonStore.setToken(token)
                
            })
            .catch(err => console.log(err))

    }

    @action logout(){
        commonStore.removeToken();
        window.location.href = "/"
    }

}

export default new AuthStore()