import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { random } = await searchParams;
  return (
    <main>
      <Header randomPokemonID={random} />
      <SearchBar />
    </main>
  );
}