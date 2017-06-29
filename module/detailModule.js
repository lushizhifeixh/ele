/*var detailModule = {
	name: '食物详情页模块',
	dom: $("#detail"),
	init: function(){
		//该模块初始化方法	 
		this.bindEvent();	
	},
	bindEvent: function(){
		//事件绑定	 	
	},
	enter: function(){
		this.dom.show();	 	
	},
	leave: function(){
		this.dom.hide();
	}
}
*/

var detailModule = Object.create(addressModule);

//重载
/*detailModule.name = '食物详情页模块';
detailModule.dom = $("#detail");
*/

detailModule = $.extend(detailModule, {
	name: '食物详情页模块',
	dom: $("#detail")
})