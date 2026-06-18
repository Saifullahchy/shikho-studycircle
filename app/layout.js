import "./globals.css";
import { StudyCircleProvider } from "@/components/study-circle-provider";

export const metadata = {
  title: "StudyCircle V1",
  description: "Shikho-style mobile prototype for class-based study circles.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <StudyCircleProvider>{children}</StudyCircleProvider>
      </body>
    </html>
  );
}
