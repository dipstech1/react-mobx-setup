import {action, computed, observable, runInAction} from 'mobx';
import dashboardService from './../services/dashboardService'

class DashboardStore{
    @observable userData = [];

    @observable total;

    @observable selectedUserData = {}

    @action setUser(){
      return dashboardService.Dashboard.userData().then(res => {
          
          this.userData = res.data
          console.log("User data ", this.userData)
          runInAction(() => {
              this.total = res.data.length
          })
      })
    }

    @action removeUser(id){
        let index = this.userData.findIndex(x => x.id == id);
        this.userData.splice(index, 1);
    }

    @action async updateUser(user){

        let index = this.userData.findIndex(x => x.id == user.id);

       await Object.keys(user).map((res) => {
             console.log(this.userData[index][res], "//", user[res])
             runInAction(() => {
                this.userData[index][res] = user[res];
             })
         });
        console.log(this.userData)
    }

    @action selectedUser(user){
        this.selectedUserData = user
    }

    @computed get jsonUser(){
        return JSON.stringify(this.userData)
    }
}

export default new DashboardStore()