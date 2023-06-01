let router_html = "";
let router_script = "";

for (let i=0;i<configALL.router_num;i++){
	router_html = router_html+"<div id=\"tb"+(i+1)+"\">" +
		"<div class=\"layui-card\">" +
		"<div id=\"tb"+(i+1)+"-header\" class=\"layui-card-header\"></div>" +
		"<div class=\"layui-card-body layui-card-body-height\">" +
		"<div id=\"tb"+(i+1)+"-body\" style=\"height: 100%;\"></div>" +
		"</div>" +
		"</div>" +
		"</div>"
	router_script = router_script+"<script type=\"text/javascript\" src=\"../js/modules/tb"+(i+1)+".js\"></script>"
}
$("#router-html").html(router_html);

// 隐藏
let router_hidden = configALL.router_hidden.split(",");
for (let i=0;i<router_hidden.length;i++){
	$("#tb"+router_hidden[i]).hide();
}
// 设置图表宽度
let router_width = configALL.router_width.split(",");
for (let i=0;i<configALL.router_width.length;i++){
	console.log(router_width[i]);
	$("#tb"+(i+1)).addClass("layui-col-md"+router_width[i]);
}

// js的加载要放在最后
$("#router-script").html(router_script);