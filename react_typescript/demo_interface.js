var myhusband = { sex: '男', interest: '看书、作家务' };
console.log(myhusband);
var myhusband1 = { sex: '男', interest: '看书、作家务', maiBaoBao: true };
console.log(myhusband);
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高', 'shuau'));
