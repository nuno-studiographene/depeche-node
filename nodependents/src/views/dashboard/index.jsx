import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
        <Link to={`/signup`}>Signupx</Link>
      </header>
    </div>
  );
};

export default Dashboard;
