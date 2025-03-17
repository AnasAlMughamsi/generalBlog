import { Roboto } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/Providers/ThemeProvider";
import { AuthProvider } from "@/Providers/AuthProvider";

const inter = Roboto({ 
  weight: ["100", "400", "500", "700", "900"],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: "Nasibah's Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper"> 
                  <Navbar/>
                  {children} 
                  <Footer/>
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
