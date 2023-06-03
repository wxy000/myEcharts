function _response(){
	this.code = 200;
	this.msg = "成功";
	this.data = {};
}

function utilHttp(type, url, token, data) {
	const resp = new _response();
	$.ajax({
		url: url,
		type: type,
		dataType: "JSON",
		async: false,
		cache:false,
		headers: {
			access_token: token
		},
		data: data,
		//成功
		success: (res) => {
			//res就是后台给我的值
			resp.code = res.code
			resp.msg = res.msg
			resp.data = res.data
		},
		//错误
		error: (res) => {
			resp.code = res.status;
			resp.msg = res.statusText;
		}
	});
	return resp;
}

function utilHttpGet(url, token='', data={}){
	return utilHttp("GET", url, token, data)
}

function utilHttpPost(url, token='', data={}){
	return utilHttp("POST", url, token, data)
}

function utilHttpReadFile(url){
	const resp = new _response();
	$.ajax({
		url: url,
		async: false,
		cache:false,
		success: function (data){
			resp.data = data;
		}
	});
	return resp.data;
}