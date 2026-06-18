import "./globals.css";
import { StudyCircleProvider } from "@/components/study-circle-provider";

export const metadata = {
  title: "StudyCircle V1",
  description: "Shikho-style mobile prototype for class-based study circles."
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
