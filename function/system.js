export default {
	/**
	 * 系统信息
	 */
	system: (key = '') => {
		let info = uni.getSystemInfoSync()
		if (key) {
			return info[key]
		}
		return info
	},
	
	
}