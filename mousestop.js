(function($) {
    $.fn.mousestop = function(func, delay, settings) {
        if(typeof delay === 'object') {
            settings = delay;
            delay = null;
        }

        delay = delay || 300;
        settings = settings || {};
        
        return this.each(function() {
            var $el = $(this),
                movement = false,
                displayTimer = null,
                movementTimer = null;
        
            //only need this piece if there is a time limit on when the mouse stop can occur.
            if (settings.timeToStop) {
                var x = null, 
                    y = null,
                    counter = 0,
                    counterMax = Math.ceil(settings.timeToStop / 100);
                
                $el.mouseover(function(e) {
                    movement = true;
                    
                    //check if movement has stopped to a maximum time of 100*counterMax, after that event will not run at all unless you re-mouseover
                    displayTimer = window.setInterval(function() {
                        counter++;
                        
                        if (counter < counterMax) {
                            if (!movement) {
                                window.clearTimeout(displayTimer);//clear the timeout to avoid any funkiness
                                
                                //set the coordinates for the event to the ones from the document event
                                e.pageX = x;
                                e.pageY = y;
                                
                                if(func) { func.apply(this, [e]); }
                            }
                            //else do nothing, just iterate
                        }
                        else {
                            //we can turn this off to avoid using the timeout in the mousemove
                            movement = false;
                        }
                    }, 100);
                });
            }
            
            $el.mouseout(function(e) {
                //kill this timers incase it's still running
                window.clearTimeout(displayTimer);
                window.clearTimeout(movementTimer);
                
                counter = 0;//reset counter for when we mouseover again
                movement = false;//set movement back to false
            })
            .mousemove(function(e) {
                x = e.pageX;
                y = e.pageY;
                
                //if we have moused over this will be on
                if (movement) {
                    //clear timer and set again, this will determine our "stop" which will occur if mouse is in same position for the delay time or more milliseconds
                    window.clearTimeout(movementTimer);
                    movementTimer = window.setTimeout(function() {
                        movement = false;
                        if (settings.timeToStop == null && func) { func.apply(this, [e]); }
                    }, delay);
                }
                else {
                    movement = true;
                }
            });
        });
    };
})(jQuery);