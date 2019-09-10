interface Husband {
    sex:string
    interest:string
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband)

interface Husband1 {
    sex:string
    interest:string
    maiBaoBao?:Boolean
}
let myhusband1:Husband1={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
console.log(myhusband)

interface SearchMan{
    (source:string, subString:string):boolean//规定了要什么，和要返回什么
}

let mySearch:SearchMan

mySearch = function(source:string, subString:string):boolean{
    let flag = source.search(subString)
    return (flag!= -1)
}

console.log(mySearch('高', 'shuau'))