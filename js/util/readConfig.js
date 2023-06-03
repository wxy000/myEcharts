let configALL = {}
let simpleEcharts = {}
let complexEcharts = {}
let seriesEcharts = {}

// 配置项
$.i18n.properties({
	name: "config-main",
	path: "config/",
	mode: "both",
	cache: false,
	language: "zh",
	callback: function () {
		configALL.router_num = $.i18n.prop("router_num");
		configALL.router_hidden = $.i18n.prop("router_hidden");
		configALL.router_width = $.i18n.prop("router_width");
		configALL.http_api = $.i18n.prop("http_api")
	}
});

// 读取echarts配置项
$.ajax({
	url: "./config/config-echarts/config-simpleEcharts.json",
	async: false,
	cache: false,
	success: function (data){
		simpleEcharts = data;
	}
});
$.ajax({
	url: "./config/config-echarts/config-complexEcharts.json",
	async: false,
	cache: false,
	success: function (data){
		complexEcharts = data;
	}
});
// 读取series（echarts的数据部分）
$.ajax({
	url: "./config/config-echarts/config-seriesEcharts.json",
	async: false,
	cache: false,
	success: function (data){
		seriesEcharts = data;
	}
});
