layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb1-header").css({"font-weight":"bold"}).html("基础柱状图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb1-body'));

	let option = deepClone(simpleEcharts);
	option.legend.left = "center";
	option.tooltip.trigger = "item";
	option.xAxis.boundaryGap = true;
	option.xAxis.data = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	option.series[0].name = "工作量";
	option.series[0].type = "bar";
	option.series[0].smooth = false;
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].data = [150, 230, 224, 218, 135, 147, 260];
	option.dataZoom = [];
	//console.log(option)
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
});