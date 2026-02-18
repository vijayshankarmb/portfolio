
import ReactLenis from "lenis/react";
import Navbar from "@/components/common/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body
        className={`antialiased`}
        >
            <ReactLenis root>
              <Navbar />
              {children}
            </ReactLenis>
        </body>
      </html>
  );
}
