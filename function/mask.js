function mask(string, localPartIndex, domainIndex) {
	const length = string.length - 1

	const arr = string.split('').map((character, i) => {
		if (i <= localPartIndex || length - domainIndex <= i) return character

		return '*'
	})

	return arr.join('')
}

function extractEmails(text) {
	const regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?', 'gm')
	const emails = []
	let matches

	while(matches = regExp.exec(text)) {
		emails.push(matches[0])
	}

	return emails
}

function extractWords(text) {
	const regExp = /\b[^\s\n]+\b/g
	const words = []
	let matches

	while(matches = regExp.exec(text)) {
		words.push(matches[0])
	}

	return words
}

function extractPhones(text) {
	const words = extractWords(text)
	const regExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
	const phones = []

	words.forEach(word => {
		if (word.match(regExp)) phones.push(word)	
	})

	return phones
}

function maskEmail(input) {
	if (!input) return
	const emails = extractEmails(input)
	const localPartIndex = 1
	const domainIndex = 4

	let output = input

	emails.forEach(email => {
		const replacement = mask(email, localPartIndex, domainIndex)
		output = output.split(email).join(replacement)
	})

	return output
}

function maskPhone(input) {
	if (!input) return
	const phones = extractPhones(input)
	const localPartIndex = 2
	const domainIndex = 3

	let output = input

	phones.forEach(phone => {
		const replacement = mask(phone, localPartIndex, domainIndex)
		output = output.split(phone).join(replacement)
	})

	return output
}

export default {
	maskPhone: maskPhone,
	maskEmail: maskEmail,
	mask: mask
}