# mpvue-toast

> mpvue-toast is a toast plugin for mpvue.

## install

```bash
npm install mpvue-toast --save
```

## Usage

```html
<template>
  <div>
    <toast message="hello from toast" :visible.sync="visible"></toast>
    <toast message="hello from toast" :visible.sync="visible" :img="img"></toast>
    <toast message="hello from toast" :visible.sync="visible" icon-class="iconfont icon-shoucang"></toast>
    <button @click='setVisible(false)'>toggle toast</button>
  </div>
</template>

<script>
import toast from 'mpvue-toast'
// import img from 'img.jpg'
// import '@/icon.css'

export default {
  data () {
    return {
      visible: false,
      // img
    }
  },

  components: {
    toast
  },

  methods: {
    setVisible() {
      this.visible = !this.visible
    }
  },
}
</script>
```

## props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| animate | 是否启用动画，现在只支持 `fade` | Boolean | - | true |
| duration | `Toast`的持续时间，单位毫秒 | Number | - | 2000 |
| message | `Toast`的内容 | String | - | - |
| className | `Toast`的class | String | - | - |
| img | 图片 | String | - | - |
| iconClass | 图标class，可以使用 `iconfont` | String | - | - |
| position | `Toast`的显示位置 | String | - | center |
| visible | 控制`Toast`的显示，支持`sync` | Boolean | - | - |

## TODO

## screenshots

![](https://raw.githubusercontent.com/linrui1994/mpvue-toast/master/static/1.jpeg)
![](https://raw.githubusercontent.com/linrui1994/mpvue-toast/master/static/2.jpeg)
![](https://raw.githubusercontent.com/linrui1994/mpvue-toast/master/static/3.jpeg)
