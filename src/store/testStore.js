import {action, observable, computed} from 'mobx'


class TestStore {

    @observable tst = 0;

    @action setTest(val){
        console.log("stoeew ", val)
        this.tst = val
    }

    @computed getTestBy(){
        return this.tst/10;
    }

}

export default new TestStore()