这个项目最大的困惑是中间的横线怎么来的，怎么实现这条横线的动态伸缩。

项目通过 `.progress-container::before` 事先定义好这条横线，然后 `button` 覆盖。

接着，在扩展的时候通过关联 `click` 和 `progress` 的长度实现动态伸缩。
