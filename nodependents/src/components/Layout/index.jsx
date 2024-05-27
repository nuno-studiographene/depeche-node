import "./styles.css";
import Sidebar from "../sidebar";

function Layout(props) {
    return (
      <div style={{
        display: "flex",
        minHeight: "100vh"
      }}>
        <Sidebar />
        <div style={{ padding: '40px 20px', grow: 1, width: '75%'}}>
          {props.children}
         </div>
      </div>
    );
}

export default Layout;
