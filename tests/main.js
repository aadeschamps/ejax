
ejax.get({
	url: 'http://randomthoughts.link/thoughts'
	})
	.send(function(thought){
		console.log(thought);
	})


ejax.post({
	url: 'http://randomthoughts.link/thoughts',
	body: {info: 'success!'}
	})
	.send(function(msg){
		console.log(msg);
	})


// ejax.del({
// 	url: 'http://randomthoughts.link/thoughts',
// 	body: {info: 'success!'}
// 	})
// 	.send(function(msg){
// 		console.log(msg);
// 	})

// ejax.put({
// 	url: 'http://randomthoughts.link/thoughts',
// 	body: {info: 'success!'}
// 	})
// 	.send(function(msg){
// 		console.log(msg);
// 	})