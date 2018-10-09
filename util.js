const tool = {
    //验证电话号码
    isPhone(value) {
        return /^0?1[3|4|5|8][0-9]\d{8}$/.test(value);
    },

    //验证邮箱
    isEmail(value) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value);
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
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },

    //获取当前时间  H : M       需要秒 传入(任意形参))
    getTime(sec) {
        var date = new Date();
        var seperator1 = ":";
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if(sec) return (hour + seperator1 + minutes + seperator1 + seconds)

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
    toTime(timestamp,res) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate();
        var h = date.getHours() + ':';
        var m = date.getMinutes();
        var s = date.getSeconds();
        
        if(res === 'y-m-d') return (Y + M + D)
        else if (res === 'h:m') return (h + m)
        else if(res === 'h:m:s') return (h + m + ':' +s)
        else return Y + M + D + ' ' + h + m + ':' + s
    },

    //时间  =>  时间戳
    toStamap(value) {
        return value.valueOf()
    },
    toStamapT() {
        value.parse()
    }
}
tool.getTime()