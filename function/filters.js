import moment from '../moment/moment.js'
import mask from './mask.js'

export default {
	// 价格rich
	priceRich: (price) => {
		price = price || 0
		let priceArr = price.toFixed(2).split('.')
		return [{
			name: 'div',
			attrs: {
				class: 'price-box',
			},
			children: [{
				type: 'text',
				text: '¥'
			}, {
				name: 'span',
				attrs: {
					class: 'int'
				},
				children: [
					{
						type: 'text',
						text: priceArr[0]
					}
				]
			}, {
				type: 'text',
				text: `.${priceArr[1]}`
			}]
		}]
	},
	
	/**
	 * 纯价格toFixed
	 */
	price: (price) => {
		price = price || 0
		return price.toFixed(2)
	},

	// 时间解析(如1分钟之前,1年前)
	fromNow: (datetime) => {
		if (!datetime) return
		return moment(datetime).fromNow()
	},
	
	/**
	 * 与当前时间差计算
	 */
	timediff: (datetime, minutes = 1800) => {
		let currentTime = moment().unix()
		let createTime = moment(datetime).add(30, 'm').unix()
		let diff = createTime - currentTime
		if (diff > 0) {
			return diff
		}
		return 0
	},
	
	// 手机掩码
	maskPhone: mask.maskPhone,
	
	// 邮箱掩码
	maskEmail: mask.maskEmail,
	
}