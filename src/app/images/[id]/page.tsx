import images from "@p/dark_images";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ImagePage({ params: { id } }: { params: { id: string } }) {
   const numRegex = /^\d+$/;
   if (!numRegex.test(id) || +id < 1 || +id > images.length) {
      notFound();
   }
   return (
      <div className="flex flex-col gap-y-4 items-center">
         <Image src={images[+id - 1]} alt="img" height={400} />
         <p className="text-center text-blue-500 text-2xl">Some useless information to make a difference...</p>
         <Link href={'/images'} data-direction="backward">See Images</Link>
         <Link href={'/'} data-direction="backward">Go Home</Link>
      </div>
   );
}
