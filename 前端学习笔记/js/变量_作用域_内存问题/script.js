/** 执行环境 */
var a = 1

function context() {
    var a = 2
    alert(a)

    window.a = 1
    alert(window.a)
}

context()
alert(a)

/** 引用对象 */
var b = new Object;

function getName(obj) {
    obj.name = "hxia"
}

getName(b)
alert(b.name)


var c = new Object;

function getName(obj) {
    obj.name = "hxia";
    obj = new Object;
    obj.name = "huyun";
}

getName(c)
alert(c.name)

/** 块作用域 */

if (true) {
    var d = 1
}

alert(d)
