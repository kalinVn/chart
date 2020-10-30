
export default class Loader{

	constructor(){
		this.data = {
			date :[],
			eur : [],
			buy : [],
			usd : [],
			sellUsd : [],
			buyUsd : [],
			buyGbp : [],
			selGbp : [],
			days : [],
			rateUsd : [],
			rateGbr : []

		};
	}

	load(){
		let res = require('../data.json');
		let index = 1
		res.forEach(value => {
			this.data['date'].push(value["Date"]);
			this.data['eur'].push(value["Eur"]);
			this.data['buy'].push(value["Buy"]);
			this.data['usd'].push(value["Buy USD"]);
			this.data['sellUsd'].push(value["Sell USD"]);
			this.data['buyUsd'].push(value["Buy USD"]);
			this.data['buyGbp'].push(value["Buy GBP"]);
			this.data['selGbp'].push(value["Sell USD__1"]);
			this.data['days'].push(index);
			this.data['rateUsd'].push(value["Eur"] / value["Sell USD"] );
			this.data['rateGbr'].push(value["Eur"] / value["Sell USD__1"] );
			index++;
			//console.log(value["Date"])

		});
		return this.data;
	}



}