import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isHearted, setIsHearted] = useState(false);

  const handleClick = () => {
    setIsHearted(!isHearted);
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