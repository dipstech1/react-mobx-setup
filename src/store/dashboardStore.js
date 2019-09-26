import {action, computed, observable, runInAction} from 'mobx';
import dashboardService from './../services/dashboardService'

class DashboardStore{
    @observable userData = [];

    @observable total;

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

    @computed get jsonUser(){
        return JSON.stringify(this.userData)
    }
}

export default new DashboardStore()