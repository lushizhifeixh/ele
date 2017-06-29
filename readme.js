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



Ajax特点：
1.无刷新加载数据
2.异步加载
3.不能跨域，遵循同源策略
（异步的代码片段都需要等到非异步代码片段执行完之后才会执行）

console.log(1);
setTimeout(function(){
	console.log(2);	 	
}, 0)
for(var i =0; i < 1000; i++) {
	console.log(1000);
}
console.log(3);


在js中，如果遇到了跨域问题，有3种解决方式
1. jsonp
2. CORS(通过后端进行配置)
3. nginx 反向代理进行跨域（黄金知识点 ）

nginx 可以说是最不好处理跨域的方式，但是 它是最好的辅助开发的工具

非常利于开发（非常利于前端后端联调, 真机端测试）


当用户高频操作发生时，如何进行性能优化？

防抖动

window.addEventLisitener('resize', debounce(function(){
	console.log(1); 	
}))

//防抖动
function debounce(func, wait){
	var timeId = null;
	//回调函数 ==》 当一个方法被当做另一个方法的形参传递的时候
	var later = function(){
		func();	 	
	}

	return function(){
		clearTimeout(timeId);
		timeId = setTimeout(function(){
			later();	 	
		}, wait || 2000)
	}
}

页面与页面之间在单页面开发中是怎么进行数据传递的


伪类与伪元素的区别

伪类： :hover :target :active 
描述dom节点特殊状态的，对特殊的状态进行相应布局

伪元素： :after :before  (content)


移动端中的轮播图怎么做？

关键点： 监听手势的滑动

touch

轮播图 最好用的插件 swipe.js

3步
1. 3层dom结构
<div class="swipe" id="mySwipe">
	<div class="swipe-wrap">
	    <div class="item" style="height:200px;background: blue">
	        第一个板块
	    </div>
	    <div class="item" style="height:200px;background: red">
	        第二个板块
	    </div>
	    <div class="item"  style="background: black;height: 200px">
	        <!-- 滑动的第三个版块 -->
	        
	    </div>
	</div>
</div>
2. 必须的css样式

.swipe{
    overflow: hidden;
    visibility: hidden;
    position:relative;
}
.swipe-wrap{
    overflow-x:hidden;
    position:relative;
}
.swipe-wrap > div {
    float: left;width: 100%;
    position:relative;
}

3. js初始化方法

暴露一个全局变量 Swipe

Swipe(document.getElementById('mySwipe'), {
  auto: false,
  callback: function(pos) {
  	//当滑动结束后 所需要执行的方法
  	console.log(pos); //pos当前滑动板块的索引值
  }
});

注意 轮播初始化的调用时机，
要在视图展示在页面中情况下，进行初始化的调用


作用域查找

在函数声明的地方 一层一层的往外查找

注意：
安卓手机下 都不支持overflow:scroll这个属性

所以为了兼容以及方便的前提，我们使用一个插件 Iscroll.js

使用Iscroll.js 要满足几个条件

1.3层dom结构

<div class="wrapper">
	<ul>
		<li></li>
	</ul>
</div>

2. 要给最外层dom结构设置对应的样式(写死)

.wrapper {
	overflow:hidden;
	position: relative;
}

3. 初始化(调用时机： 视图必须要展示在页面中)
var left= new IScroll('.left-pane', {
	scrollbars: true //要进行滚动条的展示
})