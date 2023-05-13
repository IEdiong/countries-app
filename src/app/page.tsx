import CountriesList from './components/countriesList';
import CountriesToolbar from './components/countriesToolbar';

export default function Home() {
  return (
    <main>
      <CountriesToolbar />
      <CountriesList />
    </main>
  );
}
