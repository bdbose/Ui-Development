/** @format */

import React from 'react';
import Main from '../components/main';
import Navbar from '../components/navbar';
import Search from '../components/search';
import './style.scss';
const Home = () => {
	return (
		<div className='main'>
			<Search />
			<div className='wrapper'>
				<Navbar />
				<Main />
			</div>
		</div>
	);
};

export default Home;
