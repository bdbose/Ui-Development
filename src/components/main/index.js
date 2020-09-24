/** @format */

import React from 'react';
import './style.scss';

const Image = [
	{
		url: '/assets/home1.png',
		title: 'Adventure',
		des: 'Collection of films that amaze',
		no: 24,
	},
	{
		url: '/assets/home2.png',
		title: 'Dramma',
		des: 'Collection of films that amaze',
		no: 19,
	},
	{
		url: '/assets/home3.png',
		title: 'Action',
		des: 'Collection of films that amaze',
		no: 11,
	},
	{
		url: '/assets/home4.png',
		title: 'Comedy',
		des: 'Collection of films that amaze',
		no: 17,
	},
];
const New = [
	{
		url: '/assets/new1.png',
		title: 'Jumanji',
		des: 'Adventure | Action',
	},
	{
		url: '/assets/new2.png',
		title: 'Inception',
		des: 'Action | Drama',
	},
	{
		url: '/assets/new3.png',
		title: 'Gravity',
		des: 'Sci-Fi',
	},
	{
		url: '/assets/new4.png',
		title: 'Johnny English',
		des: 'Comedy',
	},
];
const Main = () => {
	return (
		<div className='main-dis'>
			<div className='hero'>
				<div className='hero-wrapper'>
					<span>Action | Dramma | Movie | Adventure</span>
					<h1>Interstellar</h1>
					<div class='hero-button-cover'>
						<div className='hero-button'>
							<img src='/assets/play-button.svg' alt='' />
							<span>Watch trailer</span>
						</div>
						<div className='hero-button'>
							<img src='/assets/star.svg' alt='' />
							<span>Add to favourites</span>
						</div>
					</div>
					<div className='hero-text'>
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</div>
				</div>
			</div>
			<span
				style={{
					margin: '20px 0',
					fontSize: '24px',
					fontWeight: 'bold',
				}}>
				Movie Collection
			</span>
			<div className='collection-wrapper'>
				{Image.map((i) => {
					return (
						<div className='col-items' key={i.title}>
							<div className='col-no'>{i.no}</div>
							<img src={i.url} alt={i.url} />
							<div className='col-title'>{i.title}</div>
							<div className='col-des'>{i.des}</div>
						</div>
					);
				})}
			</div>
			<span
				style={{
					margin: '20px 0',
					fontSize: '24px',
					fontWeight: 'bold',
				}}>
				New
			</span>
			<div className='collection-wrapper'>
				{New.map((i) => {
					return (
						<div className='col-items' key={i.title}>
							<img src={i.url} alt={i.url} />
							<div className='col-title'>{i.title}</div>
							<div className='col-des'>{i.des}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Main;
