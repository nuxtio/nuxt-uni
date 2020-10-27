function loading(title) {
	uni.showLoading({
		title: title || '正在加载...',
	})
}

function hideLoading() {
	uni.hideLoading()
}

export default {
	loading: loading,
	hideLoading: hideLoading
}
