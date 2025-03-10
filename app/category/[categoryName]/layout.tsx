export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  console.log("category from  cat layout", category);
  return children;
}
