import Image from 'next/image';
import '../../../stories/components/ui/countryCard.css';

export interface Flags {
  svg?: string;
  png: string;
  alt: string;
}

interface CardProps {
  /**
   * Country name
   */
  name: string;
  /**
   * Country capital name
   */
  capital: string;
  /**
   * The region/continent name
   */
  region: string;
  /**
   * population of the country
   */
  population: number;
  /**
   * country flag in .png format with alt text
   */
  flags: Flags;
}

/**
 * Card UI displaying basic country information
 */
const Card = ({
  name = 'Germany',
  capital = 'Berlin',
  region = 'Europe',
  population = 83240525,
  flags = {
    png: 'https://flagcdn.com/w320/de.png',
    alt: 'The flag of Germany is composed of three equal horizontal bands of black, red and gold.',
  },
}: CardProps) => {
  return (
    <article className="card w-64 rounded-md overflow-hidden bg-white drop-shadow-md dark:text-white dark:bg-dark-blue">
      <div className="card-image">
        <Image
          className="w-full aspect-[5/3]"
          src={flags.png}
          alt={flags.alt}
          width={320}
          height={192}
        />
      </div>
      <div className="p-6">
        <h2 className="font-extrabold">{name}</h2>
        <ul className="my-4">
          <li className="font-semibold">
            Population:{' '}
            <span className="font-light">
              {new Intl.NumberFormat('en-GB', {
                maximumSignificantDigits: 3,
              }).format(population)}
            </span>
          </li>
          <li className="font-semibold">
            Region: <span className="font-light">{region}</span>
          </li>
          <li className="font-semibold">
            Capital: <span className="font-light">{capital}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
