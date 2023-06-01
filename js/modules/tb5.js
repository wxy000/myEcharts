layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb5-header").css({"font-weight":"bold"}).html("基础K线图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb5-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	delete option.tooltip;
	option.xAxis.data = ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'];
	option.series[0].name = "时长";
	option.series[0].type = "candlestick";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].data = [
		[20, 34, 10, 38],
		[40, 35, 30, 50],
		[31, 38, 33, 44],
		[38, 15, 5, 42]
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});