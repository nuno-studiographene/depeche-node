import "./styles.css";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="container">
            <div className="logo">HomeCare+</div>
            <div className="nav">
                <a href="/" className="active">Dashboard</a>
                <a href="/">Profile</a>
                <a href="/">Calendar</a>
            </div>
            <div className="nav bottom">
                <a href="/">Settings</a>
                <a href="/">Logout</a>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
