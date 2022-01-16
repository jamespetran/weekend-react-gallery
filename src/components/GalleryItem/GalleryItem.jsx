import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LikesDisplay({ likes }) {
  if (likes === 0) {
    return `No people love this :(`
  }
  else if (likes === 1) {
    return `1 person loves this`
  }
  else if (likes > 1) {
    return `${likes} people love this!`
  }
}


function ShowPic(toggleClicked,photo) {
  return (
    <div
      // className="flip-card" 
      className="flip-card"
      onClick={toggleClicked}
    >
      {/* https://stackoverflow.com/questions/42630473/react-toggle-class-onclick */}
      {/* this is how i toggled the class on click */}
      {/* i will change this to conditional rendering tho to follow assignment instructions */}
      <div className="flip-card-inner">
        <CardMedia
          component="img"
          height="300"
          image={photo.path}
          alt={photo.description}
          className="flip-card-front"
        />
        <div className="flip-card-back">
          <p>
            {photo.description}
          </p>
        </div>
      </div>
    </div>
  )
}
function ShowDesc(toggleClicked, photo) {
  return (
    <div
      // className="flip-card" 
      className="flip-card hover"
      onClick={toggleClicked}
    >
      {/* https://stackoverflow.com/questions/42630473/react-toggle-class-onclick */}
      {/* this is how i toggled the class on click */}
      {/* i will change this to conditional rendering tho to follow assignment instructions */}
      <div className="flip-card-inner">
        <CardMedia
          component="img"
          height="300"
          image={photo.path}
          alt={photo.description}
          className="flip-card-front"
        />
        <div className="flip-card-back">
          <p>
            {photo.description}
          </p>
        </div>
      </div>
    </div>
  )
}
function FlipCard({isClicked, toggleClicked, photo}) {
if (isClicked) {
  return ShowDesc(toggleClicked,photo);
} else {
  return ShowPic(toggleClicked,photo);
}
}

function GalleryItem({ photo, likePut }) {
  const [isClicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!isClicked);
  }
  const addLike = (id) => {
    // event.preventDefault();
    likePut(id);
  };

  return (
    <>
      <Card sx={{ minWidth: 300 }} >
        <FlipCard
          isClicked={isClicked}
          toggleClicked={toggleClicked}
          photo={photo}
        />
      <CardContent>
        <Typography
          variant="p"
          component="div"
          className="photoDisplay">
          <button className="loveItBtn" onClick={(event) => { event.preventDefault(); addLike(photo.id) }}>I love it!</button>

          <LikesDisplay likes={photo.likes} />

        </Typography>
      </CardContent>
    </Card>
    </>
  );
}

export default GalleryItem;