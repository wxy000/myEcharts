layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb8-header").css({"font-weight":"bold"}).html("基础旭日图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb8-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	option.tooltip.trigger = "item";
	delete option.xAxis;
	delete option.yAxis;
	option.series[0].type = "sunburst";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].radius = [0, '90%'];
	option.series[0].data = [
		{
			name: 'Grandpa',
			children: [
				{
					name: 'Uncle Leo',
					value: 15,
					children: [
						{
							name: 'Cousin Jack',
							value: 2
						},
						{
							name: 'Cousin Mary',
							value: 5,
							children: [
								{
									name: 'Jackson',
									value: 2
								}
							]
						},
						{
							name: 'Cousin Ben',
							value: 4
						}
					]
				},
				{
					name: 'Father',
					value: 10,
					children: [
						{
							name: 'Me',
							value: 5
						},
						{
							name: 'Brother Peter',
							value: 1
						}
					]
				}
			]
		},
		{
			name: 'Nancy',
			children: [
				{
					name: 'Uncle Nike',
					children: [
						{
							name: 'Cousin Betty',
							value: 1
						},
						{
							name: 'Cousin Jenny',
							value: 2
						}
					]
				}
			]
		}
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});