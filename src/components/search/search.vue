<template>
	<div id="search">
		<div class="searchBar">
			<el-input v-model="input" placeholder="请输入内容" @keyup.native.enter="search(input)" class="searchInput fl">
			</el-input>
			<el-popover ref="popover4" placement="bottom" trigger="click" id="popover">
				<ul class="searchList" v-show="test.length != 0">
					<li class="searchListItems" v-for="(item,index) in test">
						<span @click="historySearch(item)" >
							<i type="ios-search" size="18" class="ivu-icon ivu-icon-ios-search"></i>
							{{item}}
						</span>
						<i class="el-icon-delete fr" @click.prevent="clearThisHistory(index)"></i>
					</li>
					<div class="clearHistory" @click="clearHistory" >清空历史记录</div>
				</ul>
				<ul class="noHistory" v-show="test.length == 0">
					暂无历史搜索记录
				</ul>
			</el-popover>
			<span class="toutiaoIcon" v-popover:popover4>历史记录</span>
		</div>
		<div v-show="loading" v-loading="loading" element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
		<div class="searchNews">
			<router-link v-for="(val,index) in con" :to="{
                    name:'newsdetail',
                    params:
                        {   id:val.tag_id,
                            title:val.title,
                            media_info:val.media_info,
                            media_name:val.media_name,
                            datetime:val.datetime,
                            abstract:val.abstract,
                            image_list:val.image_list,
                            repin_count:val.repin_count,
                            comment_count:val.comment_count,
                            keywords:val.keywords
                        }
                }" :key="index" class="searchNewsItem" v-show="val.media_creator_id&&val.title">
				<p class="title" v-html="replace(val.title,input)"></p>
				<div>
					<img alt="加载出错" v-for="(img,index) in val.image_list " :key="index" :src="img.url" class="img-width">
					<div class="bottomInfo clearfix">
						<i type="fireball" size="10" color="#d43d3d" v-show="val.hot===1"></i>
						<span class="avIcon" v-show="val.label==='广告'">广告</span>
						<span class="writer">{{val.media_name}}</span> &nbsp;&nbsp;
						<span class="comment_count">评论&nbsp;{{val.comment_count}}</span>
						<span class="datetime">{{val.datetime}}</span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	import jsonp from 'jsonp'
	export default {
		data() {
			return {
				loading: false,
				flag: true,
				input: '',
				con: [],
				test: [],
				searchCon: ''
			}
		},
		beforeRouteLeave(to, from, next) {
			if(to.name == 'home') {
				this.con = [];
				this.input = '';
				document.getElementsByClassName('el-popover')[0].style.display = 'none';
				next();
			}
			next();
		},
		methods: {
			replace(title, inp) {
				const reg = new RegExp('' + inp + '', 'gim');
				if(title) {
					return title.replace(reg, '<font style="color: red;">' + inp + '</font>')
				} else {
					return title;
				}
			},
			historySearch(item) {
				this.input = item;
				this.flag = false;
				this.search(item);
				this.con = [];
				this.$nextTick(function() {
					document.getElementsByClassName('el-popover')[0].style.display = 'none';
				})
			},
			clearHistory() {
				this.$confirm('确认清空历史记录?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					})
					.then(() => {
						this.test = [];
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					})
					.catch(() => {

					});
			},
			clearThisHistory(index) {
				this.$confirm('确认删除此条历史记录?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					})
					.then(() => {
						this.test.splice(index, 1);
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
					})
					.catch(() => {

					});
			},
			//回车搜索
			search(input) {
				const _this = this;
				input = input.trim();
				if(input) {
					if(this.searchCon == input) {
						if(this.flag) {
							return;
						}
					}
					_this.loading = true;
					jsonp('http://www.toutiao.com/search_content/?offset=0&format=json&keyword=' + input + '&autoload=true&count=20&cur_tab=1', function(err, res) {
						_this.con = res.data;
						_this.loading = false;
						console.log(_this.con)
					})
					this.test.unshift(input);
					this.searchCon = input;
					this.flag = true;
				} else {
					this.searchCon = '';
					this.con = [];
				}
			}
		},
	}
</script>
<style scoped>
	
	#search .searchBar {
		margin-top: 1.3rem;
		margin-left: 0.3rem;
		width: 100%;
	}
	
	#search .searchBar .searchInput {
		width: 80%;
	}
	
	.el-input {
		position: relative;
		font-size: 14px;
	}
	
	.el-input,
	.el-input__inner {
		width: 100%;
		display: inline-block;
	}
	
	reset.css:118 .fl {
		float: left;
	}
	
	.el-input__inner {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #fff;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #bfcbd9;
		box-sizing: border-box;
		color: #1f2d3d;
		font-size: inherit;
		height: 36px;
		line-height: 1;
		outline: 0;
		padding: 3px 10px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	}
	.el-popover {
	    position: absolute;
	    background: #fff;
	    min-width: 150px;
	    border-radius: 2px;
	    border: 1px solid #d1dbe5;
	    padding: 10px;
	    z-index: 2000;
	    font-size: 12px;
	}
	.el-popover, .el-tabs--border-card {
	    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
	}
	.el-popover .searchListItems {
	    display: block;
	    position: relative;
	    height: .9rem;
	    line-height: .9rem;
	    font-size: 16px;
	    padding: 0.5rem 0;
	}
	.el-popover .searchListItems i {
	    padding: 0 .2rem;
	    line-height: .9rem;
	}
	.searchListItems>span{
		color: #495060;
		font-size: 14px;
	}
	.ivu-icon {
	    display: inline-block;
	    font-family: Ionicons;
	    speak: none;
	    font-style: normal;
	    font-weight: 400;
	    font-variant: normal;
	    text-transform: none;
	    text-rendering: auto;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	[class*=" el-icon-"], [class^=el-icon-] {
	    font-family: element-icons!important;
	    speak: none;
	    font-style: normal;
	    font-weight: 400;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    vertical-align: baseline;
	    display: inline-block;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	.fr {
	    float: right;
	}
	.img-width{
		width: 32%;
	}
	.img-width:first-child{
		padding-right: 2px;
	}
	.img-width:nth-child(2){
		padding-right: 2px;
	}
	.el-popover .clearHistory {
	    font-size: 14px;
	    height: .7rem;
	    line-height: 1rem;
	    text-align: center;
	    padding: 1rem 0;
	}
	#search .searchBar .toutiaoIcon {
	    display: inline-block;
	    font-size: 13px;
	    padding-top: 5px;
	    text-align: center;
	    width: 8%;
	    float: right;
	}
	#search .loading {
	    margin-top: 1rem;
	}
	.el-loading-mask {
	    position: absolute;
	    z-index: 10000;
	    background-color: rgba(255,255,255,.9);
	    margin: 0;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    transition: opacity .3s;
	}
	.el-loading-spinner {
	    top: 50%;
	    margin-top: -21px;
	    width: 100%;
	    text-align: center;
	    position: absolute;
	}
	.el-loading-spinner .circular {
	    width: 42px;
	    height: 42px;
	    animation: loading-rotate 2s linear infinite;
	}
	.el-loading-spinner .path {
	    animation: loading-dash 1.5s ease-in-out infinite;
	    stroke-dasharray: 90,150;
	    stroke-dashoffset: 0;
	    stroke-width: 2;
	    stroke: #20a0ff;
	    stroke-linecap: round;
	}
	.el-loading-spinner .el-loading-text {
	    color: #20a0ff;
	    margin: 3px 0;
	    font-size: 14px;
	}
	#search .searchNews .searchNewsItem {
	    width: 94%;
	    display: block;
	    position: relative;
	    margin: 0 auto;
	    padding-bottom: 1.15rem;
	}
	a {
	    color: #2d8cf0;
	    background: 0 0;
	    text-decoration: none;
	    outline: 0;
	    cursor: pointer;
	    transition: color .2s ease;
	}
	#search .searchNews .searchNewsItem .title {
	    font-size: 16px;
	    font-weight: bold;
	    color: #000;
	    padding-top: 1.2rem;
	    padding-bottom: 1rem;
	    letter-spacing: 1px;
	}
	#search .searchNews .searchNewsItem .bottomInfo {
	    font-size: 10px;
	    margin-top: 1rem;
	}
	#search .searchNews .searchNewsItem .bottomInfo .avIcon {
	    display: inline-block;
	    height: 0.4rem;
	    width: 0.9rem;
	    text-align: center;
	    line-height: 0.4rem;
	    border-radius: 4px;
	    border: 1px solid #39f;
	    font-size: 10px;
	    margin-right: 0.1rem;
	}
	#search .searchNews .searchNewsItem .bottomInfo .writer {
	    color: #000;
	}
	#search .searchNews .searchNewsItem .bottomInfo .comment_count {
	    color: #000;
	}
	#search .searchNews .searchNewsItem .bottomInfo .datetime {
	    float: right;
	    color: #000;
	}
	.clearfix:after {
	    content: " ";
	    display: block;
	    clear: both;
	    visibility: hidden;
	}
	:after, :before {
	    box-sizing: border-box;
	}
	#search .searchNews .searchNewsItem::after {
	    content: "";
	    box-sizing: border-box;
	    position: absolute;
	    width: 100%;
	    left: 0;
	    bottom: 0;
	    border-top: 1px solid #ccc;
	}
	@media screen and (-webkit-min-device-pixel-ratio: 2)
		#search .searchNews .searchNewsItem::after,
		.el-popover .searchListItems::after{
		    transform: scaleY(0.5);
		}
	.el-popover .searchListItems::after {
		content: "";
	    box-sizing: border-box;
	    position: absolute;
	    width: 100%;
	    left: 0;
	    bottom: 0;
	    border-top: 1px solid #ccc;
	}
	.el-message-box {
	    text-align: left;
	    display: inline-block;
	    vertical-align: middle;
	    background-color: #fff;
	    width: 90%;
	    border-radius: 3px;
	    font-size: 16px;
	    overflow: hidden;
	    -webkit-backface-visibility: hidden;
	    backface-visibility: hidden;
	}
	.ivu-icon-ios-search:before {
	    background: url(../../../static/img/sousuo.png);
	}
</style>