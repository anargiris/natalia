import { Didact_Gothic } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ναταλία Παπουλάκη",
  description: "Ναταλία Παπουλάκη - Κλινική Ψυχολόγος",
};

const mont = Didact_Gothic({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mont.variable}  antialiased font-mont`}>
        {children}
      </body>
    </html>
  );
}
