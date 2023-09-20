# 盒模型

![盒模型](./盒模型.png)

盒模型 `margin` 会合并，注意 `margin` 是和外围元素的 margin，不是和外部块元素的 margin。

盒模型中宽度和高度定义为：
```
元素总宽度 = 宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距
元素总高度 = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距
```
*轮廓不包括在宽度、高度定义中。*


[盒模型练习](https://www.w3cschool.cn/minicourse/play/basehtml?cp=15870)




# 定位

```
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

`position` 的位置属性是浮动的。元素的定位是怎么设置的？

