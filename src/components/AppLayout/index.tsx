import { Layout } from "antd";
import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

const { Header, Content } = Layout;

export const AppLayout: FunctionComponent = ({ children }) => (
  <Layout>
    <Header className={styles.header}>GitHuboInator</Header>
    <Content className={styles.content}>{children}</Content>
  </Layout>
);
