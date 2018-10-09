const tool = {
    //验证电话号码
    isPhone(value) {
        return /^0?1[3|4|5|8][0-9]\d{8}$/.test(value);
    },

    //验证邮箱
    isEmail(value) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value);
    },

    //验证身份证号
    isIdcard(value) {
        return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value);
    },
    
    //验证姓名(中文)
    isName(value) {
        return /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(value);
    },

    //JSON  string <==> parse
    toJstring(value) {
        return JSON.stringify(value)
    },

    toJparse(value) {
        return JSON.parse(value)
    },

    //获取当前日期  YYYY - MM - DD
    getDay() {
        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },

    //获取当前时间  H : M       需要秒 传入(任意形参))
    getTime(sec) {
        let date = new Date();
        let seperator1 = ":";
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (sec) return (hour + seperator1 + minutes + seperator1 + seconds)
        else return (hour + seperator1 + minutes)
    },

    //获取当前时间戳
    stamap() {
        return new Date().valueOf()
    },
    stamapT() {
        return new Date().getTime()
    },

    // 时间戳   ==>   时间 
    // YYYY-MM-DD  res  => 'y-m-d'
    // h:m         res  => 'h:m' 
    // h:m:s       res  => 'h:m:s' 
    toTime(timestamp, res) {
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = date.getDate();
        let h = date.getHours() + ':';
        let m = date.getMinutes();
        let s = date.getSeconds();

        if (res === 'y-m-d') return (Y + M + D)
        else if (res === 'h:m') return (h + m)
        else if (res === 'h:m:s') return (h + m + ':' + s)
        else return Y + M + D + ' ' + h + m + ':' + s
    },

    //指定时间  =>  时间戳
    toStamap(value) {
        return Date.parse(value);
    }
}