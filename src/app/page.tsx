import CountriesList from './components/CountriesList';
import CountriesToolbar from './components/CountriesToolbar';

export default function Home() {
  return (
    <main>
      <CountriesToolbar />
      <CountriesList />
    </main>
  );
}
