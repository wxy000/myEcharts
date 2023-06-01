layui.use(['layer', 'form'], function(){
	const layer = layui.layer,
		form = layui.form;

	$("#tb16-header").css({"font-weight":"bold"}).html("按客户分组\n" +
		"<div class=\"layui-btn-group\" style=\"float:right;\">\n" +
		"<button data-method=\"offset\" id=\"tb16-yuji\" data-type=\"yuji\" class=\"kehu layui-btn layui-btn-primary layui-btn-xs layui-bg-blue\">预计</button>\n" +
		"<button data-method=\"offset\" id=\"tb16-shiji\" data-type=\"shiji\" class=\"kehu layui-btn layui-btn-primary layui-btn-xs\">实际</button>\n" +
		"</div>");

	// 获取到数据
	const yuji = utilHttpGet("./json/tb16-yuji.json");
	const shiji = utilHttpGet("./json/tb16-shiji.json");

	// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById('tb16-body'));

	let option = deepClone(simpleEcharts);
	function op(option,data){
		delete option.legend;
		delete option.xAxis;
		delete option.yAxis;
		option.series[0].name = "时长";
		option.series[0].type = "pie";
		option.series[0].markPoint = {};
		option.series[0].markLine = {};
		option.series[0].data = data.data;
		option.dataZoom = [];
		//console.log(option)
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	}

	// 初始化
	op(option,yuji);

	//触发事件-按钮事件
	const active = {
		offset: function (othis) {
			const type = othis.data('type');
			$(".kehu").attr("class","kehu layui-btn layui-btn-primary layui-btn-xs");
			$("#tb16-"+type).attr("class","kehu layui-btn layui-btn-primary layui-btn-xs layui-bg-blue");
			if (type==="yuji"){
				op(option,yuji);
			}
			if (type==="shiji"){
				op(option,shiji);
			}
		}
	};
	$('.kehu').on('click', function(){
		const othis = $(this), method = othis.data('method');
		active[method] ? active[method].call(this, othis) : '';
	});
});