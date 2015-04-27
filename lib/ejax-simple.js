
var ejax = ejax || {}

ejax.get = function(url){
	var url = url;
	var xhr = new XMLHttpRequest();
	return {

		send: function(callback){
			console.log('here');
				xhr.open('get', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(JSON.parse(xhr.responseText));
				});
				xhr.send();
		}
	}
}

ejax.post = function(url){
	var xhr = new XMLHttpRequest();
	return {
		send: function(body, callback){
				xhr.open('post', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(JSON.parse(xhr.responseText));
				})
				xhr.send(JSON.stringify(body));
		}
	}
}

ejax.del = function(url){
	var xhr = new XMLHttpRequest();
	return {
		send: function(callback){
				xhr.open('delete', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(JSON.parse(xhr.responseText));
				});
				xhr.send();
		}
	}
}

ejax.put = function(url){
	var xhr = new XMLHttpRequest();
	return {
		send: function(body, callback){
				xhr.open('put', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					callback(JSON.parse(xhr.responseText));
				});
				xhr.send(JSON.stringify(body));
		}
	}
}
