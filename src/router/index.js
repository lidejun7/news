import Vue from 'vue'
import Router from 'vue-router'
import Groom from '@/components/groom/groom'
import Hotspot from '@/components/hotspot/hotspot'
import Sociology from '@/components/sociology/sociology'
import Entertainment from '@/components/entertainment/entertainment'
import Technology from '@/components/technology/technology'
import Automobile from '@/components/automobile/automobile'
import Finance from '@/components/finance/finance'
//import Groom from '@/components/groom/groom'
//import Groom from '@/components/groom/groom'
//import Groom from '@/components/groom/groom'
//import Groom from '@/components/groom/groom'
//import Groom from '@/components/groom/groom'
import Search from '@/components/search/search'


Vue.use(Router)

export default new Router({
  routes: [
		{    
			path: '/',
			name: 'Groom',
   		component: Groom
 		},
 		{    
			path: '/Hotspot',
			name: 'Hotspot',
   		component: Hotspot
 		},
   		{    
				path: '/sociology',
				name: 'Sociology',
	   		component: Sociology
   		},
   		{    
				path: '/entertainment',
				name: 'Entertainment',
	   		component: Entertainment
   		},
   		{    
				path: '/technology',
				name: 'Technology',
	   		component: Technology
   		},
   		{    
				path: '/automobile',
				name: 'Automobile',
	   		component: Automobile
   		},
   		{    
				path: '/finance',
				name: 'Finance',
	   		component: Finance
   		},
// 		{    
//			path: '/',
//			name: 'Groom',
// 		component: Groom
// 		},
// 		{    
//			path: '/',
//			name: 'Groom',
// 		component: Groom
// 		},
   		{    
			path: '/search',
			name: 'Search',
   		component: Search
   		}
 		
  ]
})
