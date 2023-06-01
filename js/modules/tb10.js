layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb10-header").css({"font-weight":"bold"}).html("基础桑基图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb10-body'));

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.orient = "vertical";
	option.legend.left = "left";
	delete option.xAxis;
	delete option.yAxis;
	option.series[0].type = "sankey";
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].layout = "none";
	option.series[0].emphasis = {focus: 'adjacency'};
	option.series[0].smooth = false;
	option.series[0].lineStyle = {width: 4};
	option.series[0].data = [
		{
			name: 'a'
		},
		{
			name: 'b'
		},
		{
			name: 'a1'
		},
		{
			name: 'a2'
		},
		{
			name: 'b1'
		},
		{
			name: 'c'
		}
	];
	option.series[0].links = [
		{
			source: 'a',
			target: 'a1',
			value: 5
		},
		{
			source: 'a',
			target: 'a2',
			value: 3
		},
		{
			source: 'b',
			target: 'b1',
			value: 8
		},
		{
			source: 'a',
			target: 'b1',
			value: 3
		},
		{
			source: 'b1',
			target: 'a1',
			value: 1
		},
		{
			source: 'b1',
			target: 'c',
			value: 2
		}
	];
	option.dataZoom = [];
	//console.log(option);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});