import { Montserrat } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Product Cart",
  description: "Add your products in cart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ProductProvider>
          <Header />
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
