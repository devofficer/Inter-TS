import HomeApp from './HomeApp';

const HomeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/home',
			component: HomeApp
		}
	]
};

export default HomeConfig;
