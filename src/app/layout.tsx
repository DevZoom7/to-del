import "./global.scss";

export default function RootLayout({
   children,
   imageModal,
}: {
   children: React.ReactNode;
   imageModal: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            {children}
            {imageModal}
         </body>
      </html>
   );
}
