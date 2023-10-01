import React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import './newMember.css';

// Styled component for small avatar
const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 22,
	height: 22,
	border: `2px solid ${theme.palette.background.paper}`,
}));

// ProfileCard component displaying user information
const ProfileCard = ({ name, userName, mainImage, smallImage }) => {
	return (
		<div className='profile__card'>
			{/* Avatar with a badge for small avatar */}
			<div>
				<Badge
					overlap='circular'
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					badgeContent={
						<SmallAvatar alt='smallImage' src={smallImage} />
					}>
					<Avatar alt='mainImage' src={mainImage} />
				</Badge>
			</div>
			{/* User data */}
			<div className='profile__card__data'>
				<p>{name}</p>
				<p>@{userName}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
