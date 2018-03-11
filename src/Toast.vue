<template>
  <div class="toast-wrapper" :class="customClass" v-show="visible">
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
      showToast: false
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
    }
  },
  computed: {
    customClass () {
      const classes = []
      classes.push(this.position, this.className)
      this.showToast ? classes.push('fadeIn') : classes.push('fadeOut')
      this.animate && classes.push('animated')
      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
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
  transition: opacity .5s;
}
.toast-wrapper.fadeIn {
  opacity: 1;
}
.toast-wrapper .fadeOut {
  opacity: 0;
}
.toast-wrapper.top{
  top: 50px;
}
.toast-wrapper.bottom{
  bottom: 50px;
}
.toast-wrapper.center{
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
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
