import {Fragment, useState, React} from 'react';

// MUI Functions
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

// CSS
import styles from "./Courses.module.css"

// Routes
import CourseRouter from './CourseRouter';

// Table of the contents
const pages = ['Homepage', 'Schedule', 'Info and Policies', 'Projects', 'Students', 'Clients', 'Assignments', 'Settings'];

const CoursePage = ({courseInfo}) => {
  const [state, setState] = useState({
    right: false,
  });

  const anchor = 'right';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  // ENUM string for routes 
  const [route, setRoute] = useState('Homepage');

  return (
    <div>
      <Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>Click to open course</Button>
        <Drawer
          PaperProps={{ style: {position: 'flex', marginTop: 64, height: '100%', width: '96%' }}}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <AppBar style={{background: '#CDDDDD', color: 'black'}} position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                  {courseInfo.course}
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
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
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={() => {
                                handleCloseNavMenu();
                                setRoute({page});
                            }}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      className={styles.changeFont}
                      key={page}
                      onClick={() => {
                                handleCloseNavMenu();
                                setRoute({page});
                            }}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          {/*This will return whatever page we want displayed :)*/}
          <CourseRouter route={route} courseInfo={courseInfo}/>

        </Drawer>
      </Fragment>
    </div>
  );
}

export default CoursePage;