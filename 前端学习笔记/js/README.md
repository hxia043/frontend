# Javascript

`Javascript` 是一种松散类型的语言，为什么松散可以参考 [Javascript 诞生记](http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)。

## 基本概念

### 变量和函数

`Javascript` 中的变量名可以被赋予任何类型，解释器不会做类型检查，使用 `typeof` 可以判定变量类型。

函数中的参数会被传递到 `arguments` 数组，参数和 `arguments` 不共享同一块内存，但同步值。示例如：
```
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
```

由于函数内使用 `arguments` 数组，其接受的参数是可变的，不过为了可读性还是要显示声明参数。

不同于 `Go`，函数返回的类型是 `any`（注：`any` 表明返回任意类型），不过函数只能返回一个值，如果返回多个值，最后的返回值将被返回。示例如：
```
alert(args_return(1, 2))

function args_return(x, y) {
    return y, x
}
```

## 变量，作用域和内存问题

变量分基本类型和引用类型，函数中参数是值传递，要注意引用类型在函数中的传递。示例如：
```
var c = new Object;

function getName(obj) {
    obj.name = "hxia";
    obj = new Object;
    obj.name = "huyun";
}

getName(c)
alert(c.name)
```

函数中变量的作用域和执行环境挂钩，全局执行环境是宿主环境 `window` 对象。如示例：
```
var a = 1

function context() {
    var a = 2
    alert(a)

    window.a = 1
    alert(window.a)
}

context()
alert(a)
```

全局变量 `a` 是挂在宿主环境 `window` 对象下的。

同时，不同于其它语言（通过大括号构造）的块作用域，`Javascript` 没有块作用域。
```
if (true) {
    var d = 1
}

alert(d)    // d: 1
```

内存问题是个很有意思的问题，也是值得研究的问题。  
不少语言都有垃圾回收机制，通过标记清除结合垃圾定时回收机制清理内存。了解到这个程度还不够，要到标记怎么被标记的，垃圾怎么被清楚的才算是了解了垃圾回收的原理。

这部分留个作业，作为后续攻关课题，可以结合 `Go` 和 `Javascript` 对比学习这块。

对于 `Javascript` 来说，最佳实践是不需要的引用变量要置为 `null`，以便垃圾收集器下次运行时将其回收。


## 引用类型

引用类型有 `Object`，`Function` 和基本包装类型等。

引用类型“继承”原型的方法和属性，可重构原型的方法和属性实现自定义方法。如下：
```
var demo1 = {
    toLocaleString: function() {
        return "hxia";
    },

    toString: function() {
        return "huyun";
    }
};
```

函数是一种引用类型，函数内有两个非继承方法 `apply()` 和 `call()`，负责将函数内的 `this` 变量绑定到对象上。

解析器会通过函数声明提升读取并添加函数声明到执行环境。

函数内的 `arguments` 对象可以看作对象中的对象（函数是一个对象）。

使用引用类型可以非常灵活的支持各种功能，比如栈和队列。
