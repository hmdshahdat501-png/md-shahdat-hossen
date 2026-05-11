import "./globals.css";
import { Providers } from "./providers";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  title: "Md Shahdat Hossen- Portfolio",
  description: "Senior Software Engineer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="antialiased bg-white dark:bg-[#0f1113] text-primary dark:text-gray-100 transition-colors duration-300 md:cursor-none"
        suppressHydrationWarning={true}
      >
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}