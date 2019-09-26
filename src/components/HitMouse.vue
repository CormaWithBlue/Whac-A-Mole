<template>
  <div class="HitMouse" id="HitMouse">
    <div id="changeMouse" class="changeMouse" @mousedown="mouseDown()" @mouseup="mouseUp()">
      <div style="display: inline">
        <div class="mouseA1"></div>
        <div class="mouseA2"></div>
        <div class="mouseA3"></div>
        <div class="mouseA4"></div>
      </div>
      <div style="display: inline">
        <div class="mouseB1"></div>
        <div class="mouseB2"></div>
        <div class="mouseB3"></div>
        <div class="mouseB4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "Vue";
// import changeMouseA from "../assets/mouseOver.png";
export default {
  name: "HitMouse",
  //status == 0: 老鼠未出现
  //status == 1: 老鼠上升到最高到下降
  //status == 2: 老鼠被锤到并下降
  data() {
    return {
      status: 0
    };
  },
  methods: {
    mouseDown: function() {
      document.getElementById("changeMouse").className = "mouseDown";
      //       "url(" + changeMouseA + "),auto";
    },
    mouseUp: function() {
      document.getElementById("changeMouse").className = "changeMouse";
    }
    // mouseOver: function() {
    //   this.style.cursor = "url(../assets/mouseOver.png),auto";
    // }
    // changeMouse: function(div) {
    //   //return;
    //   if (div) {
    //     document.getElementById("changeMouse").style.cursor =
    //       "url(" + changeMouseA + "),auto";
    //   } else {
    //     document.getElementById("changeMouse").style.cursor = "wait";
    //   }
    // }
    // 地洞：
    //    地洞的8个位置
    // 老鼠：
    //  1. 随机老鼠的位置
    //  2. 老鼠的三种状态和动画：
    //   （1）老鼠未出现
    //   （2）老鼠上升到最高到下降
    //   （3）老鼠被锤到并下降
    //  3. 老鼠被锤到后，计数并显示
    // 鼠标：
    //  1.在背景图的div内就显示为锤子样式
    //  2.点击鼠标左键时候，切换锤子样式，鼠标抬起后，换回样式
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HitMouse {
  width: 815px;
  height: 489px;
  background: url(../assets/mouseHitImg.jpg);
  background-size: 813px 487px;
  margin: auto;
}
.changeMouse {
  width: 813px;
  height: 487px;
  cursor: url(../assets/mouseOver.png), auto;
  margin: auto;
}
.mouseDown {
  width: 813px;
  height: 487px;
  cursor: url(../assets/mouseDown.png), auto;
  margin: auto;
}
.mouseA1 {
  width: 78px;
  height: 78px;
  /* position: absolute; */
  position: relative;
  left: 65px;
  top: 179px;
  background-image: url(../assets/mouse.gif);
  float: left;
  /* display: inline; */
}
.mouseA2 {
  width: 78px;
  height: 78px;
  /* position: absolute; */
  position: relative;
  left: 190px;
  top: 179px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
.mouseA3 {
  width: 78px;
  height: 78px;
  /* position: absolute; */
  position: relative;
  left: 315px;
  top: 179px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
.mouseA4 {
  width: 78px;
  height: 78px;
  /* position: absolute; */
  position: relative;
  left: 440px;
  top: 179px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
.mouseB1 {
  width: 78px;
  height: 78px;
  /* position: absolute; */
  position: relative;
  left: -248px;
  top: 261px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
.mouseB2 {
  width: 78px;
  height: 78px;
  position: relative;
  left: -123px;
  top: 261px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
.mouseB3 {
  width: 78px;
  height: 78px;
  position: relative;
  left: 2px;
  top: 261px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
.mouseB4 {
  width: 78px;
  height: 78px;
  position: relative;
  left: 127px;
  top: 261px;
  background-image: url(../assets/mouse.gif);
  float: left;
}
</style>
