/*
 * rollingDice Plugin
 * http://goto.io/rollingdice
 *
 * Copyright 2013 http://goto.io
 *
 */
;(function ( $, window, undefined ) {

    var pluginName = 'rollingDice',
        document = window.document,
        defaults = {
            turningCounts : 15, // Number of times to roll the dice before showing the result
            defaultResult : 1 // By default 1 will be shown at the time of initialization
        };

    function RollingDice(element, options) {
        this.options = $.extend( {}, defaults, options) ;
        this.$el = $(element);
        this._defaults = defaults;
        this._name = pluginName;
        this._state = 0 ; // State = 0 == idle; state = 1 == Rolling;
        this._$dice = null;
        this._c = 0 ;
        this._timer = null;
        this._rolling_is_on = false;
        this.init();
    }

    RollingDice.prototype.init = function () {
        this._generateMarkup();
    };

    /* Private methods*/
    RollingDice.prototype._generateMarkup = function () {
        var self = this;
        self._$dice = $('<div class="dice"></div>');
        self.$el.append(self._$dice);
    };

    RollingDice.prototype._rollOnce = function(num,iTimes){
        var self = this,
            $dice = self._$dice;
        var randXn = Math.floor(Math.random() * 6) ;
        var randYn = Math.floor(Math.random() * 3);
        var x = -(45 + randXn*90);
        var y = -(315 + randYn*90);
        var strPos = x + "px " + y + "px";
        var cssObj = {'background-position' : strPos};
        var tc = self.options.turningCounts;
        if(iTimes){
            tc = iTimes;
        }
        $dice.css(cssObj);
        self._c++;
        if(self._c < tc){
            setTimeout(function(){self._rollOnce(num,tc)}, 50);
        }else{
            self._state = 0;
            self._c = 0;
            self.showNumber(num);
            self.$el.trigger({
                type:"rolled",
                num:num
            });
        }
    }

    RollingDice.prototype._roll = function(){
        var self = this,
            $dice = self._$dice;
        var randXn = Math.floor(Math.random() * 6) ;
        var randYn = Math.floor(Math.random() * 3);
        var x = -(45 + randXn*90);
        var y = -(315 + randYn*90);
        var strPos = x + "px " + y + "px";
        var cssObj = {
            'background-position' : strPos
        }
        $dice.css(cssObj);
        if(self._rolling_is_on){
            self._timer = setTimeout(function(){self._roll()}, 50);
        }
    }

    /* Public methods */
    RollingDice.prototype.showNumber = function(num){
        var self = this,
            $dice = self._$dice;
        var randXn = num - 1;
        var randYn = Math.floor(Math.random() * 3);
        var x = -(45 + randXn*90);
        var y = -(45 + randYn*90);
        var strPos = x + "px " + y + "px ";
        var cssObj = {
            'background-position' : strPos
        }
        $dice.css(cssObj);
        self.currentVal = num;
    }

    RollingDice.prototype.rollDiceToNum = function (iNum,iTimes){
        var self = this;
        if (!self._state){
            self._state = 1;
            self.$el.trigger({
                type:"rolling"
            });
            self._state = 1;
            self.c=0;
            if(typeof(iTimes) !== 'undefined' && iTimes){
                self._rollOnce(iNum,iTimes);
            }else{
                self._rollOnce(iNum,null);
            }
        }
    }

    RollingDice.prototype.rollDiceRandom = function (iTimes){
        var rand = Math.floor(Math.random() * 6)+1 ;
        this.rollDiceToNum(rand,iTimes);
    }

    RollingDice.prototype.justRoll = function(){
        var self = this;
        if (!self._state){
            self._state = 1;
            self.$el.trigger({
                type:"rolling"
            });
            self._rolling_is_on = true;
            self._roll();
        }
    }

    RollingDice.prototype.stopAndShowNumber = function(iNum){
        var self = this;
        if(self._state){
            var num = Math.floor(Math.random() * 6)+1 ;
            if(iNum){
                num = iNum;
            }
            self._rolling_is_on = false;
            clearTimeout(self._timer);
            self._timer = null;
            self._state = 0 ;
            self.showNumber(num);
            self.$el.trigger({
                type:"rolled",
                num:num
            });
        }
    }

    RollingDice.prototype.getState = function(){
        return this._state;
    }

    RollingDice.prototype.reset = function(){

    }

    $.fn.rollingDice = function(options) {
        return $(this).each(function() {
            var element = $(this);
            if(element.data('rollingDice')) return;
            var rollingDice = new RollingDice(this, options);
            console.log(rollingDice);
            element.data('rollingDice', rollingDice);
        });
    };

}(jQuery, window));