import CountriesList from './components/countriesList-1';
import CountriesToolbar from './components/countriesToolbar-1';

export default function Home() {
  return (
    <main>
      <CountriesToolbar />
      <CountriesList />
    </main>
  );
}
