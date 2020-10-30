
export default class Renderer{

	constructor(){
		
	}

	render(ctx, data){
		var chart = new Chart(ctx, data);
		if(data.type == 'bar'){
			chart.canvas.parentNode.style.width = '728px';
		}else{
			chart.canvas.parentNode.style.height = '50%';
			chart.canvas.parentNode.style.height = '50%';
		
		}
		return chart;
	}

	scalesLabelTitle(Chart){
		Chart.pluginService.register({
  			beforeDraw: function(chart) {
  				var  ctx = document.getElementById('line-chart-canvas').getContext("2d");
				ctx.font = "12px Comic Sans MS";
				ctx.fillStyle = "#f58a33";
				ctx.textAlign = "center";
				ctx.fillText("USD",50, 10);
				ctx.font = "12px Comic Sans MS";
				ctx.fillStyle = "#003F85";
				ctx.textAlign = "center";
				ctx.fillText("CBR",15, 10);
  				
  				
			}
		});
	}


}