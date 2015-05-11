var ejax = {};

ejax.get = function(url){
	// var url = url;
	var xhr = new XMLHttpRequest();
	return {
		send: function(getData){
				xhr.open('get', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					getData(JSON.parse(xhr.responseText));
				});
				xhr.send();
		}
	}
}

ejax.post = function(url){
	var xhr = new XMLHttpRequest();
	return {
		send: function(msg, post){
				xhr.open('post', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					post(JSON.parse(xhr.responseText));
				})
				xhr.send(JSON.stringify(msg));
		}
	}
}

ejax.del = function(url){
	var xhr = new XMLHttpRequest();
	return {
		send: function(del){
				xhr.open('delete', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					del(JSON.parse(xhr.responseText));
				});
				xhr.send();
		}
	}
}

ejax.put = function(url){
	var xhr = new XMLHttpRequest();
	return {
		send: function(body, put){
				xhr.open('put', url);
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.addEventListener('load',function(e){
					put(JSON.parse(xhr.responseText));
				});
				xhr.send(JSON.stringify(body));
		}
	}
}


module.exports = ejax;
