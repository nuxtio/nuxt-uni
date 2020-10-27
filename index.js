// post类型对象参数转为get类型url参数
import queryParams from './function/queryParams.js'
// 路由封装
import route from './function/route.js'
// 常用正则匹配
import test from './function/test.js'
// toast
import toast from './function/toast.js'
// loading
import loading from './function/loading.js'
// 系统信息
import system from './function/system.js'
// 全局过滤
import filter from './function/filters.js'
// mask
import mask from './function/mask.js'
// 颜色处理
import color from './function/color.js'
// 复制
import clipboard from './function/clipboard/clipboard.js'
// 时间工具
import moment from './moment/moment.js'
require('./moment/locale/zh-cn')
// 设置moment中文语言包
moment.locale('zh-cn')


// Http封装
import Request from './request'
const http = new Request()

const $n = {
	queryParams: queryParams,
	test,
	toast: toast,
	moment: moment,
	http: http,
	mask,
	color: color,
	...route,
	...loading,
	...system
}

const install = Vue => {
	Vue.prototype.$n = $n
	Vue.prototype.$http = http
	// 方便标签上直接使用跳转
	Vue.prototype.push = route.push
	// 复制
	Vue.prototype.clipboard = clipboard

	// 注册全局过滤器
	Object.keys(filter).forEach(key => {
		Vue.filter(key, filter[key])
	})
}

export default {
	install
}