// YOUR CODE GOES HERE
//jQuery.noConflict();

//.toggle( effect [, options ] [, duration ] [, complete ] )


$.fn.blink = function (interval) {
    this.hide(0).delay(interval).show(0).delay(interval).blink(interval);
    return this;
};

//jQuery.fn.blink = function (interval) {
//  setInterval(function () {
//    this.css('visibility', 'hidden');
//  }, interval);
//  return this;
//};

// V1
// show/hide every 1000ms
// jQuery('.myDiv').blink(1000);
// twice as fast
// jQuery('.otherDiv').blink(500);

// V2
//jQuery('div').blink(1000);

