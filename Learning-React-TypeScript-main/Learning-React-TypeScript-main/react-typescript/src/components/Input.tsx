type InputProps = {
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input(props: InputProps) {
  return (
    <input type="text" onChange={props.handleChange} value={props.value} />
  );
}
