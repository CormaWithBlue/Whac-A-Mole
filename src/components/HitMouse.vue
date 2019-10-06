<template>
  <div class="HitMouse" id="HitMouse">
    <div id="changeMouse" class="changeMouse" @mousedown="mouseDown()" @mouseup="mouseUp()">
      <el-button type="success" round v-on:click="gameBegin()">Start</el-button>

      <el-button>hitMouseCount:{{hitMouseCount}}</el-button>
      <el-button>missMouseCount:{{missMouseCount}}</el-button>
      <div class="mouseTop">
        <img
          class="mouse"
          @click="hitMouse($event,0)"
          :src="status[0] ? (status[0]==1?mousegif[0]:mouseHit[0]) : mouseimg[0]"
        />
        <img
          class="mouse"
          @click="hitMouse($event,1)"
          :src="status[1] ?(status[1]==1?mousegif[1]:mouseHit[1]) : mouseimg[1]"
        />
        <img
          class="mouse"
          @click="hitMouse($event,2)"
          :src="status[2] ? (status[2]==1?mousegif[2]:mouseHit[2]) : mouseimg[2]"
        />
        <img
          class="mouse"
          @click="hitMouse($event,3)"
          :src="status[3] ? (status[3]==1?mousegif[3]:mouseHit[3]): mouseimg[3]"
        />
      </div>
      <div class="mouseBottom">
        <img
          class="mouse"
          @click="hitMouse($event,4)"
          :src="status[4] ? (status[4]==1?mousegif[4]:mouseHit[4]): mouseimg[4]"
        />
        <img
          class="mouse"
          @click="hitMouse($event,5)"
          :src="status[5] ? (status[5]==1?mousegif[5]:mouseHit[5]) : mouseimg[5]"
        />
        <img
          class="mouse"
          @click="hitMouse($event,6)"
          :src="status[6] ? (status[6]==1?mousegif[6]:mouseHit[6]) : mouseimg[6]"
        />
        <img
          class="mouse"
          @click="hitMouse($event,7)"
          :src="status[7] ? (status[7]==1?mousegif[7]:mouseHit[7]) : mouseimg[7]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "Vue";

// import changeMouseA from "../assets/mouseOver.png";

import mouseOnce0 from "../assets/mouseOnce0.gif";
import mouseOnce1 from "../assets/mouseOnce1.gif";
import mouseOnce2 from "../assets/mouseOnce2.gif";
import mouseOnce3 from "../assets/mouseOnce3.gif";
import mouseOnce4 from "../assets/mouseOnce4.gif";
import mouseOnce5 from "../assets/mouseOnce5.gif";
import mouseOnce6 from "../assets/mouseOnce6.gif";
import mouseOnce7 from "../assets/mouseOnce7.gif";

import mouseNone from "../assets/mouseNone.png";

import mouseHit0 from "../assets/mouseHit0.gif";
import mouseHit1 from "../assets/mouseHit1.gif";
import mouseHit2 from "../assets/mouseHit2.gif";
import mouseHit3 from "../assets/mouseHit3.gif";
import mouseHit4 from "../assets/mouseHit4.gif";
import mouseHit5 from "../assets/mouseHit5.gif";
import mouseHit6 from "../assets/mouseHit6.gif";
import mouseHit7 from "../assets/mouseHit7.gif";
export default {
  name: "HitMouse",
  //status == 0: 老鼠未出现
  //status == 1: 老鼠上升到最高到下降
  //status == 2: 老鼠被锤到并下降
  data() {
    return {
      //status代表老鼠当前的状态:
      // 0: 未播放gif
      // 1：正在播放gif
      // 2：用户点击到了老鼠后，切换为被砸了并降落的gif
      status: [0, 0, 0, 0, 0, 0, 0, 0],
      hitMouseCount: 0,
      missMouseCount: 0,
      mouseimg: [],
      mousegif: [],
      interval: [],
      setTimeOutMouse: [],
      mouseSum: 1,
      mouseTimeMax: 3000,
      mouseTimeMin: 1000,
      mouseHit: [],
      timeOut: null,
      startGame: true
    };
  },
  // created() {
  //   console.log("created");
  // },

  mounted() {
    this.mouseimg = [
      mouseNone,
      mouseNone,
      mouseNone,
      mouseNone,
      mouseNone,
      mouseNone,
      mouseNone,
      mouseNone
    ];
    this.mousegif = [
      mouseOnce0,
      mouseOnce1,
      mouseOnce2,
      mouseOnce3,
      mouseOnce4,
      mouseOnce5,
      mouseOnce6,
      mouseOnce7
    ];
    this.mouseHit = [
      mouseHit0,
      mouseHit1,
      mouseHit2,
      mouseHit3,
      mouseHit4,
      mouseHit5,
      mouseHit6,
      mouseHit7
    ];
    // this.mouseAppear();
  },
  methods: {
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
    mouseDown: function() {
      document.getElementById("changeMouse").className = "mouseDown";
      //       "url(" + changeMouseA + "),auto";
    },
    mouseUp: function() {
      document.getElementById("changeMouse").className = "changeMouse";
    },
    hitMouse: function(event, i) {
      if (1 == this.status[i]) {
        Vue.set(this.status, i, 2);
        console.log("status==2吗？" + this.status[i]);
        clearTimeout(this.setTimeOutMouse[i]);
        var self = this;
        setTimeout(function() {
          Vue.set(self.status, i, 0);
        }, 500);
        this.hitMouseCount++;
        if (this.hitMouseCount < 11) {
          this.mouseSum = 1;
          this.mouseTimeMax = 3000;
          this.mouseTimeMin = 1000;
        } else if (11 <= this.hitMouseCount && 21 > this.hitMouseCount) {
          this.mouseSum = 2;
          this.mouseTimeMax = 2000;
          this.mouseTimeMin = 1000;
        } else if (21 <= this.hitMouseCount && 31 > this.hitMouseCount) {
          this.mouseSum = 2;
          this.mouseTimeMax = 1500;
          this.mouseTimeMin = 800;
        } else if (31 <= this.hitMouseCount) {
          this.mouseSum = 3;
          this.mouseTimeMax = 1200;
          this.mouseTimeMin = 500;
        }
      }
      // var num = document.getElementsByName("status");
      // if(1==this.status[num]){
      //
      // }
    },
    gameBegin: function() {
      // alert("Game will begin!" + "\n" + "Let's start!");
      // clearTimeout(this.timeOut);
      this.missMouseCount = 0;
      this.hitMouseCount = 0;
      this.startGame = true;
      this.mouseAppear();
    },
    mouseAppear: function() {
      // 1.设置定时器，等待2s
      // 2.八个点随机一个
      // 3.播放gif
      // 4.等2s后，在剩余的七个点中随机一个
      // var locations = [1, 2, 3, 4, 5, 6, 7, 8];
      //Math.random():获取0~1随机数;Math.floor取整;

      //生成随机的老鼠
      var locations = [];
      for (var i = 0; i < this.status.length; i++) {
        if (0 == this.status[i]) {
          locations.push(i + 1);
        }
      }

      var locationA = [];
      var sum = Math.floor(Math.random() * this.mouseSum + 1);
      for (let i = 0; i < sum; i++) {
        if (0 == locations.length) {
          break;
        }
        var locationIndex = Math.floor(Math.random() * locations.length);
        var location = locations[locationIndex];
        locations.splice(locationIndex, 1);
        locationA.push(location);
      }

      //生成随机的时间
      var self = this;
      var randomTime = Math.floor(
        Math.random() * (this.mouseTimeMax - this.mouseTimeMin + 1) +
          this.mouseTimeMin
      );

      //让随机到的老鼠在随机的时间后冒头
      self.timeOut = setTimeout(function() {
        if (4 < self.missMouseCount) {
          self
            .$confirm(
              "You lost too many mice! Do you want to play again?",
              "warning",
              {
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                type: "warning"
              }
            )
            .then(() => {
              self.$message({
                type: "success",
                message: "You can click ‘Start’ button to restart game~Come On~"
              });
            })
            .catch(() => {
              self.$message({
                type: "info",
                message: "You quit the game~",
                methods: window.history.go(-1)
              });
            });
          // self.$message("You lost too many mice! Let's play again");
          // self.gameBegin();
          self.missMouseCount = 0;
          self.hitMouseCount = 0;
          self.startGame = false;
          return;
        }
        for (let i = 0; i < locationA.length; i++) {
          Vue.set(self.status, locationA[i] - 1, 1);
          self.setTimeOutMouse[locationA[i] - 1] = setTimeout(function() {
            //vue.set:让vue修改对象的属性值
            Vue.set(self.status, locationA[i] - 1, 0);
            if (self.startGame) {
              self.missMouseCount++;
            }
          }, 3000);
        }
        self.mouseAppear();
      }, randomTime);
    }
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
  padding-top: 139px;
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
