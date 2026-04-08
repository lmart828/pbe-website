import "./globals.css";

export const metadata = {
  title: "Precision Broadcast Engineering",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}