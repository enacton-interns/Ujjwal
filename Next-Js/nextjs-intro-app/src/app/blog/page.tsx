import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
export default async function blog() {
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Intensional delay");
  //   }, 2000);
  // });
  // await promise;
  await new Promise((res) => setTimeout(res, 2000));
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}
