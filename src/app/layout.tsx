import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "./context/useMenu";

const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leandro Farias | Desenvolvedor Front-End",
  description: "Meu portfólio como desenvolvedor, com projetos e soluções web.",
  openGraph: {
    title: "Leandro Farias Portfolio",
    description: 'Confira meus projetos e entre em contato!',
    url: "https://leandro-farias-portfolio-delta.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://leandro-farias-portfolio-delta.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Logo Portfolio"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${lora.className} antialiased dark scroll-smooth`}
        suppressHydrationWarning
      >
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
