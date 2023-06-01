layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb7-header").css({"font-weight":"bold"}).html("日历热力图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb7-body'));

	function getVirtualData(year) {
		const date = +echarts.time.parse(year + '-01-01');
		const end = +echarts.time.parse(+year + 1 + '-01-01');
		const dayTime = 3600 * 24 * 1000;
		const data = [];
		for (let time = date; time < end; time += dayTime) {
			data.push([
				echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
				Math.floor(Math.random() * 10000)
			]);
		}
		return data;
	}

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	option.tooltip.trigger = "item";
	delete option.xAxis;
	delete option.yAxis;
	option.visualMap = {
		min: 0,
		max: 10000,
		type: 'piecewise',
		orient: 'horizontal',
		left: 'center',
		top: 65
	};
	option.calendar = {
		top: 120,
		left: 30,
		right: 30,
		cellSize: ['auto', 13],
		range: '2016',
		itemStyle: {
			borderWidth: 0.5
		},
		yearLabel: { show: false }
	};
	option.series[0].type = "heatmap";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].coordinateSystem = "calendar";
	option.series[0].data = getVirtualData('2016');
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});