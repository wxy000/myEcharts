layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb4-header").css({"font-weight":"bold"}).html("基础散点图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb4-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.tooltip.trigger = "item";
	option.legend.orient = "vertical";
	option.legend.left = "left";
	option.xAxis = {};
	option.yAxis = {};
	option.series[0].name = "时长";
	option.series[0].type = "scatter";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].symbolSize = 10;
	option.series[0].data = [
		[10.0, 8.04],
		[8.07, 6.95],
		[13.0, 7.58],
		[9.05, 8.81],
		[11.0, 8.33],
		[14.0, 7.66],
		[13.4, 6.81],
		[10.0, 6.33],
		[14.0, 8.96],
		[12.5, 6.82],
		[9.15, 7.2],
		[11.5, 7.2],
		[3.03, 4.23],
		[12.2, 7.83],
		[2.02, 4.47],
		[1.05, 3.33],
		[4.05, 4.96],
		[6.03, 7.24],
		[12.0, 6.26],
		[12.0, 8.84],
		[7.08, 5.82],
		[5.02, 5.68]
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});