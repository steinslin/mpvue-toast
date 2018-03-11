<template>
  <div>
    <toast message="hello from toast" :visible.sync="visible" position="center"></toast>
    <button @click='setVisible(false)'>toggle toast</button>
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
    toast
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
