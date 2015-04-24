
# EJAX

I wanted to make a really simple and lightweight library to handle simple ajax requests using vanilla javascript. The ideas is that downloading the entire JQuery library when you don't really need it is unneccesary. This library makes it very easy to send out ajax requests in the browser without all of that.

### Progress

Right now, the library is incomplete. I have just started writing it. I'm looking to finish the simplest form of this library fairly quickly, so check back for updates.

### How to Use

Using this library is very simple. All you need to do is use the ejax objects ajax methods in order create an object that responds to the '.send' method. For example, if you wanted to send a get request you can write as follows.

``` javascript
	
	ejax.get({
		url: 'http://yourAPI.com/whatever'
		})
		.send(function(data){
			console.log(data);
		})

```

All of the methods (like the get method above) take in a spec object. Every spec object must have a url property. Methods that include a body (like the post and put methods) also must have a body property with the data that will be stringified and sent.

The '.send' method taked in the callback function that will be called when the data is returned. The data is returned already parsed and ready to be used.