class Jspang{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

class JsShuai extends Jspang{
    public xingxiang:string = '帅气';
    public interest(){
        super.interest()//super可以继承父类的方法，然后进行增加
        console.log('建立电商平台')
    }
    public zhuangQian(){
        console.log("一天赚了一个亿")
    }
}

let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()