layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb14-header").css({"font-weight":"bold"}).html("按类型分类");

	// 获取到数据
	const s = utilHttpGet(configALL.http_api+"/zentao/getLeixingInfo?dateStart=2023-04-27&dateEnd=2023-05-31&type0=1","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MTI0MDMsIkNyZWF0ZWRBdCI6IjAwMDEtMDEtMDFUMDA6MDA6MDBaIiwiVXBkYXRlZEF0IjoiMDAwMS0wMS0wMVQwMDowMDowMFoiLCJEZWxldGVkQXQiOm51bGwsInVzZXJuYW1lIjoid2FuZ3h5YiIsInJlYWxuYW1lIjoi546L5YW05q-FIiwicGhvbmUiOiIxNTg1NzE3OTUyOSIsImVtYWlsIjoiMzk2MzEwNTgzQHFxLmNvbSIsImdlbmRlciI6Im0iLCJtYXJrIjoi5bCP546L5a2QIiwiZXhwIjoxNjg1ODM1MzAzLjI0MjYzNCwiaXNzIjoi5oeS54yrIn0.1o_GjY6z6pr7u7vvyPRI89xVmRu4yJsBhfLOCH4RQMk")

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb14-body'));

	let option = deepClone(simpleEcharts);
	option.legend.left = "center";
	option.xAxis.boundaryGap = true;
	option.xAxis.data = s.data.type1;
	option.xAxis.axisLabel = { interval: 0, rotate: 20 };
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