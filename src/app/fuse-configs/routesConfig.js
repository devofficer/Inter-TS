import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import appsConfigs from 'app/main/apps/appsConfigs';

const routeConfigs = [...appsConfigs];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/apps/home" />
	}
];

export default routes;
