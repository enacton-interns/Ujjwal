type headingProps = {
  children: string;
};
export default function Heading(props: headingProps) {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
}
