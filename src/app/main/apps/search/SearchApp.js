import React from 'react';

import AppLayout from 'app/main/apps/components/AppLayout';
import SearchAppContent from './SearchAppContent';

function SearchApp(props) {
	return <AppLayout content={<SearchAppContent />} />;
}

export default SearchApp;
