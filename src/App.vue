<template>
	<div>
		<header-view></header-view>
		<router-view></router-view>
	</div>
	
</template>

<script>
	import header from './components/header/header.vue';
	export default {
		components:{
			'header-view':header
		}
	}

</script>
 
<style scoped>
</style>
