/** @format */

import React from 'react';
import './style.scss';
const Search = () => {
	return (
		<div className='search'>
			<div className='logo'>
				<img src='/assets/logo_cinemeye.svg' alt='' />
				Cinemeye
			</div>
			<div className='search-bar'>
				<div className='search-wrapper'>
					<div className='input-cover'>
						<img src='/assets/mglass.svg' alt='' />
						<input placeholder='Search' />
					</div>
					<div className='button-en'>
						<img src='/assets/global.svg' alt='' />
						EN
					</div>
				</div>
				<div className='auth'>
					<button>Login</button>
					<button>Try Now</button>
				</div>
			</div>
		</div>
	);
};
export default Search;
