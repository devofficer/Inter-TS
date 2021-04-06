import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

import data from './search.json';

const useStyles = makeStyles(theme => ({
	toolbar: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		borderBottom: `1px solid ${theme.palette.divider}`
	}
}));

export default function SearchAppContent() {
	const classes = useStyles();
	const [searchData] = useState(data);
	const [value, setValue] = useState(0);
	const [searchString, setSearchString] = useState('');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	let list = [];
	if (value === 0 || value === 1) {
		list = list.concat(
			searchData.people
				.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()))
				.map(item => {
					return {
						type: 'person',
						...item
					};
				})
		);
	}

	if (value === 0 || value === 2) {
		list = list.concat(
			searchData.tags
				.filter(
					item =>
						item.title.toLowerCase().includes(searchString.toLowerCase()) ||
						item.info.toLowerCase().includes(searchString.toLowerCase())
				)
				.map(item => {
					return {
						type: 'tag',
						...item
					};
				})
		);
	}

	return (
		<div>
			<div className={clsx(classes.toolbar, 'flex flex-1 items-center p-8 sm:p-12 max-w')}>
				<Paper className="flex items-center h-44 w-full px-16 rounded-8 shadow bg-grey-100">
					<Input
						placeholder="Search..."
						disableUnderline
						fullWidth
						inputProps={{
							'aria-label': 'Search'
						}}
						value={searchString}
						onChange={e => setSearchString(e.target.value)}
					/>
					<Icon color="action">search</Icon>
				</Paper>
			</div>

			<Tabs
				className={classes.toolbar}
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
			>
				<Tab label="All" />
				<Tab label="People" />
				<Tab label="Tags" />
			</Tabs>

			<List className={classes.root}>
				{list.map(item => {
					return (
						<>
							<ListItem>
								<ListItemAvatar>
									{item.type === 'person' && <Avatar alt={item.name} src={item.photo} />}
									{item.type === 'tag' && (
										<Avatar>
											<Icon>local_offer</Icon>
										</Avatar>
									)}
								</ListItemAvatar>
								{item.type === 'person' && <ListItemText primary={item.name} />}
								{item.type === 'tag' && <ListItemText primary={item.title} secondary={item.info} />}
							</ListItem>
							<Divider variant="inset" component="li" />
						</>
					);
				})}
			</List>
		</div>
	);
}
