

var HashModuleMap = {
	'address': addressModule,
	'detail': detailModule,
	'rlist': rlistModule
}
var ModuleCache={
	//判断模块是否被初始化
}
var prevModule = null; //前一个模块
var currentModule = null; //当前模块

function routeControl(){
	//路由控制
	var khash="";
	var hash = location.hash.slice(1) || 'address'; //address  rlist 
	khash=hash;
	if(hash.indexOf('rlist')!==-1){
		khash='rlist';
		rlistModule.loadList(hash,true);
	}
	console.log(hash)
	//hash = rlist listModule prev--> addressModule
	var module = HashModuleMap[khash]; //动态获取对象的属性
	prevModule = currentModule;
	currentModule = module;
	if(prevModule) {
		//如果前一个模块存在， 要将其隐藏掉
		prevModule.leave();
	}
	module.enter();
	if(!ModuleCache[khash]){
		module.init();//此时该模块并没有被初始化
		//正常来说每个模块只能被初始化一次
		ModuleCache[khash]=true;
	}
	module.init();
}
routeControl();
//可扩展性、可维护性、可读性都得到明显的提高
window.onhashchange = function(){
	routeControl(); 	
}