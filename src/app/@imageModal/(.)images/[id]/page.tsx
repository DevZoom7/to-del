"use client";

import { useRouter } from "next/navigation";
import images from "@p/dark_images";
import styles from "./styles.module.scss";
import Image from "next/image";
import { MouseEvent } from "react";
import dot from "@/utils/functions/dot";

export default function ImageModal({ params: { id } }: { params: { id: string } }) {
   const router = useRouter();
   function closeModal(e: MouseEvent) {
      if ((e.target as HTMLElement).matches(dot(styles.modal))) router.back();
   }
   return (
      <section className={styles.modal} onClick={closeModal}>
         <div className={styles.modalContent}>
            <div className={styles.header}>
               <button className={styles.moreDetailsBtn} onClick={() => window.location.reload()}>More Details</button>
               <h2 className={styles.title}>Image</h2>
               <button className={styles.closeBtn} onClick={router.back}>&times;</button>
            </div>
            <Image src={images[+id - 1]} alt="img" width={600} />
         </div>
      </section>
   );
}
