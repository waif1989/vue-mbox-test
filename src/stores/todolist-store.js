import {observable, action, computed} from 'mobx';

class TodoStore {
  @observable todos = [];
  @observable count = 10;

  @computed get trueStateTodo() {
    return this.todos.filter(todo => todo.state).length;
  }

  @action.bound addCount (){
    this.count++;
  }

  @action.bound addTodo (){
    this.todos.push({
      state: ((Math.random() * 10) > 5) ? true: false,
      name: `This is: ${Math.random()}`
    });
  }
}

export default new TodoStore();
