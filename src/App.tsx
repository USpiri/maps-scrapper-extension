import { Footer } from "./components/Footer";
import { Layout } from "./components/ui/Layout";
import { Scrapper } from "./components/Scrapper";
import { NoGoogle } from "./components/NoGoogle";
import { useValidLink } from "./hooks/useValidLink";

function App() {
  const { isValid } = useValidLink("www.google.com/maps/search");

  return (
    <Layout className="flex flex-col gap-2">
      <h1 className="text-center text-2xl">🗺️ Maps Scrapper</h1>
      {!isValid ? <NoGoogle /> : <Scrapper />}
      <Footer />
    </Layout>
  );
}

export default App;
