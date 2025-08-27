type statusCode = {
  status: "loading" | "error" | "success";
};
export default function Status(props: statusCode) {
  let message;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "error") {
    message = "error";
  } else if (props.status === "success") {
    message = "Successfull";
  }
  return (
    <div>
      <p>Status -{message}</p>
    </div>
  );
}
