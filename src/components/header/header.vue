<template>
	<div class="">
		<div class="header">
			<div class="top_header">
				<div class="header_left">
					<a href="" ></a>
					<div class="circle">
						
					</div>
				</div>
				<div class="header_con">
					<a href="" class="con_one">天天有料</a>
					<a href="" class="con_tow"></a>
				</div>
				<div class="header_right">
					<router-link to="/search"></router-link>
				</div>
			</div>
			<div class="bot_header">
				<div class="bot_left">
					<div v-for="(item,index) in items" class="bot_ul">
						<router-link :to="item.http" >{{item.text}}</router-link>
					</div>
				</div>
				<div class="bot_right">
					<a href="" class="bot_btn">
						<span class="cross">
							
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		chagre:1,
		data(){
			return {
		  		items:[
					{
			  			text:'推荐',
			  			http:'/'	
					},
					{
			  			text:'热点',
			  			http:'/hotspot'
					},
					{
			  			text:'社会',
			  			http:'/sociology'			
					},
					{
			  			text:'娱乐',
			  			http:'/entertainment'			
					},
					{
			  			text:'科技',
			  			http:'/technology'		
					},
					{
			  			text:'汽车',
			  			http:'/automobile'				
					},				
					{
			  			text:'体育',
			  			http:'/sports'			
					},
					{
			  			text:'财经',
			  			http:'/finance'			
					},
					{
			  			text:'军事',
			  			http:'/military'			
					},
					{
			  			text:'国际',
			  			http:'/international'
					},
					{
			  			text:'时尚',
			  			http:'/fashion'				
					},				
					{
			  			text:'游戏',
			  			http:'/game'			
					},
					{
			  			text:'旅游',
			  			http:'/tourism'			
					},
					{
			  			text:'历史',
			  			http:'/history'			
					},
					{
			  			text:'探索',
			  			http:'/explore'
					},
					{
			  			text:'美食',
			  			http:'/cate'
					}
		  		]				
			}

		}
	}
</script>

<style scoped>
	.top_header{
	    height: 44px;
	    position: relative;
    	background: #d43d3d;
	}
	.header_left{
	    width: 54px;
        position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}
	.header_left a{
		background: url(../../../static/img/feed_ic_message_normal.png) no-repeat;
    	background-size: contain;
   	 	width: 32px;
    	height: 25px;
    	margin-left: 12px;
    	display: inline-block;
   		position: relative;
	}
	.circle {
	    position: absolute;
	    width: 10px;
	    height: 10px;
	    background: #fff;
	    right: 15px;
	    top: 1px;
	    border-radius: 5px;
	}
	.header_con{
	    width: 100%;
	    height: 44px;
	    text-align: center;
	    font-size: 20px;
	    color: #fff;
	    line-height: 44px;
	    position: absolute;
	}
	.header_con .con_one{
	    width: 83px;
    	height: 44px;
    	color: #fff;
    	font-weight:bolder ;
	    padding-left: 5px;
	    display: inline-block;
	    vertical-align:top;
	}
	.header_con .con_tow{
	    background: url(../../../static/img/titlebar_refresh_small.png) no-repeat 50%;
    	width: 15px;
    	background-size: 15px;
    	display: inline-block;
    	height: 44px;
	}
	.header_right{
   		right: 0;
   		position: absolute;
    	top: 50%;
    	-webkit-transform: translateY(-50%);
    	transform: translateY(-50%);
	}
	.header_right a{
	    display: inline-block;
	    width: 24px;
	    height: 24px;
	    background: url(../../../static/img/feed_ic_search_norma.png) no-repeat 50%;
	    background-size: contain;
	    margin-right: 12px;
	}
	.bot_header{
		position: relative;
	    background: #f4f5f6;
	    height: 37px;
	    box-sizing: border-box;	    
	}
	.bot_header::after{
		content: "";
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 1px;
	    background-image: -webkit-linear-gradient(top,transparent,transparent 40%,#ddd 0);
	    background-size: 100% 1px;
	    background-position: bottom;
	    background-repeat: no-repeat;
	}
	.bot_left{
        height: 100%;
        max-width: 900px;
        min-width: 300px;
        overflow:scroll;
        width: 100%;
	}
	.bot_ul{
		white-space: nowrap;
		width:250%;
	}
	.bot_left a{
	    white-space: nowrap;
	    display: inline-block;
	    padding-left: 10px;
	    padding-right: 10px;
	    text-decoration: none;
	    font-size: 17px;
	    line-height: 26px;
	    height: 25px;
	    margin-left: 5px;
	    margin-top: 5px;
	    margin-bottom: 5px;
	    -webkit-tap-highlight-color: rgba(0,0,0,.3);
	    float: left;
	}
	.bot_left .bot_ul:last-child a{
		padding-right: 50px;
	}
	.bot_right{
		height: 37px;
		background: #f4f5f6;
		float: right;
    	position: relative;
    	top: -37px;
	}
	.bot_btn{
		display: block;
	    position: relative;
	    width: 40px;
	    height: 35px;
	    background-size: 20px;
	    font-size: 35px;
	    color: #f85959;
	    text-align: center;
	    line-height: 35px;
	}
	.router-link-exact-active{
		color:#f85959;
	}
	.cross{
		position: absolute;
	    width: 10px;
	    height: 15px;
	    opacity: .9;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%,-50%);
	}
	.cross:after, .cross:before {
	    position: absolute;
	    content: " ";
	    height: 20px;
	    width: 2px;
	    background-color: #f85959;
	}
	.cross:before {
	    transform: rotate(90deg);
	}
	div::-webkit-scrollbar{
		height: 0;
	}
</style>