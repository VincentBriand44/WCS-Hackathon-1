
import HomeButtons from '../components/HomeButtons'
import Header from '../components/Header'

const Home = () => {
  let bg ="https://i.pinimg.com/originals/22/55/f6/2255f66a71845dd6040a7c254ea0b7fb.jpg";
  return (
    <div className="home" style={{ backgroundImage:`url(${bg})` }}>
      <Header/>
      <HomeButtons />
    </div>
  );
};

export default Home;
