import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FontAwesomeScript from "./FontAwesomeScript";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Achraf's Portfolio",
  description: "Achraf Khoualdi's personal portfolio showcasing projects and skills.",
  keywords: ["portfolio", "web development", "Achraf Khoualdi"],
  authors: [{ name: "Achraf Khoualdi", url: "https://achraf-khoualdi-portfolio.vercel.app" }],
  openGraph: {
    title: "Achraf's Portfolio",
    description: "Achraf Khoualdi's personal portfolio showcasing projects and skills.",
    url: "https://achraf-khoualdi-portfolio.vercel.app/",
    siteName: "Achraf's Portfolio",
    images: [
      {
        url: "https://achraf-khoualdi-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Achraf's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achraf's Portfolio",
    description: "Achraf Khoualdi's personal portfolio showcasing projects and skills.",
    images: ["https://achraf-khoualdi-portfolio.vercel.app/og-image.jpg"],
    creator: "@_achraf_kh__",
  },
};
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#1976d2",
    },
  },
});

export function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Devicon stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <FontAwesomeScript />
      </body>
    </html>
  );
}
