# mousestop.js

A jQuery mousestop event handler.


## Settings

Available options with notes, the values here are the defaults.

```javascript
$('#elem').mousestop({
    timeToStop      : null,         // the amount of time the stop event has to run before it will not run at all anymore
    delayToStop     : '300',        // the delay for what is considered a "stop"
    onMouseout      : null,         // function to run when we mouseout of our element
    onStopMove      : null          // function to run when we start moving again after the stop
});
```

## Example

```html
<div id="test" style="display:inline-block;padding:20px;border:solid 1px;">hover over me</div>
    
<div id="output"></div>

<script type="text/javascript">

    $('#test').mousestop(function()
    {
        $("#output").append('<div>stopped</div>');
    });

</script>
```


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com