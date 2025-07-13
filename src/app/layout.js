import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StratSync - AI-Powered Revenue Retention Copilot",
  description:
    "Agentic AI that empowers CS teams to detect risks early, retain more revenue, and drive better customer outcomes in complex B2B operations.",
   icons: {
    icon: "/fav.png",       
    shortcut: "/fav.png",   
    apple: "/fav.png"      
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
