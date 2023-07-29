import React from "react";
import useSWRMutation from "swr/mutation";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "./components";

const login = async (
  url: string,
  { arg }: { arg: { email: string; password: string } }
) => {
  const response = await axios.post(url, arg);
  return response.data;
};

const Login: React.FC<Record<string, never>> = () => {
  const navigate = useNavigate();

  const { trigger, error, isMutating } = useSWRMutation("/login", login);

  const hanldelSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    try {
      event.preventDefault();
      const email = event.currentTarget.email.value;
      const password = event.currentTarget.password.value;

      const data = await trigger({ email, password });

      if (data.message === "Login success") {
        navigate("/", {
          replace: true,
        });
      }
    } catch (error) {
      console.error(
        (error as AxiosError<TLoginResponse>).response?.data?.message
      );
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <LoginForm onSubmit={hanldelSubmit} />
      {isMutating && <p>Logging in...</p>}
      {error && !isMutating && <p>{error.response.data.message}</p>}
    </main>
  );
};

export default Login;
