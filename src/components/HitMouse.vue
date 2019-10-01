<template>
  <div class="HitMouse" id="HitMouse">
    <div id="changeMouse" class="changeMouse" @mousedown="mouseDown()" @mouseup="mouseUp()">
      <div class="mouseTop">
        <img class="mouse" @click="hitMouse()" id="mouse1" src="../assets/mouseNone.png" />
        <img class="mouse" @click="hitMouse()" id="mouse2" src="../assets/mouseNone.png" />
        <img class="mouse" @click="hitMouse()" id="mouse3" src="../assets/mouseNone.png" />
        <img class="mouse" @click="hitMouse()" id="mouse4" src="../assets/mouseNone.png" />
      </div>
      <div class="mouseBottom">
        <img class="mouse" @click="hitMouse()" id="mouse5" src="../assets/mouseNone.png" />
        <img class="mouse" @click="hitMouse()" id="mouse6" src="../assets/mouseNone.png" />
        <img class="mouse" @click="hitMouse()" id="mouse7" src="../assets/mouseNone.png" />
        <img class="mouse" @click="hitMouse()" id="mouse8" src="../assets/mouseNone.png" />
      </div>
    </div>
    <p>hitMouseCount:{{hitMouseCount}}</p>
  </div>
</template>

<script>
import Vue from "Vue";
// import changeMouseA from "../assets/mouseOver.png";
import mouseOnce from "../assets/mouseOnce.gif";
import mouseNone from "../assets/mouseNone.png";
export default {
  name: "HitMouse",
  //status == 0: 老鼠未出现
  //status == 1: 老鼠上升到最高到下降
  //status == 2: 老鼠被锤到并下降
  data() {
    return {
      //status代表老鼠当前的状态:
      // 0:未播放gif
      // 1：正在播放gif
      // 2：用户点击到了老鼠后，切换为被砸了并降落的gif
      status: [0, 0, 0, 0, 0, 0, 0, 0],
      hitMouseCount: 0,
      mouseOnce,
      interval: []
    };
  },
  mounted() {
    this.mouseAppear();
    // setInterval(() => {
    //   this.initGame();
    // }, 2000);
  },
  methods: {
    mouseDown: function() {
      document.getElementById("changeMouse").className = "mouseDown";
      //       "url(" + changeMouseA + "),auto";
    },
    mouseUp: function() {
      document.getElementById("changeMouse").className = "changeMouse";
    },
    hitMouse: function() {
      // if (1 == this.status) {
      this.hitMouseCount++;
      //   this.status[this.location] = 2;
      // }
    },
    mouseAppear: function() {
      // 1.设置定时器，等待2s
      // 2.八个点随机一个
      // 3.播放gif
      // 4.等2s后，在剩余的七个点中随机一个
      // var locations = [1, 2, 3, 4, 5, 6, 7, 8];
      //Math.random():获取0~1随机数;Math.floor取整;
      //var location = locations[Math.floor(Math.random() * locations.length)];
      var locations = [];
      for (var i = 0; i < this.status.length; i++) {
        if (0 == this.status[i]) {
          locations.push(i + 1);
        }
      }
      console.log("status:" + this.status);
      console.log("locations:" + locations);
      var location = locations[Math.floor(Math.random() * locations.length)];
      var self = this;
      var randomTime = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
      setTimeout(function() {
        document.getElementById("mouse" + location).src = mouseOnce;
        self.status[location - 1] = 1;
        setTimeout(function() {
          document.getElementById("mouse" + location).src = mouseNone;
          self.status[location - 1] = 0;
          console.log("第" + location + "只老鼠回去了");
        }, 3000);
        self.mouseAppear();
      }, randomTime);
      console.log("第" + location + "只老鼠");
      console.log("随机的时间" + randomTime);
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
.mouseTop {
  height: 78px;
  width: 100%;
  padding-top: 179px;
}
.mouseBottom {
  height: 78px;
  width: 100%;
  padding-top: 4px;
}
.mouse {
  width: 78px;
  height: 78px;
  /* position: relative; */
  float: left;
  margin-left: 65px;
  margin-right: 60px;
}
</style>
