
var ejax = ejax || {}

ejax.get = function(spec){
	var url = spec.url;
	var xhr = new XMLHttpRequest();
	return {

		send: function(callback){
				xhr.open('get', url);
				//xhr.
				xhr.addEventListener('load',function(e){
					callback(xhr.responseText);
				});
				xhr.send();
		}
	}
}

ejax.post = function(spec){
	var url = spec.url;
	var body = spec.body;
	var xhr = new XMLHttpRequest();
	return {
		send: function(callback){
				xhr.open('post', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(xhr.responseText);
				});
				xhr.send(JSON.stringify(body));
		}
	}
}

ejax.del = function(spec){
	var url = spec.url;
	var xhr = new XMLHttpRequest();
	return {
		send: function(callback){
				xhr.open('delete', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(xhr.responseText);
				});
				xhr.send();
		}
	}
}

ejax.update = function(spec){
	var url = spec.url;
	var body = spec.body;
	var xhr = new XMLHttpRequest();
	return {
		send: function(callback){
				xhr.open('put', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(xhr.responseText);
				});
				xhr.send(JSON.stringify(body));
		}
	}
}
