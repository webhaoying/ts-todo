

// 字符串
var str:string = 'false'
str = 'true'

// bool
var bool:boolean = false
bool = true

// number
var num:number = 123
num = 4

// 数组类型 -1

var strArr: string[] = ['','123']
strArr = ['']

// 数组类型 -2
var strArr: Array<string> = ['','123']
strArr = ['']

// 元组类型
let arr:[number, string] = [123, 'string']

// 枚举类型 - 意义明显  如果没有赋值 那么值就是下标
 enum flagStatus {
  success = 1,
  error = 2
 }
 let successStatus:flagStatus = flagStatus.success
 console.log('successStatus is', successStatus)

