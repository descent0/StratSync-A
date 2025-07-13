import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StratSync - AI-Powered Revenue Retention Copilot",
  description:
    "Agentic AI that empowers CS teams to detect risks early, retain more revenue, and drive better customer outcomes in complex B2B operations.",
     keywords: [
    "StratSync",
    "AI for Customer Success",
    "Revenue Retention",
    "B2B SaaS Retention",
    "Customer Churn Prevention",
    "Customer Success Copilot",
    "Agentic AI",
    "CS Automation Tools",
    "Predictive Analytics for CS",
  ],
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
