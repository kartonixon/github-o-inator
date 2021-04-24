import { FunctionComponent } from "react";
import { AppLayout } from "./components/AppLayout";
import { GitHuboInator } from "./components/GitHuboInator";

export const App: FunctionComponent = () => {
  return (
    <AppLayout>
      <GitHuboInator />
    </AppLayout>
  );
};
