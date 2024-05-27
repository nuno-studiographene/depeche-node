import { Link } from "react-router-dom";
import imgUrl from '../../assets/images/bg_home.jpg';
import './home.css';

const Home = () => {
  return (
    <div style={{
      backgroundImage: `url("${imgUrl}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw",
      height: "100vh",
    }}>
      <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        color: "white"
      }}>
        <Link to={`/consumer`} className="landing-column">
          <div >
            Consumer
          </div>
        </Link>
        <Link to={`/signup/worker`} className="landing-column">
        <div >
          Worker<br/>Provider
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
