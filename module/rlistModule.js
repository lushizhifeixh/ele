

var rlistModule = Object.create(addressModule);
rlistModule = $.extend(rlistModule, {
	name: '商家列表页模块',
	dom: $("#rlist"),
	bindEvent:function(){
		var me=this;
		window.addEventListener('scroll',debounce(function(){
			if(window.scrollY+window.innerHeight==me.dom.height()){
				me.loadList(me.hash);
			}
		}));
		var li_list=$("#position li");
		Swipe(document.getElementById('mySwipe'), {
          auto: 0,
          autoplay:true,
          continuous: true,
          disableScroll:false,
          callback: function(pos) {
            li_list.eq(pos).addClass('cur');
            li_list.eq(pos).siblings().removeClass('cur');
          }
      });
		var start=null
			end=null;
		this.dom.on('touchstart',function(event){
			console.log('开始滑动')
			start=event.changedTouches[0].pageX;
			console.log(start)

		})
		this.dom.on('touchmove',function(event){
			console.log('正在滑动')

		})
		this.dom.on('touchend',function(event){
			console.log('滑动结束')
			end=event.changedTouches[0].pageX;
			console.log(end)
		})
		console.log(end-start,"##########")
	},
	initCount:0,
	reset:function(){
		$("#list_wrap").html("");
		this.initCount=0;
		this.dom.removeClass(".noDate")
	},
	loadList:function(hash,flag){//https://mainsite-restapi.ele.me?latitude=31.24509&longitude=121.48282&offset=0&limit=20&extras[]=activities&terminal=h5
		this.hash=hash;
		if(flag){
			this.reset();
		}
		var me=this;
		console.log("ffffffffff")
		var lat=hash.split('-')[1];
		var lng=hash.split('-')[2];
		$.ajax({
			url:"https://mainsite-restapi.ele.me/shopping/restaurants",
			data:{
				latitude:lat,
				longitude:lng,
				offset:this.initCount,
				limit:20,
				extras:['activities'],
				terminal:'h5'
			},
			success:function(res){
				if(res.length===0){
					me.dom.addClass('noDate')
				}
					me.initCount+=20;
					var str="";
					res.forEach(function(ele,index){//res[i].latitude+'-'+res[i].longitude
						str+="<li><a href='#rlist'>"+ele.name+"</a></li>"
					})
					$("#list_wrap").append(str);
				},
			error:function(){
				console.log("err....")
			}
		})
	}
})