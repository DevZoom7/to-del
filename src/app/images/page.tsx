import Image from "next/image";
import images from "@p/dark_images";
import Link from "next/link";

export default function Pictures() {
   return (
      <div className="flex gap-4 flex-wrap justify-center">
         {images.map((img, ind) => (
            <Link href={`/images/${ind + 1}`} key={ind} className="h-fit">
               <Image src={img} alt="img" width={300} style={{maxHeight: 400}} />
            </Link>
         ))}
      </div>
   );
}
