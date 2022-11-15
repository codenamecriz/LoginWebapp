import React, { FC } from "react";
import styles from "../../../styles/Layout.module.css";
import NavBar from "../layout/NavBar";

interface ILayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;
