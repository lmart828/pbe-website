import "./globals.css";

export const metadata = {
  title: "Precision Broadcast Engineering",
  description:
    "Engineering-level repair, troubleshooting, and technical support for mission-critical broadcast systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}