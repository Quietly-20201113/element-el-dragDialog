import drag from './drag'
//用法，需要使用页面路径引入：import elDragDialog from '@/directive/el-dragDialog'
//页面注册命令：  directives: { elDragDialog }
//模块化单独引用，禁止改动
//不全局引用
const install = function(Vue) {
  Vue.directive('el-drag-dialog', drag)
}

if (window.Vue) {
  window['el-drag-dialog'] = drag
  Vue.use(install); // eslint-disable-line
}
drag.install = install
export default drag
