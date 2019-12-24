"use strict";
// 字符串
var str = 'false';
str = '123';
// bool
var bool = false;
bool = true;
// number
var num = 123;
num = 4;
// 数组类型 -1
var strArr = ['', '123'];
strArr = [''];
// 数组类型 -2
var strArr = ['', '123'];
strArr = [''];
// 元组类型
var arre = [123, 'string'];
// 枚举类型 - 意义明显  如果没有赋值 那么值就是下标
var flagStatus;
(function (flagStatus) {
    flagStatus[flagStatus["success"] = 1] = "success";
    flagStatus[flagStatus["error"] = 2] = "error";
})(flagStatus || (flagStatus = {}));
var success = flagStatus.success;
console.log('successStatus is', success);
