var unit = {

    /* 设置 localstorage
    * @param key 键
    * @param value 值
    */
    setStorage(key,value){ 
        localStorage.setItem(key,JSON.stringify(value))
    },

    /* 读取 localstorage
    * @param key 键
    */
    getStorage(key){
        return JSON.parse(localStorage.getItem(key))
    },

    /* 删除 localstorage
    */
    removeStorage(){
        localStorage.removeItem(key)
    },

    /* 设置 Cookie
    * @param name 名称
    * @param value 值
    * @param days 天数
    */
    setCookie(name, value, days){
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + days);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },

    /* 读取 Cookie
    * @param name 名称
    */
    getCookie(name) {
        const value = '; ' + document.cookie        
        const parts = value.split('; ' + name + '=')
        if (parts.length === 2) return parts.pop().split(';').shift()
    },

    /* 删除 Cookie
    * @param name 名称
    */
    removeCookie(name) {
        setCookie(name, '', -1);
    },

    /* 校验中英文姓名
    * @param str:string
    */
    isName(str) {
        return /[a-zA-Z\u4E00-\u9FA5]+$/.test(str)
    },

    /* 校验手机号码
    * @param num:string
    */
    isPhone(num) {
        return /^1[2,3,4,5,7,8]\d{9}$/.test(num)
    },

    /* 校验邮箱
    * @param str:string
    */
    isEmail(str) {
        return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
    },

    /* 校验纯数字
    * @param num:string
    */
    checkIsNumber(num) {
        return /^[0-9]*$/.test(num);
    },

    /* 校验身份证号（15位或18位数字）
    * @param str:string
    */
    isUserId(str) {
        return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(str);
    },

    /* 去空格
    * @param str:string
    */
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '')
    },

    /* 千分位 ","逗号隔开
    * @param num 价格
    */
    toThousands(num) {
        return parseFloat(num).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,")
    },

    /*
    * 返回银行卡号，每隔四个数字添加一个空格
    * @param str:string
    */
    formatBankCard(str) {
        let newStr = str.replace(/\d(?=(?:\d{4})+\b)/g, `$& `)
        return String(newStr)
    },

    /* 四舍五入
     * @param num:number
     * @param digit:number 保留小数位
    */
    round(num, digit = 2) {
        if (typeof (num) == 'undefined') { // NaN，undefined，空值
            return '0.00'
        }
        else {
            return parseFloat(num).toFixed(digit)
        }
    },

    /* 大于1000转‘K’表示
     * @param value:number
     * @param digit:number 保留小数位
    */
    toK(value, digit = 1) {
        const num = Number(value);
        if (num >= 1000) {
            return parseFloat(this.round((num / 1000),digit))+"K";
        }
        return num;
    },

    /* 前置补0
     * @param num:number
     * @param length:number 总长度
    */
    preZero(num, length) {  
        return (Array(length).join('0') + num).slice(-length);  
    },

    /* 密码等级校验
    * @param pwd:string
    // */
    pwdLevel(pwd) {
        const pwdLeve = [{
            reg: /\d+/
        },
        {
            reg: /[a-z]+/
        },
        {
            reg: /[A-Z]+/
        },
        {
            reg: /[~!@#\$%^&*\(\)\{\};,.\?\/'"]/
        }
        ];
        if (pwd.indexOf(' ') != -1) {
            return false;
        }
        let level = 0;
        for (var j = pwdLeve.length - 1; j >= 0; j--) {
            if (pwdLeve[j].reg.test(pwd)) {
                level += 1;
            }
        }
        return level;
    },

    /* 时间戳格式化
    * @param time 需要转化的时间戳
    * @param split 以特定符号分割
    */
    formatTime(time, split) {
        let date = new Date(time - 0);
        let s = split;
        if (!s) {
            s = '-'
        }
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        let newTime =
            year +
            s +
            (month < 10 ? "0" + month : month) +
            s +
            (day < 10 ? "0" + day : day) +
            " " +
            (hour < 10 ? "0" + hour : hour) +
            ":" +
            (min < 10 ? "0" + min : min) +
            ":" +
            (sec < 10 ? "0" + sec : sec);

        return newTime;
    },

    /**
     * 时间格式化函数, 按照指定格式化字符串格式化传入时间
     * @param time:Date 需要格式化的时间
     * @param fmStr:string 定义时间的格式
     * 		yyyy: 代表四位数年份
     * 		  yy: 代表两位数年份 
     * 		  mm: 代表月份(小于10时补0)
     * 		  dd: 代表日期(小于10时补0)
     * 		  hh: 代表小时(小于10时补0)
     * 		  MM: 代表分钟(小于10时补0)
     * 		  ss: 代表秒数(小于10时补0)
     * 		 SSS: 代表毫秒数
     * 		   w: 代表周几(数字) 
     * 		   W: 代表周几(中文) 
     * 		  ww: 代表周几(英文) 
     */
    timeFormat(time, fmStr) {
        let date = new Date(time - 0);
        const weekCN = '一二三四五六日';
        const weekEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliSeconds = date.getMilliseconds();
        let week = date.getDay();

        month = month >= 10 ? month : ('0' + month);
        day = day >= 10 ? day : ('0' + day);
        hours = hours >= 10 ? hours : ('0' + hours);
        minutes = minutes >= 10 ? minutes : ('0' + minutes);
        seconds = seconds >= 10 ? seconds : ('0' + seconds);

        if (fmStr.indexOf('yyyy') !== -1) {
            fmStr = fmStr.replace('yyyy', year);
        } else {
            fmStr = fmStr.replace('yy', (year + '').slice(2));
        }
        fmStr = fmStr.replace('mm', month);
        fmStr = fmStr.replace('dd', day);
        fmStr = fmStr.replace('hh', hours);
        fmStr = fmStr.replace('MM', minutes);
        fmStr = fmStr.replace('ss', seconds);
        fmStr = fmStr.replace('SSS', milliSeconds);
        fmStr = fmStr.replace('W', weekCN[week - 1]);
        fmStr = fmStr.replace('ww', weekEN[week - 1]);
        fmStr = fmStr.replace('w', week);

        return fmStr;
    },

    /* 倒计时（默认开始时间为当前时间）
    * @param startTime 开始时间
    * @param endTime 结束时间
    * @returns 时间对象
    */
    getEndTime(startTime, endTime) {
        const startDate = startTime || new Date(); //开始时间，当前时间
        const endDate = new Date(endTime); //结束时间，需传入时间参数
        const t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
        let d = 0,
            h = 0,
            m = 0,
            s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 3600 / 24) > 10 ? Math.floor(t / 1000 / 3600 / 24) : '0' + Math.floor(t / 1000 / 3600 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24) > 10 ? Math.floor(t / 1000 / 60 / 60 % 24) > 10 : '0' + Math.floor(t / 1000 / 60 / 60 % 24) > 10;
            m = Math.floor(t / 1000 / 60 % 60) > 10 ? Math.floor(t / 1000 / 60 % 60) : '0' + Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60) > 10 ? Math.floor(t / 1000 % 60) : '0' + Math.floor(t / 1000 % 60);
        }
        return {
            day: d,
            hour: h,
            minute: m,
            second: s
        }
    },

    /**
     * @description 回到顶部
     */
    toTop() {    
        let timer = setInterval(() => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-scrollTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
            if(scrollTop === 0) {
                clearInterval(timer);
            }
        }, 10);
    },

    /* 数组对象排序
     * @param array 数组
     * @param prop:String 排序字段
     * @param order:Number 升序或降序, asc:升序|desc:降序
     */
    sortData(array, prop, order) {
        array.sort(function(item1, item2){
            let value1 = item1[prop];
            let value2 = item2[prop];
            if(value1 < value2) {
                return order == 'desc' ? 1 : -1; 
            }else if (value1 > value2) {
                return order == 'desc' ? -1 : 1;
            }else {
                return 0;
            }
        });
    },

    /* 对象按照字母顺序排序
     * @param obj:Object
     */
    objKeySort(obj) {
        // 排序的函数
        const newkey = Object.keys(obj).sort();
        const newObj = {};
        for (let i = 0; i < newkey.length; i += 1) {
            newObj[newkey[i]] = obj[newkey[i]];
        }
        return newObj;
    },

    debounce(func, wait) {
        let timeout = null
        return function() {
            let context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    },

    /* 判断pc 移动 iso android 设备平台
     * @param
     */
    device() {
        let browser = {
          versions: function () {
            let u = navigator.userAgent
            //let app = navigator.appVersion
            return {         //移动终端浏览器版本信息
              trident: u.indexOf('Trident') > -1, //IE内核
              presto: u.indexOf('Presto') > -1, //opera内核
              webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
              mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
              ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
              iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
              iPad: u.indexOf('iPad') > -1, //是否iPad
              webApp: u.indexOf('Safari') == -1//是否web应该程序，没有头部与底部
            }
          }(),
          language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }
        if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
          let ua = navigator.userAgent.toLowerCase();//获取判断用的对象
          if (ua.match(/MicroMessenger/i) === "micromessenger") {
            //判断是否在微信打开
            if (browser.versions.android) {
              //安卓端微信
              this.setStorage('device','wehatAndroid')
              return 'wehatAndroid'
            } else if (browser.versions.ios) {
              //ios端微信
              this.setStorage('device','wechatIOS')
              return 'wechatIOS'
            } else{
              this.setStorage('device','wechat')
              return 'wechat'
            }
            // 判断是ios还是安卓
          } else if (browser.versions.android) {
            //安卓
            this.setStorage('device','Android')
            return 'Android'
          } else if (browser.versions.ios) {
            //ios
            this.setStorage('device','ios')
            return 'ios'
          } else {
            this.setStorage('device','wp')
            return 'wp'
          }
        } else {
          //PC
          this.setStorage('device','PC')
          return 'PC'
        }
    },
    




}

export default unit