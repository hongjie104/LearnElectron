import React, { Component } from 'react';
import { Link } from 'react-router';
import Toolbar from '../../components/toolbar/Toolbar';
import Manager from '../../components/manager/Manager';
import styles from './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Toolbar />
				<div className={styles.container}>
					<Manager />
				</div>
			</div>
		);
	}
}


/*
<div className={styles.container}>
					
					<h2>Home11</h2>
					<Link to="/counter">to Counter</Link>
				</div>
*/