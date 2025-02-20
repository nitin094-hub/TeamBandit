import { useState, React, Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { toast } from 'react-toastify';

import CoursePage from './CoursePage';

const expandedMenu = ["Edit", "Delete"];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CourseCard = ({courseInfo, setCoursesChange}) => {

  // Variables 
  const [title, setTitle] = useState(courseInfo.course_title);
  const [semester, setSemester] = useState(courseInfo.course_semester);
  const [description, setDescription] = useState(courseInfo.course_description);

  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
    setTitle(courseInfo.course_title);
    setSemester(courseInfo.course_semester);
    setDescription(courseInfo.course_description);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
};
const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    async function deleteCourse(id) {
      try {
        await fetch(`http://localhost:5000/courses/courses/${id}`, {
          method: "DELETE",
          headers: { token: localStorage.token }
        });
  
        setCoursesChange(true);
        toast.success("Course was deleted!");
      } catch (err) {
        console.error(err.message);
        toast.error("Course failed to delete!");
      }
    }

    //edit course function

  const updateCourse = async e => {
    e.preventDefault();
    try {
        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("token", localStorage.token);


      const body = { title, semester, description };
      await fetch(
        `http://localhost:5000/courses/courses/${courseInfo.course_id}`,
        {
          method: "PUT",
          headers: myHeaders,
          body: JSON.stringify(body)
        }
      );

      setCoursesChange(true);
      toast.success("Course edited successfully!");
      handleClose();

    } catch (err) {
      console.error(err.message);
      toast.error("Failed to update course!");
    }
  };

  return (
    <Fragment>
    <Card sx={{ boxShadow: 8}}>
      <CardHeader
        action={
          <>
          <Tooltip title="Open settings">
            <IconButton
                
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
            >
                <MoreVertIcon />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {expandedMenu.map((setting) => (
                <MenuItem
                    key={setting}
                    onClick={(event) =>
                      setting === 'Delete' ? (handleCloseUserMenu(), deleteCourse(courseInfo.course_id)) : (handleCloseUserMenu(), handleClickOpen())
                    }
                >
                    <Typography textAlign="center">
                        {setting}
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
        </>
        }
        title={courseInfo.course_title}
        subheader={courseInfo.course_semester}
      />
      <CoursePage courseInfo={courseInfo} />
      <CardContent>
        <Typography >
        {courseInfo.course_description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Long Course Description?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit this course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter course information here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            type="text"
            fullWidth
            variant="standard"
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Course Semester"
            type="text"
            fullWidth
            variant="standard"
            value = {semester}
            onChange={(e) => setSemester(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Course Description"
            type="text"
            fullWidth
            variant="standard"
            value = {description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateCourse}>Edit Course</Button>
        </DialogActions>
      </Dialog>
      </Fragment>
  );
}

export default CourseCard;


