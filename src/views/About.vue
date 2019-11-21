<template>
  <div class="main main-child pdb-safe-area-0">
    <base-header title="关于" :left-arrow="true"></base-header>

    <div>
      <button @click="tesCamera()" type="button">按钮ces</button>
    </div>

    <div class="scan">
      <header>
        <p v-if="isshow" @click="closeScan" class="closeScan">返回</p>
        <span @click="startRecognize">请扫码二维码</span>
        <p @click="scanImg">相册</p>
      </header>
      <div id="bcid" :class="{'show':isshow }">1</div>

      <p class="tip">
        <img :src="codeUrl" width="150px" />
        codeUrl:{{codeUrl}}
        <br />
        codeUrl3:{{codeUrl3}}
        <br />
      </p>
    </div>

    <a class="confirm-btn" href="weixin://scanqrcode">微信扫码</a>
  </div>
</template>

<script>
//import "@/unit/validate";
import { NavBar, Field, cellGroup, Button } from "vant";
let scan = null;
export default {
  name: "about",
  data() {
    return {
      codeUrl: "",
      codeUrl3: "",
      isshow: true
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button,
    [cellGroup.name]: cellGroup
  },
  created() {
    plus.nativeUI.toast("25553");
  },
  activated() {
    //plus.nativeUI.toast("23");
  },
  methods: {
    onSubmit() {
      this.startRecognize();
      // 验证
      // this.$validator.validateAll().then(result => {
      //   if (result) {
      //     //axios提交
      //   } else {
      //     plus.nativeUI.toast(this.errors.items[0].msg);
      //   }
      // });
    },

    // 创建扫描控件
    startRecognize() {
      let that = this;
      this.isshow = true;

      if (!window.plus) return;
      scan = new plus.barcode.Barcode(
        "bcid",
        [plus.barcode.QR, plus.barcode.EAN8, plus.barcode.EAN13],
        {
          frameColor: "#0f9DE2",
          scanbarColor: "#ff9DE2"
        }
      );
      scan.onmarked = onmarked;

      // 开始扫描
      scan.start();
      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";
            break;
          case plus.barcode.EAN13:
            type = "EAN13";
            break;
          case plus.barcode.EAN8:
            type = "EAN8";
            break;
          default:
            type = "其它" + type;
            break;
        }
        result = result.replace(/\n/g, "");
        that.codeUrl = result;

        //window.localStorage.codeUrl = result;
        alert(result);
        that.closeScan();
      }
    },
    // 关闭返回
    closeScan() {
      this.isshow = false;
      if (!window.plus) return;
      scan.close();
    },
    scanImg() {
      let that = this;
      // 从系统相册选择文件
      if (!window.plus) return;
      plus.gallery.pick(
        function(path) {
          //alert(path);
          that.codeUrl = path;
          plus.barcode.scan(
            path,
            function(type, result) {
              // alert("Scan success:(" + type + ")" + result);
              window.localStorage.codeUrl2 = result;
              plus.nativeUI.alert(type + "---" + result);
            },
            function(e) {
              //console.log(e);
              //window.localStorage.codeUrl2 = e;
              that.codeUrl3 = e;
              plus.nativeUI.alert("如果图片无法识别,请用扫码上传" + e);
            }
          );
        },
        function(e) {
          alert("取消选择图片");
        },
        { filter: "image" }
      );
    },

    //调用相册&相机

    tesCamera() {
      let that = this;
      //调用原生系统弹出按钮选择框
      let page = null;
      page = {
        imgUp: function() {
          plus.nativeUI.actionSheet(
            {
              cancel: "取消3",
              buttons: [{ title: "拍照1" }, { title: "从相册中选择2" }]
            },
            function(e) {
              //1 是拍照  2 从相册中选择
              switch (e.index) {
                case 1:
                  getImage();
                  break;
                case 2:
                  appendByGallery();
                  break;
                default:
                  break;
              }
            }
          );
        }
      };
      // 拍照函数
      function getImage() {
        let cmr = plus.camera.getCamera();
        cmr.captureImage(
          function(p) {
            plus.io.resolveLocalFileSystemURL(
              p,
              function(entry) {
                plus.nativeUI.toast(
                  "路径" + entry.fullPath + "--" + entry.toLocalURL()
                );
                var path = entry.toLocalURL();
                //文件传转base64方法
                that.imgPreviewnew(path);
              },
              function(e) {
                plus.nativeUI.toast("读取拍照文件错误2：" + e.message);
              }
            );
          },
          function(e) {},
          {
            filename: "_doc/camera/"
          }
        );
      }

      //选择相片文件
      function appendByGallery() {
        plus.gallery.pick(function(path) {
          //文件传转base64方法
          that.imgPreviewnew(path);
        });
      }
      // 弹出系统选择按钮框
      page.imgUp();
    },

    imgPreviewnew(file) {
      let that = this;
      let Orientation;
      let img = new Image();
      img.src = file;
      img.onload = function() {
        //压缩图片函数-输出base64
        plus.nativeUI.toast("读取" + img, Orientation);
        let data = that.compress(img, Orientation);
        plus.nativeUI.toast("返回:" + data);
      };
    },
    compress(img, Orientation) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      //瓦片canvas
      let tCanvas = document.createElement("canvas");
      let tctx = tCanvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio;
      if ((ratio = (width * height) / 400000000) > 1) {
        plus.nativeUI.toast("大于40000万像素");
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      //        铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //如果图片像素大于100万则使用瓦片绘制
      let count;
      if ((count = (width * height) / 100000000) > 1) {
        plus.nativeUI.toast("超过10000W像素");
        count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
        //            计算每块瓦片的宽和高
        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            );
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      //修复ios上传图片的时候 被旋转的问题
      if (Orientation != "" && Orientation != 1) {
        switch (Orientation) {
          case 6: //需要顺时针（向左）90度旋转
            this.rotateImg(img, "left", canvas);
            break;
          case 8: //需要逆时针（向右）90度旋转
            this.rotateImg(img, "right", canvas);
            break;
          case 3: //需要180度旋转
            this.rotateImg(img, "right", canvas); //转两次
            this.rotateImg(img, "right", canvas);
            break;
        }
      }
      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.1);
      plus.nativeUI.toast("压缩前：" + initSize);
      plus.nativeUI.toast("压缩后：" + ndata.length);
      plus.nativeUI.toast(
        "压缩率：" + ~~((100 * (initSize - ndata.length)) / initSize) + "%"
      );
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
      return ndata;
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  background: #999;
}
.aaa {
  height: 150px;
}
#bcid {
  display: none;
  // position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background: #999;
}
#bcid.show {
  display: block;
}
.closeScan {
  width: 50px;
  height: 50px;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 10000;
}
</style>