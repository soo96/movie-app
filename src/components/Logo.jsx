import { Link } from "react-router-dom";
import styles from "../css/components/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <Link className={styles.logo} to={"/"}>
        Movie
      </Link>
    </div>
  );
};

export default Logo;
