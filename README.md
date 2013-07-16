# mousestop.js

A jQuery mousestop plugin to compliment other mouse events such as `mousemove`, `mouseout` and `mouseout` coming in at ~1Kb minified.

The `mousestop` event was created using the [jQuery Special Events API](http://www.websanova.com/blog/jquery/custom-events-using-the-jquery-special-events-api) and therefore can be binded like any other event.

* [View the mousestop demo](http://mousestop.websanova.com)
* [Download the lastest version of mousestop](https://github.com/websanova/mousestop/tags)


## Examples

The most basic usage is to pass in the callback for a stop event.

```js
$('#el').mousestop(function() {
    console.log("stopped")
});
```

We can also pass the `delay` time in the second parameter to specify the amount of time to delay before a stop triggers.  The default is 300 milliseconds

```js
$('#el').mousestop(2000, function() {
    console.log("stopped")
});
```

There is also a settings parameter called `timeToStop`.  This parameter specifies a window of time that the stop event has to occur.  After that time the stop event will no longer trigger whatsoever.  Leaving the value unset or setting it to null will deactivate this timer.

```js
$('#el').mousestop({timeToStop: 1000}, function() {
    console.log("stopped")
});
```

To set both a delay and a settings parameter.

```js
$('#el').mousestop({delay: 400, timeToStop: 1000}, function() {
    console.log("stopped")
});
```

We can also `bind` and `trigger` the event as you would expect with any other element.

```js
$('#el').bind('mousestop', function(){
	console.log('stopped');
});

$('#el').trigger('mousestop');
```

Since we are using the jQuery special API we can also use the `on` method to bind the event as well.

```js
$('#el').on('mousestop', function(){
	console.log('stopped');
});
```


## Grunt.js

If you want to use Grunt you will need to install the required plugins locally using `npm install` in the root folder of the project.  If you need to setup Grunt on your system you can follow this [Setting up Grunt.js](http://www.websanova.com/blog/javascript/how-to-setup-grunt) guide.


## Resources

* [jQuery Special Events API](http://www.websanova.com/blog/jquery/custom-events-using-the-jquery-special-events-api)
* [More jQuery plugins by Websanova](http://websanova.com/plugins)
* [Websanova JavaScript Extensions Project](http://websanova.com/extensions)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com