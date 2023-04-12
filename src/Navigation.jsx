import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px gray",
        paddingBottom: "1rem"
      }}
    >
      <Link style={{ padding: "0 10px" }} to="/home">
        Home
      </Link>
      <Link style={{ padding: "0 10px" }} to="/users">
        Users
      </Link>
    </nav>
  );
};

export default Navigation;
