import { Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import { FunctionComponent, useState } from "react";
import { fetchRepositories, Repository } from "../../Repository";
import { RepositoryTile } from "../RepositoryTile";
import { UsernameForm, UsernameFormFields } from "../UsernameForm";
import styles from "./styles.module.scss";

const { Title } = Typography;

export const GitHuboInator: FunctionComponent = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useForm();

  const onFormFinish = async (values: UsernameFormFields) => {
    setIsLoading(true);
    const repos = await fetchRepositories(values.username);
    setRepositories(repos);
    setIsLoading(false);
  };

  return (
    <div>
      <Title>Fetch Repositories</Title>

      <div className={styles.formWrapper}>
        <UsernameForm
          isLoading={isLoading}
          form={form}
          onFinish={onFormFinish}
        />
      </div>

      {repositories.length > 0 ? (
        repositories
          .sort((a, b) => b.stars - a.stars)
          .map((repo, idx) => (
            <div key={idx} className={styles.tile}>
              <RepositoryTile repo={repo} />
            </div>
          ))
      ) : (
        <p>Empty :(</p>
      )}
    </div>
  );
};
