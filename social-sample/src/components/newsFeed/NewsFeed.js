import React, { useState } from 'react'
import Post from './Post'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// NewsFeed component displaying posts with a filter option
const NewsFeed = () => {
	const [value, setValue] = useState(1)

	// Handle filter option change
	const handleChange = (event) => {
		setValue(event.target.value)
	}

	return (
		<div>
			{/* NewsFeed section */}
			<div className='global__card feed__card'>
				{/* Title and filter dropdown */}
				<p className='car__title'>All Updates</p>
				<FormControl sx={{ minWidth: 220 }} size='medium'>
					<InputLabel id='demo-select-small-label'>Show</InputLabel>
					<Select
						style={{ borderRadius: '20px' }}
						labelId='demo-select-small-label'
						id='demo-select-small'
						value={value}
						label='Show'
						onChange={handleChange}>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>Everything</MenuItem>
					</Select>
				</FormControl>
			</div>
			{/* Individual posts */}
			<Post
				name='Shamaz Saeed'
				badge='Pro Member'
				topic='Welcome to Beautiful World'
				forum='How to Become Happy'
				post='Hello World!'
				likes='1'
				comment='1'
				date='1 day ago'
				mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
				smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
			/>
			<Post
				name='Shamaz Saeed'
				badge='Pro Member'
				topic='Welcome to Beautiful World'
				forum='How to Become Happy'
				post='Hello World!'
				likes='1'
				comment='1'
				date='1 day ago'
				mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
				smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
			/>
			<Post
				name='Shamaz Saeed'
				badge='Pro Member'
				topic='Welcome to Beautiful World'
				forum='How to Become Happy'
				post='Hello World!'
				likes='1'
				comment='1'
				date='1 day ago'
				mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
				smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
			/>
		</div>
	)
}

export default NewsFeed
