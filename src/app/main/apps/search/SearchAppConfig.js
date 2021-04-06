import SearchApp from './SearchApp';

const SearchConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/apps/search',
			component: SearchApp
		}
	]
};

export default SearchConfig;
