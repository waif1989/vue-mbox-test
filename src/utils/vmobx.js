import { toJS, reaction } from 'mobx';
let Vue
export default {
  install (_Vue) {
    if (Vue && _Vue === Vue) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[vuex] already installed. Vue.use(Vuex) should be called only once.'
        )
      }
      return
    }
    Vue = _Vue
    _applyMixin(Vue)
  }
}

function _applyMixin (Vue) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    Vue.mixin({
      beforeCreate: _vmboxInit,
      data () {
        return {
          ...toJS(this.$mbstore)
        }
      }
    })
  } else {
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init
        ? [_vmboxInit].concat(options.init)
        : _vmboxInit
      _init.call(this, options)
    }
  }

}

function _vmboxInit () {
  /*  const options = this.$options
  // hwStore 注入
  if (options.hwStore) {
    this.$mbstore = options.hwStore
  } else if (options.parent && options.parent.$mbstore) {
    this.$mbstore = options.parent.$mbstore
  }*/
  const options = this.$options
  // store injection
  if (options.hwStore) {
    this.$mbstore = typeof options.hwStore === 'function'
      ? options.hwStore()
      : options.hwStore
  } else if (options.parent && options.parent.$mbstore) {
    this.$mbstore = options.parent.$mbstore
  }
}
