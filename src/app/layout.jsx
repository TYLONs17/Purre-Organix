import { Inter } from "next/font/google"
import "./globals.css"
import "../components/shop/CategoriesListings.css"

import Navigation from "../components/navigation"
import Footer from "../components/layout/footer"
import { ThemeProvider } from "../context/ThemeContext"
import { ShoppingProvider } from "../context/ShoppingContext"
import CartSlideIn from "../components/shop/CartSlideIn"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >

          <ShoppingProvider>

            <Navigation />


            <main className={`bg-gradient-radial from-green-800 to-green-100 dark:from-green-400 dark:to-black dark:text-green-200 text-green-950`}>
              <CartSlideIn />
              {children}
            </main>

          </ShoppingProvider>
            
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}
