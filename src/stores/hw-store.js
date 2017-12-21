
import {observable, action, computed} from 'mobx';

class HwStore {

  @observable
  count = 10;

  @computed get total() {
    return this.count;
  }

  @action.bound
  changeCount(){
    ++this.count;
  }

}

const hwStore = new HwStore();
export default hwStore;
