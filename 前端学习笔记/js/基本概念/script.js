/**
 * 变量
 */
var a
alert(a)

var b = null
alert(b)

alert(typeof a)
alert(typeof b)

alert(a == b)
alert(a === b)

var a = 3
alert(typeof a)

var a = new Object
alert(typeof a)

/**
 * =======================================================
 */

alert(args(1, 2))

function args() {
    if (arguments.length == 1) {
        return arguments[0];
    } else {
        var i = 0;
        var sum = 0;
        for (; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        return sum;
    }
}

alert(args_parameters(1, 2))

function args_parameters(x, y) {
    if (arguments.length == 1) {
        alert(x)
        alert(y)
    } else if (arguments.length == 2) {
        alert(x)
        alert(y)

        y = arguments[0]
        alert(arguments[1])
        alert(y)

        arguments[1] = 3
        alert(y)
    }
}

alert(args_return(1, 2))

function args_return(x, y) {
    return y, x
}
