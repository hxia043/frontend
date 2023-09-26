/** Object */
var demo1 = {
    toLocaleString: function() {
        return "hxia";
    },

    toString: function() {
        return "huyun";
    }
};

var demo2 = {
    toLocaleString: function() {
        return "zhixian";
    },

    toString: function() {
        return "jonas";
    }
};

var people = [demo1, demo2]

alert(people);
alert(people.toString())
alert(people.toLocaleString())

/** Function Object */
var sum = function(x, y) {return x + y;};
alert(sum(1, 2))

var total = sum
sum = null
alert(total(2, 2))


alert(sub(2, 1))

function sub(x, y) {
    return x - y;
}

// var sub = function(x, y) {return x - y;};

/** Function property: arguments, this */
var factor = 0.8

var o = {factor: 0.75};

function mul() {
    if (arguments.length != 0) {
        var i = 0;
        var total = 1;
        for (; i < arguments.length; i++) {
            total = total * arguments[i];
        }

        return total * this.factor;
    }

    return 0;
}

alert(mul(1, 2, 3))
alert(mul.call(o, 1, 2, 3))

/** basic packaging type */
var a = "test file";
a.name = "hxia";
alert(a.name)
