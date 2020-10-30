export  var BAR_CHART_DATA =  {
	 type: 'bar',
	 data: {
	    
	    datasets: [
		    {
				label: 'USD',
				yAxisID: 'USD',
				
				backgroundColor : "#f58a33",
				borderColor : "white",
				borderWidth : 1,

		    }, 
		    {
				label : "GBR",
				yAxisID: 'USD',
				
				backgroundColor : "#003F85",
				borderColor : "white",
				borderWidth : 1
		    }
	    ]
	  	},
		options: {
			title: {
		   	align: 'left'
		},
		scales: {
			yAxes: [
					{
				    id: 'USD',
				    ticks: {
				      max: 1.3,
				      min: 0,
				      stepSize: 0.1,
				      fontColor: '#f58a33'
				    },
				    position: 'left'

			  	}, 
				{
					id: 'GBR',
					position: 'left',
					ticks: {
						max: 1.3,
						min: 0,
						stepSize: 0.1,
						fontColor: '#003F85',
					}
				}
			],
			xAxes: [
				{
			        barPercentage: 1.0,
			    }
		    ]
		}
	}
};

export  var DATA_PIE_TOP =  {
	type : "pie",
	data : {
		labels : ["match1", "match2"],
		datasets : [
			{
				labels : "TeamA score",
				data : [],
				backgroundColor : [
					"#f58a33",
					"#003F85"
				
				],
				borderColor : [
					"white",
					"white",
					
				],
				borderWidth : [1, 1]
			}
		]
	},
	options : {
		legend : {
			display : false
		},
		 title: {
            display: true,
            text: 'Buy'
        }
	}
		
};
export  var DATA_PIE_BOTTTOM =  {
	type : "pie",
	data : {
		labels : ["match1", "match2"],
		datasets : [
			{
				labels : "TeamA score",
				data : [],
				backgroundColor : [
					"#f58a33",
					"#003F85"
				
				],
				borderColor : [
					"white",
					"white",
					
				],
				borderWidth : [1, 1]
			}
		]
	},
	options : {
		legend : {
			display : false
		},
		title: {
            display: true,
            text: 'Sell'
        }
	}
		
};