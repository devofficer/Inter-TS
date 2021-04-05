import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Navigation from './Navigation';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		minHeight: '100%',
		position: 'relative',
		flex: '1 0 auto',
		height: 'auto',
		backgroundColor: theme.palette.background.default
	},
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0 3.2rem',
		flex: '1 1 100%',
		zIndex: 2,
		maxWidth: '100%',
		minWidth: 0,
		minHeight: 0,
		[theme.breakpoints.down('xs')]: {
			padding: '0 1.6rem'
		}
	},
	contentCard: {
		display: 'flex',
		flex: '1 1 100%',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		minHeight: 0,
		borderRadius: '8px 8px 0 0'
	},
	content: {
		flex: '1 1 auto',
		height: '100%',
		overflow: 'auto',
		'-webkit-overflow-scrolling': 'touch'
	},
	navigation: {
		height: 75,
		minHeight: 75,
		display: 'flex',
		alignItems: 'center'
	}
}));

function AppLayout(props) {
	const classes = useStyles(props);

	return (
		<div className={clsx(classes.root)}>
			<div className={clsx(classes.contentWrapper)}>
				<div className={clsx(classes.contentCard)}>
					<div className={clsx(classes.content)}>{props.content}</div>
				</div>
				<div className={clsx(classes.navigation)}>
					<Navigation />
				</div>
			</div>
		</div>
	);
}

export default AppLayout;
