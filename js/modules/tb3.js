layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb3-header").css({"font-weight":"bold"}).html("基础饼图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb3-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.tooltip.trigger = "item";
	option.legend.orient = "vertical";
	option.legend.left = "left";
	delete option.xAxis;
	delete option.yAxis;
	option.series[0].name = "时长";
	option.series[0].type = "pie";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].data = [
		{ value: 1048, name: 'Search Engine' },
		{ value: 735, name: 'Direct' },
		{ value: 580, name: 'Email' },
		{ value: 484, name: 'Union Ads' },
		{ value: 300, name: 'Video Ads' }
	];
	option.dataZoom = [];
	//console.log(option)
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});