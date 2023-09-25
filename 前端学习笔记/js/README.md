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

