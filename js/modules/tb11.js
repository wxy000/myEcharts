layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb11-header").css({"font-weight":"bold"}).html("基础漏斗图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb11-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	delete option.xAxis;
	delete option.yAxis;
	option.series[0].type = "funnel";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].smooth = false;
	option.series[0].label = {
		show: true,
		position: 'inside'
	};
	option.series[0].labelLine = {
		length: 10,
		lineStyle: {
			width: 1,
			type: 'solid'
		}
	};
	option.series[0].itemStyle = {
		borderColor: '#fff',
		borderWidth: 1
	};
	option.series[0].data = [
		{ value: 60, name: 'Visit' },
		{ value: 40, name: 'Inquiry' },
		{ value: 20, name: 'Order' },
		{ value: 80, name: 'Click' },
		{ value: 100, name: 'Show' }
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});