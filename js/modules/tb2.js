layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb2-header").css({"font-weight":"bold"}).html("基础折线图");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb2-body'));

	/*const s = utilHttpGet("https://admin.blog.wangxingyi.top/api/users","{\"mode\":\"login\",\"account\":account,\"password\":password},")
	console.log(s);*/

	// 指定图表的配置项和数据
	let option = deepClone(simpleEcharts);
	option.legend.left = "center";
	option.xAxis.boundaryGap = false;
	option.xAxis.data = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	option.series[0].name = "时长";
	option.series[0].type = "line";
	option.series[0].data = [150, 230, 224, 218, 135, 147, 260];
	option.dataZoom = [];
	//console.log(option)
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);

});