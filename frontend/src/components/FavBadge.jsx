import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon
        selected={props.isThereAFavourite}
        displayAlert={props.isThereAFavourite}
      />
    </div>
  );
};

export default FavBadge;