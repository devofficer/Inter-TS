import React from 'react';

import AppLayout from 'app/main/apps/components/AppLayout';
import HomeAppContent from './HomeAppContent';

function HomeApp(props) {
	return <AppLayout content={<HomeAppContent />} />;
}

export default HomeApp;
