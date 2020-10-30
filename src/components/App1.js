import Chart from 'chart.js';

export default class App{	

	constructor(){
		this.chart;
		this.ctx = document.getElementById('line-chart-canvas');
		
		this.init();
	}

	async init(){
		
		
		await this.addChartBar();
		await this.addChartPie1();

		
	}

	addChartPie1(){
		var ctx1 = document.getElementById('pie-chart-canvas1');
		var ctx2 = document.getElementById('pie-chart-canvas2');
		var data1 = {
			labels : ["match1", "match2", "match3", "match4", "match5"],
			datasets : [{
				labels : "TeamA score",
				data : [10, 50, 25, 70, 40],
				backgroundColor : [
					"#DEB887",
					"#A9A9A9",
					"#DC143C",
					"#F4A460",
					"#2E8857"
				],
				borderColor : [
					"#CDA776",
					"#989898",
					"#CB252B",
					"#E39371",
					"#1D7A46"
				],
				borderWidth : [1, 1, 1, 1, 1]
			}]
		}
		var data1 = {
			labels : ["match1", "match2", "match3", "match4", "match5"],
			datasets : [{
				labels : "TeamA score",
				data : [10, 50, 25, 70, 40],
				backgroundColor : [
					"#DEB887",
					"#A9A9A9",
					"#DC143C",
					"#F4A460",
					"#2E8857"
				],
				borderColor : [
					"#CDA776",
					"#989898",
					"#CB252B",
					"#E39371",
					"#1D7A46"
				],
				borderWidth : [1, 1, 1, 1, 1]
			}]
		}
		var chart1 = new Chart(ctx1, {
			type : "pie",
			data : data1,
			options : {}
		});
		var pieChart  = new Chart(ctx1, cfg1);
	}

	addChartPie() {
		
		this.data1 = {
			label : ['match1', 'match2'],
			datasets : [
				
				{
					label : "TeamB score", 
					data : [30, 15],
					backgroundColor : "green",
					borderColor : "black",
					borderWidth : 1
					
				}
			]
		};
		this.options = {
			title : {
				display : true,
				position : "top",
				text : "Line Graph", 
				fontSize : 18,
				fontColor : "#111" 
			},
			legent : {
				display : true,
				position : "bottom"
			}
		};
		this.options1 = {
			title : {
				display : true,
				position : "top",
				text : "bar Graph", 
				fontSize : 8,
				fontColor : "#111" 
			},
			legent : {
				display : true,
				position : "bottom"
			},
			scales : {
				yAxes : [{
					ticks : {
						min : 0
					}
				}]
			}
		};
		let cfg1 = {
			type : 'pie',
			data : this.data1,
			options : this.options1
		}
		//this.chart = new Chart(this.ctx, cfg1);
		this.chartPie = new Chart(this.ctx, cfg1);
		this.chartPie.canvas.parentNode.style.height = '128px';
		this.chartPie.canvas.parentNode.style.width = '128px';
		
	}

	addChartBar(){
		this.data = {
			label : ['match1', 'match2', 'match3', 'match4', 'match5'],
			datasets : [
				{
					label : "TeamA score", 
					data : [10, 50, 25, 70, 40],
					backgroundColor : "red",
					borderColor : "lightBlue",
					fill : false,
					lineTension : 0,
					pointRadius : 5
				},
				{
					label : "TeamB score", 
					data : [20, 35, 40, 60, 50],
					backgroundColor : "red",
					borderColor : "black",
					fill : false,
					lineTension : 0,
					pointRadius : 5
				}
			]
		};
		this.data1 = {
			label : ['match1', 'match2', 'match3', 'match4', 'match5'],
			datasets : [
				{
					label : "TeamA score", 
					data : [10, 50, 25, 70, 40],
					backgroundColor : "red",
					borderColor : "red",
					borderWidth : 1,

				},
				{
					label : "TeamB score", 
					data : [20, 35, 40, 60, 50],
					backgroundColor : "green",
					borderColor : "black",
					borderWidth : 1
					
				},
				{
					label : "TeamB score", 
					data : [4, 4, 12, 50, 33],
					backgroundColor : "purple",
					borderColor : "black",
					borderWidth : 1
					
				},
				{
					label : "TeamA score", 
					data : [10, 50, 25, 70, 40],
					backgroundColor : "red",
					borderColor : "red",
					borderWidth : 1
				},
				{
					label : "TeamB score", 
					data : [20, 35, 40, 60, 50],
					backgroundColor : "green",
					borderColor : "black",
					borderWidth : 1
					
				},
				{
					label : "TeamB score", 
					data : [4, 4, 12, 60, 33],
					backgroundColor : "purple",
					borderColor : "black",
					borderWidth : 1
					
				}
			]
		};
		this.options = {
			title : {
				display : true,
				position : "top",
				text : "Line Graph", 
				fontSize : 18,
				fontColor : "#111" 
			},
			legent : {
				display : true,
				position : "bottom"
			}
		};
		this.options1 = {
			title : {
				display : true,
				position : "top",
				text : "bar Graph", 
				fontSize : 8,
				fontColor : "#111" 
			},
			legend : {
				display : false
			},

			scales : {
				yAxes : [{
					ticks : {
						min : 0
					}
				}],
				xAxes: [{
		           
		            barPercentage: 1.0,
		        }],


			},

		};
		let data = this.data;
		const cfg = {
		    type : 'line',
		    data : data,
		    options : this.options
		};
		let cfg1 = {
			type : 'bar',
			data : this.data1,
			options : this.options1
		}
		//this.chart = new Chart(this.ctx, cfg1);
		this.chart = new Chart(this.ctx, cfg1);
		this.chart.canvas.parentNode.style.height = '728px';
		this.chart.canvas.parentNode.style.width = '728px';
		console.log(this.chart);
	}

}





