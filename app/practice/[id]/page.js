import { PracticeScreen } from "@/components/screens/practice-screen";

export default async function Page({ params }) {
  const { id } = await params;
  return <PracticeScreen circleId={id} />;
}
