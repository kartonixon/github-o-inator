import { Button, Form, FormInstance, Input } from "antd";
import React, { FunctionComponent } from "react";
import mkGuard from "../../utils/mkGuard";

export type UsernameFormFields = {
  username: string;
};

type UsernameFormProps = {
  form: FormInstance<UsernameFormFields>;
  onFinish: (values: UsernameFormFields) => void;
  isLoading: boolean;
};

const guard = mkGuard<UsernameFormFields>();

export const UsernameForm: FunctionComponent<UsernameFormProps> = ({
  form,
  onFinish,
  isLoading,
}) => (
  <Form form={form} onFinish={onFinish}>
    <Form.Item
      name={guard("username")}
      rules={[{ required: true, message: "Username is required" }]}
    >
      <Input placeholder="GitHub Username" style={{ textAlign: "center" }} />
    </Form.Item>
    <Form.Item>
      <Button loading={isLoading} htmlType="submit">
        Fetch
      </Button>
    </Form.Item>
  </Form>
);
