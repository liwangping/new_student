// function searchXiaoJieJie(age:number):string{
//     return "找到了"+ age + "岁的小姐姐"
// } 
// var age:number = 18
// var result:string = searchXiaoJieJie(age)
// console.log(result)
//有可选参数的函数  ?:可选的形参
// function searchXiaoJieJie(age:number, stature?:string):string{
//     let yy:string = ''
//     yy = '找到了' + age + '岁'
//     if (stature != undefined){
//         yy = yy + stature
//     }
//     return yy + '的小姐姐'
// }
// var result:string = searchXiaoJieJie(22,'大长腿')
// console.log(result)
//有默认参数的函数
function searchXiaoJieJie(age, stature) {
    if (stature === void 0) { stature = "水蛇腰"; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result = searchXiaoJieJie(22);
console.log(result);
