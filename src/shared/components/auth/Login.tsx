interface ILoginProps {
    setToken: any; 
}

export const Login = ({setToken} : ILoginProps) => {
  return (
    <form method="post" onSubmit={setToken}>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
