import Link from "next/link";

export default function Home() {
   return (
      <>
         <h1 className="cursor-default select-none rounded bg-slate-500 p-4 text-3xl font-bold text-white">
            Home Page
         </h1>
         <Link href={"/images"} data-direction="forward">See Images</Link>
      </>
   );
}
