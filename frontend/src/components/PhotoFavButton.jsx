import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [isHearted, setIsHearted] = useState(false);

  const addToFav = props.addFavourite;

  const handleClick = () => {

    //async setting of new value of isHearted
    setIsHearted(!isHearted);
    if (isHearted) {

      //remove the like, when isHearted is ABOUT
      //to turn false.
      addToFav(props.photoId, false);
      return;
    }

    //add the like, when isHearted is ABOUT to turn true
    addToFav(props.photoId, true);
  };

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon displayAlert={false} selected={isHearted} />
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;