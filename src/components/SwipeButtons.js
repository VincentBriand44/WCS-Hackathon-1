import allowImg from '../styles/img/swipe/allow.png';
import denyImg from '../styles/img/swipe/deny.png';
import profileImg from '../styles/img/swipe/profile.png';

const SwipeButtons = (props) => (
  <div className="swipeButtons">
    <button>
      <img src={denyImg} alt="deny" />
    </button>
    {props.profile && 
      <button>
        <img src={profileImg} alt="deny" />
      </button>
    }
    <button>
      <img src={allowImg} alt="deny" />
    </button>
  </div>
);

export default SwipeButtons;
