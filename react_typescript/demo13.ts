class XiaoJieJie2{
    public sex:string;
    public readonly height:number = 180;
    protected name:string;
    private age:number;
    public constructor(sex:string, name:string, age:number){
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    public sayHello(){
        console.log("小哥哥好")
    }
    protected sayLove(){
        console.log("我爱你")
    }
}

var jiejie2:XiaoJieJie2 = new XiaoJieJie2("女", "热巴", 22)

console.log(jiejie2.sex);
console.log(jiejie2.name);
console.log(jiejie2.age);
jiejie2.sayHello();
jiejie2.sayLove();
jiejie2.height = 150;//只读属性值报错