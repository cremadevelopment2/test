import vuescroll from 'vuescroll'
import Vue from 'vue'

Vue.use(vuescroll, {
  ops: {
    // rail: {
    //   opacity: '1',
    //   background: '#01a99a',
    //   size: '4px',
    //   gutterOfSide: '0px',
    //   keepShow: true
    // },
    // bar: {
    //   background: 'red',
    //   keepShow: true,
    //   size: '4px',
    //   minSize: 0.2
    // },
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '6px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '2px',
      keepShow: false
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: true,
      background: 'rgba(0,0,0,0.2)',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '6px',
      disable: false
    },
    // scrollPanel: {
    //   easing: 'easeInQuad',
    //   speed: 800
    // },
    scrollButton: {
      enable: false,
      background: 'rgb(3, 185, 118)',
      opacity: 1,
      step: 180,
      mousedownStep: 30
    },
    vuescroll: {
      checkShiftKey: true,
      locking: false
    }
  }
})
Vue.component('vue-scroll', vuescroll)
