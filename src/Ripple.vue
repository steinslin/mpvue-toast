<template>
  <div class="ripple-wrapper" :class="classes" @click="handleClick">
    <slot></slot>
    <div class="ripple-content" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 1000
    },
    rippleClass: String
  },
  data () {
    return {
      style: '',
      timer: null
    }
  },
  computed: {
    classes () {
      const classes = []
      this.rippleClass && classes.push(this.rippleClass)
      return classes.join(' ')
    }
  },
  mounted () {
    const query = wx.createSelectorQuery()
    query.select('.ripple-wrapper').boundingClientRect(rect => {
      this.wrapperX = rect.left
      this.wrapperY = rect.top
    }).exec()
  },
  methods: {
    handleClick (e) {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
        this.style = ''
      }
      this.$nextTick(() => {
        const { x, y } = e
        const style = {
          left: `${x - this.wrapperX}px`,
          top: `${y - this.wrapperY}px`,
          animation: `ripple ${this.duration / 1000}s cubic-bezier(0, 0, 0.2, 1)`
        }
        let s = ''
        Object.keys(style).forEach(k => {
          s += `${k}: ${style[k]};`
        })
        this.style = s
        this.timer = setTimeout(() => {
          this.style = ''
        }, this.duration)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.ripple-wrapper {
  position: relative;
  overflow: hidden;
  .ripple-content {
    background: rgba(18, 150, 220, 0.15);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    transform: scale(0);
  }
}
@keyframes ripple {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(15);
  }
}
</style>
