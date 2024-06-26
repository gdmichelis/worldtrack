import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldTrack Inc.
        </p>
      </footer>
    </div>
  );
}
