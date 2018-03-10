import Toast from './Toast.vue'

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}

export default Toast
