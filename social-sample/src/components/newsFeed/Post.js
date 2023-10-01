import React from 'react'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { Chip, Divider } from '@mui/material'
import './newsFeed.css'

// Styled component for small avatar
const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 22,
	height: 22,
	border: `2px solid ${theme.palette.background.paper}`,
}))

// Post component displaying individual posts
const Post = ({
	name,
	badge,
	topic,
	forum,
	post,
	likes,
	comment,
	date,
	mainImage,
	smallImage,
}) => {
	return (
		<div className='global__card post__card'>
			{/* User data */}
			<div className='post__user__data'>
				<div>
					{/* Avatar with badge */}
					<Badge
						overlap='circular'
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						badgeContent={
							<SmallAvatar alt='SmallAvatar' src={smallImage} />
						}>
						<Avatar alt='Avatar' src={mainImage} />
					</Badge>
				</div>
				<div className='profile__card__data'>
					{/* User name, badge, topic, and forum */}
					<span className='car__title'>{name} </span>
					<span>
						<Chip color='primary' label={badge} />{' '}
					</span>
					replied to the topic
					<span className='car__title'> {topic} </span>
					in the forum
					<span className='car__title'> {forum} </span>
					<p className='date'>{date}</p>
				</div>
			</div>

			{/* Post content */}
			<div className='post__content'>{post}</div>

			<Divider color='gray' />

			{/* Post reactions */}
			<div className='post__response'>
				<div>
					<span>
						<img
							src='https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-stars-png-21.png'
							width={25}
							height={25}
							alt='love'
						/>
					</span>{' '}
					<span>1</span>
				</div>
				<div className='post__reaction'>
					<p>{likes} Likes</p>
					<p>{comment} Comments</p>
				</div>
			</div>
		</div>
	)
}

export default Post
