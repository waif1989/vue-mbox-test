// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vmobx from './utils/vmobx';
import hwStore from './stores/hw-store';
Vue.use(Vmobx);
/*import Movue from 'movue';
import { reaction } from 'mobx';
Vue.use(Movue, { reaction });
Vue.use(Vmobx, hwStore);*/

// import {observable, isObservable, toJS} from 'mobx';
/*import VueMobx from 'vue-mobx';
Vue.use(VueMobx, {
  toJS: toJS, // must
  isObservable: isObservable, // must
  observable: observable
})*/

/*import {observable, autorun, computed} from 'mobx';
var todoStore = observable({
  /!* some observable state *!/
  todos: [],

  /!* a derived value *!/
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
});

autorun(function() {
  console.log("Completed %d of %d items",
    todoStore.completedCount,
    todoStore.todos.length
  );
});

todoStore.todos[0] = {
  title: "Take a walk",
  completed: false
};
todoStore.todos[0].completed = true;


class OrderLine {
  @observable price = 1;
  @observable amount = 1;


  @computed get total() {
    return this.price * this.amount;
  }
}

const line = new OrderLine();

setTimeout(() => {
  /!*console.log("price" in line); // true
  console.log(line.hasOwnProperty("price")); // false，price 属性是定义在类上的，尽管值会被存储在每个实例上。*!/
  console.log('total----1', line.total)
  line.amount = 2;
  console.log('total----2', line.total)
  /!*console.log(line.hasOwnProperty("price")); // true, 现在所有的属性都定义在实例上了。*!/
}, 2000);*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  hwStore,
  template: '<App/>',
  components: { App }
})
