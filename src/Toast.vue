<template>
  <div class="toast-wrapper" :class="customClass" v-show="!animateEnd">
    <i class="toast-icon" :class="iconClass" v-if="iconClass"></i>
    <div class='toast-img-wrapper' v-if="img">
      <img class='toast-img' :src="img" />
    </div>
    <span class='toast-text'>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    },
    transition: {
      type: 'String',
      validator(t) {
        return t === 'fade' || t === 'slide'
      },
      default: 'slide'
    },
    message: String,
    className: String,
    img: String,
    position: {
      type: String,
      default: 'center'
    },
    iconClass: String,
    visible: Boolean
  },
  data () {
    return {
      showToast: false,
      animateEnd: true
    }
  },
  created () {
    this.showToast = this.visible
    let timer
    this.$watch('showToast', v => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (v) {
        timer = setTimeout(() => {
          this.showToast = false
          this.$emit('update:visible', false)
        }, this.duration)
      }
    })
  },
  watch: {
    visible (v) {
      this.showToast = v
    },
    showToast (v) {
      let timer
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (v) {
        this.animateEnd = false
      }
      timer = setTimeout(() => {
        this.animateEnd = !v
      }, this.animate ? 400 : 0);
    }
  },
  computed: {
    customClass () {
      const classes = []
      classes.push(this.position, this.className)
      this.showToast && classes.push(this.transition)
      this.animate && classes.push('animated')
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
.toast-wrapper[hidden] {
  z-index: -100;
}
.toast-wrapper {
  position: fixed;
  display: inline-block;
  background: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  color: #f0f0f0;
  padding: 12px;
  border-radius: 5px;
  box-shadow: 0 1px 6px rgba(0,0,0,.2);
  text-align: center;
  max-width: 300px;
  opacity: 0;
  z-index: 10000;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  margin: auto;
}
.animated {
  transition: opacity .4s, transform .4s;
}
.toast-wrapper.fade, .toast-wrapper.slide {
  opacity: 1;
}
.toast-wrapper.top{
  top: 50px;
}
.toast-wrapper.top.slide {
  transform: translate3d(-50%, 20px, 0)
}
.toast-wrapper.bottom{
  bottom: 50px;
}
.toast-wrapper.bottom.slide {
  transform: translate3d(-50%, -20px, 0)
}
.toast-wrapper.center{
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.toast-wrapper.center.slide {
  transform: translate3d(-50%, calc(-50% + 20px), 0);
}
.toast-text {
  word-wrap: break-word;
}
.toast-icon {
  display: block;
  margin-bottom: 10px;
  font-size: 36px;
}
.toast-img-wrapper {
  text-align: center;
}
.toast-img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}
</style>
