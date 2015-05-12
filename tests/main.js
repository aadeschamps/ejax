
ejax.get('http://randomthoughts.link/thoughts')
	.send(function(thought){
		//console.log(thought);
		console.log(thought.results[0])
	})


ejax.post('http://randomthoughts.link/thoughts')
	.send({info: 'Ejax, baby!'}, function(msg){
		console.log(msg);
	})

//
// ejax.del({
// 	url: 'http://randomthoughts.link/thoughts',
// 	body: {info: 'success!'}
// 	})
// 	.send(function(msg){
// 		console.log(msg);
// 	})
//
// ejax.put({
// 	url: 'http://randomthoughts.link/thoughts',
// 	body: {info: 'success!'}
// 	})
// 	.send(function(msg){
// 		console.log(msg);
// 	})
