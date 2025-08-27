import Login from "./Login";
import type { ProfileProps } from "./Profile";
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name={"Ujjwal"} />;
  } else return <Login />;
}
