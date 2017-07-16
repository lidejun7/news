<template>
	<div>
		<content>
			<section class="action clearfix"v-for="item in groom">
				<a :href="item.article_url" class="action_con clearfix" >
					<div class="item_detail">
						<h3>{{item.title}}</h3>
					</div>
					<div class="list_image">
						<ul class="clearfix">
							<li class="list_img_holder" v-for="image in item.image_list">
								<img :src="image.url" />
							</li>
						</ul>
					</div>
					<div class="item_info ">
						<span></span>
						<span>{{item.media_name}}</span>
						<span>评论 {{item.comment_count}}</span>
						<span>{{item.datetime}}</span>
					</div>
				</a>
			</section>
		</content>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				groom:{}
			}
		},
		created(){
		  	this.$http.jsonp('https://m.toutiao.com/list/?tag=news_car&ac=wap&count=20&format=json_raw&as=A145C9451632933&cp=595652394383BE1&min_behot_time=0').then(function(res){
		  		 this.groom = res.body.data;
		  		 console.log(this.groom)
		  	})
 		 }
	}
</script>

<style scoped>
	.clearfix:after {
	    visibility: hidden;
	    display: block;
	    font-size: 0;
	    content: " ";
	    clear: both;
	    height: 0;
	}
	content{
		position: relative;
    	display: block;
	}
	.action{
		position: relative;
	    -webkit-transition: all 1s ease-in-out;
	    margin: 0 15px;
	    border-bottom: 1px solid hsla(0,0%,87%,.6);
	}
	.action_con{
		display: block;
	    position: relative;
	    padding: 15px 0;
	    min-height: 40px;
	    font-size: 0;
	    text-decoration: none;
	}
	.item_detail h3{
		color: #222;
	    font-size: 15px;
	    line-height: 20px;
	    font-weight: 400;
	    overflow: hidden;
		text-overflow: ellipsis;
		display: box;
	}
	.list_image{
		margin-top: 5px;
	}
	.list_image ul{
	    display: block;
	    margin: 0;
	    padding: 0;
	    list-style-type: none;
	    font-size: 0;
	    text-align: center;
	}
	.list_image ul li:first-child {
	    float: left;
	    padding-right: 2px;
	}
	.list_image ul li:last-child {
	    float: right;
	    padding-left: 2px;
	}
	.list_image ul li {
	    display: inline-block;
	    overflow: hidden;
	    width: 33.3%;
	    box-sizing: border-box;
	}
	.list_img_holder img {
	    border: none;
	    display: block;
	    width: 100%;
	    pointer-events: none;
	    text-decoration: none;
	}
	.item_info {
	    color: #999;
	    overflow: hidden;
	    font-size: 0;
	    margin-top: 6px;
	}
	.item_info span {
	    display: inline-block;
	    font-size: 10px;
	    line-height: 12px;
	    vertical-align: middle;
        margin-right: 5px;	
	}
	.item_info span:last-child{
		float: right;
	}
</style>