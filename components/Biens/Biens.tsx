import {IBiens} from "../../types";
import BiensItem from "./BiensItem";
import Filter from "./Filter/Filter";

const items: IBiens[] = [
  {
    title: "Siège social du groupe Lagardère - 92 800 Puteaux - 62 355 000€",
    image: "biens1.png",
    rendement: "11,6%",
    reverses: "3,9%",
    type: "buying",
    nbFunded: 52
  }, {
    title: "Immeuble du Parc - 34 000 Montpellier - 2 160 000€",
    image: "biens2.png",
    rendement: "12,1%",
    reverses: "6,2%",
    type: "cancel",
    score: 1240,
    nbInvestors: 987
  }, {
    title: "Immeuble Borely - 13 012 Marseille - 3 184 900€",
    image: "biens3.png",
    rendement: "10,9%",
    reverses: "4,1%",
    type: "selling",
    score: 32,
    nbInvestors: 1361
  }, {
    title: "Siège social du groupe Lagardère - 92 800 Puteaux - 62 355 000€",
    image: "biens4.png",
    rendement: "11,6%",
    reverses: "3,9%",
    type: "default",
    nbInvestors: 124
  }, {
    title: "Immeuble du Parc - 34 000 Montpellier - 2 160 000€",
    image: "biens5.png",
    rendement: "12,1%",
    reverses: "6,2%",
    type: "default",
    nbInvestors: 790
  }, {
    title: "Immeuble Borely - 13 012 Marseille - 3 184 900€",
    image: "biens6.png",
    rendement: "10,9%",
    reverses: "4,1%",
    type: "offre",
    sansCredit: true,
    nbOffre: 8
  }
];

const Biens = () => {
  return <section className="mb-16">
       <Filter />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-5">
        {items.map((biens, index) => (
          <BiensItem biens={biens} key={index} />
        ))}
      </div>
  </section>;
};

export default Biens;
