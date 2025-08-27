export default function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}
type OscarProps = {
    children: React.ReactNode;
};
