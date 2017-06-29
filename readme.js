开始进入移动端项目开发(webapp)：

自定义饿了么项目实战 （黄金项目(运用很多非常有深度的技术)）

外卖平台（整合饿了么 美团外卖  百度外卖）

明确需求
1.地址搜索页

2.商家列表展示页

3.食物详情页（可以进行购物车的运算）

4. 商家搜索页（大家自己做）


往往在进行移动端开发的过程中，我们一般是要进行
单页面开发（SPA (single page Application)开发方式）

index.html
1. 页面与页面之间怎么进行数据的共享？
2. 跳转页面的方式？
3. 主页结构怎么搭建
4. 怎么保存页面的状态

开始进入面向对象编程的阶段

首先进行4个模块的声明：
1. addressModule  地址搜索页模块
2. searchModule 商家搜索页模块
3. rlistModule 商家列表页模块
4. detailModule 食物详情页模块

var obj = {
	name: 't',
	age: 18
}

var obj1 = obj;

obj1.name = '9';

console.log(obj.name); //9

//因为我们对象是引用数据类型

var t = [];

t.push(obj); //[{name: t}];

var arr = [];
arr.push(2);
console.log(t); //[{name: t}]

arr.push(obj); //arr--> [2, {name:t}]

arr[1].name = 89;
console.log(t); //[{name: 89}]

var obj = {
	name: 't',
	age: 18
}


function make(t){
   /*t = {
   	  name: '789'
   }*/
   t.name = '678';
   console.log(t.name);
}

make(obj);
console.log(obj.name);
//重点

js 的2种数据类型

1. 基本数据类型: Number , String , Boolean, Undefined, null
2. 引用数据类型： Array, Object, Function

var a = 1;
var b = a;
b = 4;
console.log(a); //1 基本数据类型互相独立

对象的继承？
是为了让对象在进行赋值的时候，能保持其互相独立的特性

//原型继承

var obj = {
	name: 't',
	age: 18
}
var w = obj; //error 对象之间直接赋值，一定是不对，要尽量避免
var w = Object.create(obj);
w.name = '345';
console.log(obj.name); //t

function Create(obj){
	function T(){
			 	
	}
	T.prototype = obj;
	/*T.prototype = {
		name: 't',
		age: 18
	}*/
	var t = new T(); //创建一个属于构造函数T的实例对象小t
	//此时小t实例就拥有其原型上的属性和方法

	//原型查找
	/*console.log(t.name); //test
	t.name = 678;
	console.log(t.name); //678
	delete t.name
	console.log(t.name); //test*/
	return t;
}

var w = Create(obj);
console.log(w.name); // 't'
w.name = 'yui';
console.log(w.name); //yui;
console.log(obj.name); // 't';

//怎么创建一个干净的对象
var obj = Object.create(null);