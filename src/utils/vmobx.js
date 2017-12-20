import { toJS } from 'mobx';
export default {
  install (Vue) {
    applyMixin(Vue)
  }
}

function applyMixin (Vue) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    const usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    Vue.mixin(usesInit ? {
      init: vmboxInit,
      methods: {
        $vmboxMap () {}
      }
    } : {
      beforeCreate: vmboxInit,
      data () {
        return {
          ...toJS(this.$mbstore)
        }
      },
      methods: {
        $vmboxMap (val) {}
      },
      created () {
      }
    })
  } else {
    // 重新 init 方法并注入 mobx 的 init方法
    // 向 1.x 兼容的方法
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init
        ? [vmboxInit].concat(options.init)
        : vmboxInit;
      _init.call(this, options)
    }
  }
}

function vmboxInit () {
  const options = this.$options
  // hwStore 注入
  if (options.hwStore) {
    this.$mbstore = options.hwStore
  } else if (options.parent && options.parent.$mbstore) {
    this.$mbstore = options.parent.$mbstore
  }
}
