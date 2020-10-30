import Chart from 'chart.js';
import Loader  from '../components/lib/Loader.js';
import Renderer  from '../components/lib/Renderer.js';
import {BAR_CHART_DATA} from "../Config.js";
import {DATA_PIE_TOP} from "../Config.js";
import {DATA_PIE_BOTTTOM} from "../Config.js";

export default class App{	

	constructor() {
		this.chart;
		this.ctx = document.getElementById('line-chart-canvas');
		this.loader = new Loader();
		this.renderer = new Renderer();
		this.init();
	}

	init(){
		this.ctxBar = document.getElementById('line-chart-canvas');
		this.ctxPieTop = document.getElementById('pie-chart-canvas1');
		this.ctxPieBottom = document.getElementById('pie-chart-canvas2');
		this.data = this.loader.load();
		BAR_CHART_DATA.data.datasets[0]['data'] = this.data['rateUsd'];
		BAR_CHART_DATA.data.datasets[1]['data'] = this.data['rateGbr'];
		BAR_CHART_DATA.data.labels = this.data['days'];
		BAR_CHART_DATA['options']['onHover']= this.onHover.bind(this);
		
		DATA_PIE_TOP.data.datasets[0].data = [this.data['buyGbp'][12], this.data['buyUsd'][12]];
		DATA_PIE_BOTTTOM.data.datasets[0].data = [1 /this.data['selGbp'][12], 1/this.data['sellUsd'][12]];
		this.chartBar = this.renderer.render(this.ctxBar, BAR_CHART_DATA);
		this.chartPieTop = this.renderer.render(this.ctxPieTop, DATA_PIE_TOP);
		this.chartPieBottom = this.renderer.render(this.ctxPieBottom, DATA_PIE_BOTTTOM);
		this.renderer.scalesLabelTitle(Chart);
		
	}

	onHover(evt, el){
		if(this.data && el.length > 0 && this.data){
			let index = el[0]._index;
			console.log(el[0]._index)
			this.chartPieTop.data.datasets[0].data  = [this.data['buyGbp'][index], this.data['buyUsd'][index]];
			this.chartPieBottom.data.datasets[0].data  = [this.data['selGbp'][index], this.data['sellUsd'][index]];
			this.chartPieTop.update();
			this.chartPieBottom.update();
		}
		
	}


	

}





