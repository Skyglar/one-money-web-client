interface ILoginProps {
    setToken: any; 
}

export const Login = ({setToken} : ILoginProps) => {
  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit" onSubmit={setToken}>Submit</button>
      </div>
    </form>
  );
};
