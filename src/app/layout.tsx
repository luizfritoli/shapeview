import { Poppins } from "next/font/google";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "ShapeView",
  description:
    "Cansado de esperar atenção do instrutor? Aprenda execuções corretas, onde e como quiser!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} selection:bg-neutral-800 bg-[#f0f0f0] selection:text-neutral-50`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
