const SwipeDesc = (props) => {
  return ( 
  <div className="swipedesc">
    <h3>{props.arr.name} <span>{ props.arr.dateCreate ? (-(props.arr.dateCreate) + props.arr.dateDestroy) : ( -(props.arr.born)  + props.arr.died) }</span></h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </div>
  )
};

export default SwipeDesc;
