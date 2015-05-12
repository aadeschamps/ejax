
# EJAX

I wanted to make a really simple and lightweight library to handle simple ajax requests using vanilla javascript. The ideas is that downloading the entire JQuery library when you don't really need it is unneccesary. This library makes it very easy to send out ajax requests in the browser without all of that.

### Progress

Right now, the library is incomplete. I have just started writing it. I'm looking to finish the simplest form of this library fairly quickly, so check back for updates.

### How to Use

Using this library is very simple. All you need to do is use the ejax objects ajax methods in order create an object that responds to the '.send' method. For example, if you wanted to send a get request you can write as follows.

``` javascript
	
	ejax.get('http://yourAPI.com/whatever')
		.send(function(data){
			console.log(data);
		})

```

All of the methods (like the get method above) take in a url. This is, obviously, the url that the ajax request will be sent to. Returned from this function is an object that will respond to a '.send' call. You can use this call right away or store this object in a variable that can be reused over and over again.

The '.send' method taked in the callback function that will be called when the data is returned. The data is returned already parsed and ready to be used. For requests that require a body, you must also send in a body object, which will be stringified and sent.

Another useful part of this library is that you can create ajax functions with specific urls that you can reuse over and over again. Below is an example:

``` javascript
	var getInfo = ejax.get('http://yourAPI.com/whatever')

	getInfo.send(function(data){
		console.log(data);
		})

	var postInfo = ejax.get('http://yourAPI.com/whatever');

	var info = {name: 'John Doe'}
	postInfo(info, function(data){
		console.log(data);
		})
```

The getInfo function can be used anywhere in your program where you need to send a get request to that specific url.

### Testing

The specs folder holds the testing for only verifying of the functions for request methods. More testing to be done in the future. (npm test command does not work yet, still learning everything!) (by contributor Alvin)


#### MIT

The MIT License (MIT)
[OSI Approved License]
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
