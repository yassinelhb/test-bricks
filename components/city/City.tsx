import Link from "next/link";
import { ICity } from "../../types";
import CityItem from "./CityItem";

const items: ICity[] = [
    {
      title: "Montpellier",
      description: "Une croissance continue sur les 10 dernières années",
      image: "city1.png",
      statText: "Rendement moyen",
      statValue: "11,4%",
    },
    {
      title: "Nice",
      description: "Forte attractivité avec plus de 200 000 étudiants",
      image: "city2.png",
      statText: "Rendement moyen",
      statValue: "10,6%",
    },
    {
      title: "Montpellier",
      description: "Une croissance continue sur les 10 dernières années",
      image: "city3.png",
      statText: "Rendement moyen",
      statValue: "11,4%",
    },
  ];
const City = () => {
    return (
        <section className="pt-12.5 pb-16 sm:pt-6 sm:pb-10">
        <h2 className="text-lg sm:text-base leading-5 font-semibold text-dark flex justify-between sm:mb-3.5">
          Découvrir les villes
          <Link href="/">
            <a className="text-sm leading-[17.07px] text-dark font-normal hidden sm:flex items-center">
              Voir tout
              <svg
                width="14.45"
                height="7"
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1.5"
              >
                <path
                  d="M17.7938 3.86165C17.7936 3.86144 17.7934 3.8612 17.7931 3.86099L14.1192 0.204747C13.8439 -0.0691544 13.3987 -0.0681351 13.1248 0.207137C12.8508 0.482375 12.8519 0.927557 13.1271 1.20149L15.5938 3.65624H0.703125C0.314789 3.65624 0 3.97102 0 4.35936C0 4.74769 0.314789 5.06248 0.703125 5.06248H15.5938L13.1272 7.51722C12.8519 7.79116 12.8509 8.23634 13.1248 8.51158C13.3988 8.78689 13.844 8.78784 14.1192 8.51397L17.7932 4.85773C17.7934 4.85752 17.7936 4.85728 17.7938 4.85706C18.0692 4.58221 18.0683 4.13559 17.7938 3.86165Z"
                  fill="#0A2337"
                />
              </svg>
            </a>
          </Link>
        </h2>
        <div className="flex justify-between items-center mb-6 sm:hidden">
          <Link href="/">
            <a className="text-[15px] leading-4 flex items-center underline text-dark group">
              Voir toutes les villes
              <svg
                width="18"
                height="9"
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1.5 group-hover:translate-x-2 transition ease-in-out delay-50"
              >
                <path
                  d="M17.7938 3.86165C17.7936 3.86144 17.7934 3.8612 17.7931 3.86099L14.1192 0.204747C13.8439 -0.0691544 13.3987 -0.0681351 13.1248 0.207137C12.8508 0.482375 12.8519 0.927557 13.1271 1.20149L15.5938 3.65624H0.703125C0.314789 3.65624 0 3.97102 0 4.35936C0 4.74769 0.314789 5.06248 0.703125 5.06248H15.5938L13.1272 7.51722C12.8519 7.79116 12.8509 8.23634 13.1248 8.51158C13.3988 8.78689 13.844 8.78784 14.1192 8.51397L17.7932 4.85773C17.7934 4.85752 17.7936 4.85728 17.7938 4.85706C18.0692 4.58221 18.0683 4.13559 17.7938 3.86165Z"
                  fill="#0A2337"
                />
              </svg>
            </a>
          </Link>
          <div className="flex">
            <span className="w-10 h-10 rounded-[30px] flex justify-center items-center bg-white ml-3 cursor-pointer transition ease-in-out delay-50 hover:-translate-x-0.5">
              {" "}
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.85645 0.859375L1.71359 8.00223L8.85645 15.1451"
                  stroke="#0A2337"
                  strokeOpacity="0.2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="w-10 h-10 rounded-[30px] flex justify-center items-center bg-white ml-3 cursor-pointer transition ease-in-out delay-50 hover:translate-x-0.5">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.14355 0.859375L8.28641 8.00223L1.14355 15.1451"
                  stroke="#0A2337"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex w-fit">
            {items.map((city, index) => (
              <CityItem city={city} key={index} />
            ))}
          </div>
        </div>
      </section>
    )
}

export default City
