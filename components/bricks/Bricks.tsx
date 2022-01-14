import {IBrick} from "../../types";
import BricksItem from "./BricksItem";

const items: IBrick[] = [
  {
    image: "image1.png",
    title: "Immeuble - Pont-Audemer",
    stat: "11,2",
    range: 100,
    rangeText: "Financé à 100% par 2549 investisseurs"
  }, {
    image: "image2.png",
    title: "Immeuble - Castelnaudary",
    stat: "11,9",
    range: 100,
    rangeText: "Financé à 100% par 1325 investisseurs"
  }, {
    image: "image3.png",
    title: "Immeuble - Clermont l’Hérault",
    stat: "11,9",
    range: 44,
    rangeText: "Financé à 44%",
    rangeText2: "5500 bricks restantes"
  }, {
    image: "image4.png",
    title: "Immeuble - Montpellier",
    stat: "13,3",
    range: 100,
    rangeText: "Financé à 100% par 523 investisseurs"
  }, {
    image: "image5.png",
    title: "Immeuble - Montpellier",
    stat: "11,5",
    range: 100,
    rangeText: "Financé à 100% par 958 investisseurs"
  }, {
    image: "image6.png",
    title: "Immeuble - Pézenas",
    stat: "15,6",
    range: 100,
    rangeText: "Financé à 100% par 301 investisseurs"
  }
];

const Bricks = () => {
  return (<section className="flex justify-end">
    <div className="translate-x-[242px] translate-y-[-130px]">
      <div className="flex justify-end flex-wrap w-[830px] ">
        {items.map((brick, index) => (<BricksItem brick={brick} key={index}/>))}
      </div>
    </div>
  </section>);
};

export default Bricks;
