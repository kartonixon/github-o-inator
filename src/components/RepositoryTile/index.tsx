import { EyeOutlined, ForkOutlined, StarOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import React, { FunctionComponent } from "react";
import { Repository } from "../../Repository";
import styles from "./styles.module.scss";

type RepositoryTileProps = {
  repo: Repository;
};

export const RepositoryTile: FunctionComponent<RepositoryTileProps> = ({
  repo,
}) => (
  <div className={styles.wrapper}>
    <Card size="small" hoverable title={repo.name} style={{ maxWidth: 300 }}>
      <Space>
        <div>
          <EyeOutlined /> {repo.watchers}
        </div>
        <div>
          <StarOutlined /> {repo.stars}
        </div>
        <div>
          <ForkOutlined /> {repo.forks}
        </div>
      </Space>
    </Card>
  </div>
);
