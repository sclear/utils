//验证电话号码
function isPhone(value) {
    return /^0?1[3|4|5|8][0-9]\d{8}$/.test(value);
}

//验证邮箱
function isEmail(value) {
    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value);
}