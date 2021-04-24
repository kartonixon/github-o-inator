import { EyeOutlined, ForkOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import React, { FunctionComponent } from "react";
import { Repository } from "../../Repository";

type RepositoryTileProps = {
  repo: Repository;
};

export const RepositoryTile: FunctionComponent<RepositoryTileProps> = ({
  repo,
}) => (
  <Card
    hoverable
    title={repo.name}
    style={{ width: 500 }}
    actions={[
      <a target="_blank" href={repo.url} rel="noreferrer">
        <Button>Visit</Button>
      </a>,
    ]}
  >
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
);
