/** @format */

import React from 'react';
import './style.scss';

const Item = [
	{
		img: '/assets/home (1).svg',
		title: 'Home',
	},
	{
		img: '/assets/old-tv.svg',
		title: 'TV-channels',
	},
	{
		img: '/assets/video-camera.svg',
		title: 'Movies',
	},
	{
		img: '/assets/disc.svg',
		title: 'TV series',
	},
	{
		img: '/assets/concert.svg',
		title: 'Concerts',
	},
	{
		img: '/assets/hockey.svg',
		title: 'Sport',
	},
	{
		img: '/assets/kids.svg',
		title: 'For Kids',
	},
	{
		img: '/assets/star.svg',
		title: 'Favourite',
	},
	{
		img: '/assets/user (1).svg',
		title: 'Personal data',
	},
];

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='items'>
				<span>Categories</span>
				<div className='item-list'>
					{Item.map((i) => {
						return (
							<div className='item-wrapper' key={i.title}>
								<img src={i.img} alt='' />
								<span className='item-span'>{i.title}</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className='download'>
				<span>
					Enjoy your favourite movies, concerts and TV-channels in our
					application!
				</span>
				<div className='down-stores'>
					<img src='/assets/appstore.png' alt='' />
					<img src='/assets/googlestore.png' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
