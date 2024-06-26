import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ children, onClick, type }) {
  Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
  };
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
