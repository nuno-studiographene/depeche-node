import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Home</h1>
        <Link to={`/signup`}>Signup user</Link>
        <Link to={`/signup/worker`}>Signup worker</Link>
      </header>
    </div>
  );
};

export default Home;
