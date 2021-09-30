const { google } = require('googleapis');
const axios = require('axios');

async function getValueExchange() {
	const spreadsheetId = '1M6zXNuEeGmE918FZS2Z-KWaXThuQYxsceXC1XB77nV0';
	const sheetName = 'Verb details';
	let getEdSheet = await axios.request({
		method: 'get',
		url: process.env.VUE_APP_AXIOS_URI + '/custom/edvanta-sheet',
		params: {
			spreadsheetId,
			sheetName,
		}
	});
	console.log(getEdSheet.data);

	return getEdSheet.data.MySheet;
}

async function loadValueExchange() {
	let value_exchange = []

	console.log('Starting to load Value Exchange');
	let exchange = await getValueExchange();
	// console.log({ exchange });
	exchange.values.splice(0, 1);        //remove the headers
	exchange.values.forEach(row => {
		value_exchange.push({
			verb: row[0],
			weight: row[1],
			rubies: row[2],
			description: row[3],
			expected_value: row[4],
			value_example: row[5],
			user_by: row[6],
			user_by_example: row[7],
			canonicals: row[8],
		});
	});
	console.log('Loaded Value Exchange');
	return value_exchange;
}

module.exports = {
	getValueExchange,
	loadValueExchange,
};