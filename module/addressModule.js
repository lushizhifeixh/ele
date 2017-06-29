function debounce(func,wait){
	var timeId=null;
	var later=function(){
		func();
	}
	return function(){
		clearTimeout(timeId);
		timeId=setTimeout(function(){
			later();
		},400||wait)
	}
}
var addressModule = {
	name: '地址搜索页模块',
	dom: $("#address"),
	init: function(){
		//该模块初始化方法	 
		this.bindEvent();	
	},
	loadList:function(){
		var inputValue=$("#keyword").val();
		$.ajax({
				url:"https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby",
				type:"get",
				data:{
					offset:0,
					limit:20,
					keyword:inputValue
				},
				success:function(res){
					var str="";
					res.forEach(function(ele,index){//res[i].latitude+'-'+res[i].longitude
						str+='<li><a href="#rlist-'+ele.latitude+'-'+ele.longitude+'">'+ele.name+'</a></li>'
					})
					$("#list").html(str);
				},
				error:function(){
					console.log("error.....");
				}
			})
	},
	bindEvent: function(event){
		//事件绑定	
		var me=this;
		$("#keyword").on('input',debounce(function(){
			me.loadList();
		}))
		console.log(event)
	},
	enter: function(){
		this.dom.show();	
	},
	leave: function(){
		this.dom.hide();
	}
}