layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb17-header").css({"font-weight":"bold"}).html("按客户分类");

	// 获取到数据
	const s = utilHttpGet("./json/tb17.json")

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb17-body'));

	let option = deepClone(simpleEcharts);
	option.legend.left = "center";
	option.xAxis.boundaryGap = true;
	option.xAxis.data = s.data.type1;
	//option.xAxis.axisLabel = { interval: 0, rotate: 20 };
	option.series[0].name = "预计时长";
	option.series[0].type = "bar";
	option.series[0].smooth = false;
	option.series[0].markPoint = {};
	option.series[0].markLine = {};
	option.series[0].data = s.data.yuji;
	option.dataZoom = [];

	let series1 = deepClone(seriesEcharts);
	series1.name = "实际时长";
	series1.type = "bar";
	series1.smooth = false;
	series1.data = s.data.shiji;
	series1.markPoint = {};
	series1.markLine = {};
	option.series.push(series1);
	//console.log(option)
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
});