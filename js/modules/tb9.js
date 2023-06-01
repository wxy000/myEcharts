layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb9-header").css({"font-weight":"bold"}).html("基础平行坐标");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb9-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	option.tooltip.trigger = "item";
	delete option.xAxis;
	delete option.yAxis;
	option.parallelAxis = [
		{ dim: 0, name: 'Price' },
		{ dim: 1, name: 'Net Weight' },
		{ dim: 2, name: 'Amount' },
		{
			dim: 3,
			name: 'Score',
			type: 'category',
			data: ['Excellent', 'Good', 'OK', 'Bad']
		}
	];
	option.series[0].type = "parallel";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].smooth = false;
	option.series[0].lineStyle = {width: 4};
	option.series[0].data = [
		[12.99, 100, 82, 'Good'],
		[9.99, 80, 77, 'OK'],
		[20, 120, 60, 'Excellent']
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});