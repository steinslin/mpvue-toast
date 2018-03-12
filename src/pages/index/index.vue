<template>
  <div>
    <toast message="hello from toast" :visible.sync="visible" position="center"></toast>
    <button @click='setVisible(false)'>toggle toast</button>
    <Ripple ripple-class="ripple-test">
      <div>ripple test</div>
    </Ripple>
    <!-- <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button>
    <button @click='setVisible(false)'>toggle toast</button> -->
  </div>
</template>

<script>
// import toast from 'mpvue-toast'
// import toast from 'mpvue-toast'
import toast from '@/Toast.vue'
// import Ripple from '@/Ripple.vue'
import Ripple from 'mpvue-ripple'
// import img from '../../../static/20953049.jpeg'
// import '@/icon.css'
export default {
  data () {
    return {
      visible: false,
      // icon
    }
  },

  components: {
    toast,
    Ripple
  },

  methods: {
    setVisible() {
      this.visible = !this.visible
    }
  },

  created() {
    console.log(this)
  }
}
</script>

<style>
page {
  background: #f0f0f0;
}
.ripple-test {
  margin-top: 10px;
  background: #fff;
  text-align: center;
  padding: 12px;
  border-top: 0.5px solid #ddd;
  border-bottom: 0.5px solid #ddd;
}
</style>

