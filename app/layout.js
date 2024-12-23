import { EB_Garamond } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ναταλία Παπουλάκη",
  description: "Ναταλία Παπουλάκη - Κλινική Ψυχολόγος",
};

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${serif.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
