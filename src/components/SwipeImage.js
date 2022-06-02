import { useState, useEffect } from 'react';
import SwipeButtons from '../components/SwipeButtons';
import SwipeDesc from '../components/SwipeDesc';

const SwipeImage = (props) => {
  let bg ="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

  return (
    <div className="swipeImage" style={{ backgroundImage:`url(${bg})` }}>
      <SwipeDesc />
      <SwipeButtons profile={props.profile} />
    </div>
  );
};

export default SwipeImage;
