import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    Drawer as MuiDrawer,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    AppBar,
    Menu,
    Button,
    MenuItem,
    InputBase,
    Paper,
} from '@mui/material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Person as PersonIcon, Search as SearchIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import { Adb as AdbIcon } from '@mui/icons-material';
import { Row, Col } from 'react-bootstrap';
import './Main.css';
import Banner from '../Banner/Banner';
import NewMember from '../newMember/NewMember';
import NewsFeed from '../newsFeed/NewsFeed';
import PopularGroup from '../popularGroup/PopularGroup';


// Array of pages for the responsive menu
const pages = ['Home', 'Features', 'More']

// Width of the sidebar when opened
const drawerWidth = 20

// Styles for opened sidebar
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

// Styles for closed sidebar
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

// Styled component for the drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))

// Styled component for the sidebar
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}))

// Main functional component
export default function Main() {
    // State variables for sidebar and menu
    const [open] = React.useState(false)
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    // Event handler for opening the responsive menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    // Event handler for closing the responsive menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f8f8fb' }}>
            <CssBaseline />
            {/* App Bar */}
            <AppBar
                position='fixed'
                className='top__bar'
                sx={{ pl: { xs: 1, md: 4 }, pr: { xs: 1, md: 4 } }}>
                {/* Toolbar */}
                <Toolbar
                    disableGutters
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo and title */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {' '}
                        {/* Logo */}
                        <AdbIcon
                            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        />
                        {/* Title */}
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='#app-bar-with-responsive-menu'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            SAMPLE PAGE
                        </Typography>
                        {/* Responsive menu icon */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'>
                                <MenuIcon />
                            </IconButton>
                            {/* Responsive menu */}
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}>
                                        <Typography textAlign='center'>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* Logo for mobile */}
                        <AdbIcon
                            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                        />
                        {/* Title for mobile */}
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href='#app-bar-with-responsive-menu'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            SAMPLE PAGE
                        </Typography>
                        {/* Navigation buttons for larger screens */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    {/* Search bar */}
                    <Box>
                        <Paper
                            component='form'
                            sx={{
                                p: '1px 3px',
                                alignItems: 'center',
                                width: 400,
                                backgroundColor: 'transparent',
                                color: 'white',
                                display: {
                                    xs: 'none',
                                    lg: 'flex',
                                },
                            }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1, color: 'white' }}
                                placeholder='Enter Search Term'
                                inputProps={{
                                    'aria-label': 'search google maps',
                                }}
                            />
                            <IconButton
                                type='button'
                                sx={{ p: '10px', color: 'white' }}
                                aria-label='search'>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    {/* Login button */}
                    <Box>
                        <Button
                            variant='contained'
                            disableElevation
                            sx={{ backgroundColor: '#00d2e0' }}>
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer variant='permanent' className='side__bar'>
                {/* Sidebar content */}
                <DrawerHeader></DrawerHeader>
                <Divider />
                <List>
                    {/* List items in the sidebar */}
                    {['User', 'User', 'User', 'User'].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}>
                                    {/* Icons for list items */}
                                    {index % 2 === 0 ? (
                                        <PersonIcon />
                                    ) : (
                                        <PersonIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/* Main content */}
            <Box
                component=''
                sx={{
                    flexGrow: 1,
                    p: 2,
                    pl: 10,
                    maxWidth: '1440px',
                    mx: 'auto',
                }}>
                <DrawerHeader />
                {/* Components inside the main content */}
                <Banner />

                <Row>
                    {/* Column for new members */}
                    <Col xs={12} lg={3}>
                        <NewMember />
                    </Col>
                    {/* Column for news feed */}
                    <Col xs={12} lg={6}>
                        <NewsFeed />
                    </Col>
                    {/* Column for popular groups */}
                    <Col xs={12} lg={3}>
                        <PopularGroup />
                    </Col>
                </Row>
            </Box>
        </Box>
    )
}
