import Link from "next/link";

export default function Home() {
   return (
      <>
         <p>Welcom to web</p>
         <Link href="/product-category">
            <a>All category</a>
         </Link>
      </>
   );
}
