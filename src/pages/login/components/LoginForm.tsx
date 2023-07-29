import React from "react";

interface ILoginFormProps {
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const { onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
