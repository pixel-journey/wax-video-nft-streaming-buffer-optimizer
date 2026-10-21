import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Whole seconds of buffer',
  description: '5000 bytes at 1000 per second is 5. 2000 is stalled under a floor of 3. No video plays.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
