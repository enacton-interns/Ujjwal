import { useState } from "react";
type UseStateProps = {
  logValue: boolean;
};

export default function TSUseState() {
  const [log, setLog] = useState<UseStateProps>({ logValue: false });
  const handleLogin = () => {
    setLog({ logValue: true });
  };
  const handleLogout = () => {
    setLog({ logValue: false });
  };
  return (
    <div>
      <button onClick={handleLogin}> Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p> {log.logValue ? "Logged In" : "Logged Out"}</p>
    </div>
  );
}
