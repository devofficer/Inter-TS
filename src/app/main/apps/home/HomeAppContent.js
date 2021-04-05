import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import subjects from './subjects.json';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: '100%'
	},
	toolbar: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	lists: {
		width: 400,
		height: '100%',
		backgroundColor: theme.palette.background.paper,
		borderRight: `1px solid ${theme.palette.divider}`
	},
	nested: {
		paddingLeft: theme.spacing(2)
	},
	content: {
		backgroundColor: theme.palette.background.paper,
		height: '100%',
		width: '100%'
	},
	inline: {
		display: 'inline'
	}
}));

export default function HomeAppContent() {
	const classes = useStyles();
	const [topics, setTopics] = useState(subjects);
	const [value, setValue] = useState(0);

	const changeTopicOpen = (topic, title) => {
		if (topic.title === title) {
			return {
				...topic,
				open: topic.open === undefined ? true : !topic.open
			};
		}

		return {
			...topic,
			subtopics: topic.subtopics.map(subtopic => changeTopicOpen(subtopic, title))
		};
	};

	const handleClick = title => {
		setTopics(topics.map(topic => changeTopicOpen(topic, title)));
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const topicListGernerator = topic => (
		<React.Fragment key={topic.title}>
			<ListItem button onClick={e => handleClick(topic.title)}>
				<ListItemText primary={topic.title} />
				{topic.subtopics.length > 0 && (topic.open ? <ExpandLess /> : <ExpandMore />)}
			</ListItem>
			{topic.subtopics.length > 0 && (
				<Collapse in={topic.open} timeout="auto" unmountOnExit>
					<List className={classes.nested} component="div" disablePadding>
						{topic.subtopics.map(subtopic => topicListGernerator(subtopic))}
					</List>
				</Collapse>
			)}
		</React.Fragment>
	);

	return (
		<div>
			<Tabs
				className={classes.toolbar}
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label="As a Teacher" />
				<Tab label="As a Student" />
			</Tabs>
			<div className={classes.root}>
				<div className={classes.lists}>
					<List component="nav" aria-labelledby="nested-list-subheader">
						{topics.map(topic => topicListGernerator(topic))}
					</List>
				</div>

				<List className={clsx(classes.content)}>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										component="span"
										variant="body2"
										className={classes.inline}
										color="textPrimary"
									>
										Sandra Adams
									</Typography>
									{' — Do you have Paris recommendations? Have you ever…'}
								</>
							}
						/>
					</ListItem>
				</List>
			</div>
		</div>
	);
}
