import { CircleDetailScreen } from "@/components/screens/circle-detail-screen";

export default async function Page({ params }) {
  const { id } = await params;
  return <CircleDetailScreen circleId={id} />;
}
