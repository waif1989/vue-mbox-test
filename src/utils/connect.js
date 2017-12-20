import { autorun } from 'mobx';

const connect = (obj, store) =>{
  autorun(() => {
    console.log('connect----', store.count)
    console.log('data----', obj.data().countMy = store.count)
    return obj
  })
  return obj
}

export default connect
