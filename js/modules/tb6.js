layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb6-header").css({"font-weight":"bold"}).html("基础雷达图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb6-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	option.tooltip.trigger = "item";
	delete option.xAxis;
	delete option.yAxis;
	option.radar = {
		// shape: 'circle',
		indicator: [
			{ name: 'Sales', max: 6500 },
			{ name: 'Administration', max: 16000 },
			{ name: 'Information Technology', max: 30000 },
			{ name: 'Customer Support', max: 38000 },
			{ name: 'Development', max: 52000 },
			{ name: 'Marketing', max: 25000 }
		]
	};
	option.series[0].type = "radar";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].data = [
		{
			value: [4200, 3000, 20000, 35000, 50000, 18000],
			name: 'Allocated Budget'
		},
		{
			value: [5000, 14000, 28000, 26000, 42000, 21000],
			name: 'Actual Spending'
		}
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});