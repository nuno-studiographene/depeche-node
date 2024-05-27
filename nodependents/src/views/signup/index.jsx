import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <header>
        <h1>SIGNUP</h1>
        <Link to={`/signup/user`}>User</Link>
        <Link to={`/signup/worker`}>Worker</Link>
      </header>
    </div>
  );
};

export default Signup;
