// server component
// import Link from "next/link";
// import "/src/app/global.css";
// type Props = {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// };
// export default async function NewsArticle({ params, searchParams }: Props) {
//   const { articleId } = await params;
//   const { lang = "en" } = await searchParams;

//   return (
//     <div className="">
//       <h1>News Article {articleId}</h1>
//       <p>Reading in {lang}</p>
//       <div className="flex flex-col gap-2 ">
//         <Link href={`/articles/${articleId}?lang=${lang}`}>English</Link>
//         <Link href={`/articles/${articleId}?lang=${lang}`}>Spanish</Link>
//         <Link href={`/articles/${articleId}?lang=${lang}`}>French</Link>
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import "/src/app/global.css";
import { use } from "react";
type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};
export default function NewsArticle({ params, searchParams }: Props) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div className="">
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div className="flex flex-col gap-2 ">
        <Link href={`/articles/${articleId}?lang=${lang}`}>English</Link>
        <Link href={`/articles/${articleId}?lang=${lang}`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=${lang}`}>French</Link>
      </div>
    </div>
  );
}


// use is used in client component