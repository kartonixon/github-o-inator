import { message } from "antd";

export type Repository = {
  name: string;
  stars: number;
  forks: number;
  watchers: number;
  url: string;
};

type RepositoryResponse = {
  name: string;
  stargazers_count: string;
  forks_count: string;
  watchers_count: string;
  html_url: string;
};

export const fetchRepositories = async (
  username: string
): Promise<Repository[]> => {
  const url = `https://api.github.com/users/${username}/repos`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (response.status !== 200) {
    if (response.status === 404) {
      message.error("User not found");
    } else {
      message.error("Error while fetching data");
    }

    return [];
  }

  const result = (await response.json()) as RepositoryResponse[];

  message.success("Data fetched!");

  if (result.length === 0) return [];

  const repos: Repository[] = result.map((r) => ({
    name: r.name,
    forks: parseInt(r.forks_count),
    stars: parseInt(r.stargazers_count),
    watchers: parseInt(r.watchers_count),
    url: r.html_url,
  }));

  return repos;
};
