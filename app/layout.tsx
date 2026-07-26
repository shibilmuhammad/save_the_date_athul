import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Save the Date — Athul & Sreelakshmi | 13 September 2026",
  description:
    "Join us as we celebrate the wedding of R Athul Krishna & Sreelakshmi Nair. Save the Date — 13 September 2026 at Rubco Auditorium, Kannur.",
  keywords: [
    "Hindu wedding",
    "Save the date",
    "Athul Krishna",
    "Sreelakshmi Nair",
    "Kerala wedding",
    "Indian wedding invitation",
    "September 2026 wedding",
  ],
  openGraph: {
    title: "Save the Date — Athul & Sreelakshmi",
    description:
      "Together with our families, we warmly invite you to celebrate our wedding on 13 September 2026.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Athul & Sreelakshmi Save the Date",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save the Date — Athul & Sreelakshmi",
    description:
      "Together with our families, we warmly invite you to celebrate our wedding on 13 September 2026.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <body className="bg-ivory text-text-dark antialiased">{children}</body>
    </html>
  );
}
