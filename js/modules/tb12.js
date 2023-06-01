layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb12-header").css({"font-weight":"bold"}).html("基础仪表盘");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb12-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	delete option.xAxis;
	delete option.yAxis;
	option.series[0].type = "gauge";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	delete option.series[0].radius;
	option.series[0].data = [
		{
			value: 50,
			name: 'SCORE'
		}
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});