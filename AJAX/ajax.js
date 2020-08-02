(function (global) {
	
	var ajax = {};
	
	function getRequestObject(){
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			return(new ActiveXObject("Microsoft.XMLHttp"));
		}
		else{
			global.alert("Ajax is not supported");
			return (null);
		}
	}

	ajax.sendGetRequest = function(requestUrl, responseHandler){
		var request = getRequestObject();
		request.onReadyState = function() {
			handleResponse (request, responseHandler);
		};
		request.open("GET", requestUrl, true);
		request.send(null);
	}

	function handleResponse (request, responseHandler) {
		if ((request.readyState == 4) && (request.status == 200) {
			responseHandler(request);
		}
	}

	global.$ajax =ajax;

})(window)