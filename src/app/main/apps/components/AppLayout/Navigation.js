import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
});

export default function Navigation() {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper className={classes.root}>
			<Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
				<Tab label="Home" icon={<HomeIcon />} />
				<Tab label="Search" icon={<SearchIcon />} />
				<Tab label="Add" icon={<AddIcon />} />
				<Tab label="Chat" icon={<ChatIcon />} />
				<Tab label="Profile" icon={<AccountBoxIcon />} />
			</Tabs>
		</Paper>
	);
}
