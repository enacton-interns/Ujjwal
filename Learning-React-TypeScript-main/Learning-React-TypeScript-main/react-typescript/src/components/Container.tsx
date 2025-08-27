export default function Container(props: ContainerProps) {
  return (
    <div style={props.style}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aspernatur
      minus id itaque quos quaerat molestias voluptas illum laudantium est.
    </div>
  );
}
type ContainerProps = {
  style: React.CSSProperties;
};
