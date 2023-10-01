import React from 'react';
import GroupCard from './GroupCard';
import './popularGroup.css';

// PopularGroup component displaying popular groups
const PopularGroup = () => {
	return (
		<div>
			{/* Popular group section */}
			<div className='global__card'>
				<p className='car__title'>Newest Members</p>
				{/* Individual group cards */}
				<GroupCard
					name='Street Artist'
					member='4'
					mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
					smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
				/>
				<GroupCard
					name='Street Artist'
					member='4'
					mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
					smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
				/>
				<GroupCard
					name='Street Artist'
					member='4'
					mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
					smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
				/>
			</div>
		</div>
	);
}

export default PopularGroup;
