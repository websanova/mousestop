# mousestop.js

A jQuery mousestop plugin to compliment other mouse events such as move, over and out coming in at ~660 bytes minified.


## Examples

The most basic usage is to pass in the callback for a stop event.

```js
$('#el').mousestop(function()
{
    console.log("stopped")
});
```

We can also pass the `delay` time in the second parameter to specify the amount of time to delay before a stop triggers.  The default is 300 milliseconds

```js
$('#el').mousestop(function()
{
    console.log("stopped")
}, 400);
```

There is also a settings parameter called `timeToStop`.  This parameter specifies a window of time that the stop event has to occur.  After that time the stop event will no longer trigger whatsoever.  Leaving the value unset or setting it to null will deactivate this timer.

```js
$('#el').mousestop(function()
{
    console.log("stopped")
}, {timeToStop: 1000});
```

To set both a delay and a settings parameter.

```js
$('#el').mousestop(function()
{
    console.log("stopped")
}, 300, {timeToStop: 1000});
```


## Grunt.js

If you want to use Grunt you will need to install the required plugins locally using `npm install` in the root folder of the project.  If you need to setup Grunt on your system you can follow this [Setting up Grunt.js](http://www.websanova.com/blog/javascript/how-to-setup-grunt) guide.


## Resources

* [More jQuery plugins by Websanova](http://websanova.com/plugins)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com