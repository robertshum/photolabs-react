import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon">
      <div onClick={() => props.toggleFavourite()}>
        <div className="photo-list__fav-icon-svg">
          {/* always false based on current design specs */}
          <FavIcon displayAlert={false} selected={props.selected} />
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;