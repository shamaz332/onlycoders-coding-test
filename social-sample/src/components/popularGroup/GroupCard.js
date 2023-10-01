import React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import './popularGroup.css';

// Styled component for small avatar
const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 22,
	height: 22,
	border: `2px solid ${theme.palette.background.paper}`,
}));

// GroupCard component displaying group information
const GroupCard = ({ name, member, smallImage, mainImage }) => {
	return (
		<div className='group__card'>
			{/* Group meta information */}
			<div className='group__card__meta'>
				<div>
					{/* Avatar with badge */}
					<Badge
						overlap='circular'
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						badgeContent={
							<SmallAvatar alt='Remy Sharp' src={smallImage} />
						}>
						<Avatar alt='Travis Howard' src={mainImage} />
					</Badge>
				</div>
				<div className='profile__card__data'>
					<p>{name}</p>
					<p>{member} member</p>
				</div>
			</div>
			{/* Public group icon */}
			<div>
				<img
					src='https://cdn3.iconfinder.com/data/icons/faticons/32/globe-01-512.png'
					alt='public'
					height={20}
					width={20}
				/>
			</div>
		</div>
	);
};

export default GroupCard;
