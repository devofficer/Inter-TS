import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import HomeAppConfig from 'app/main/apps/home/HomeAppConfig';

const routeConfigs = [HomeAppConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/apps/home" />
	}
];

export default routes;
