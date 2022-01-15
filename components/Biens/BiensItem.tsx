import {NextPage} from "next";
import Image from "next/image";
import {IBiens} from "../../types";

const BiensItem: NextPage < {
  biens: IBiens;
} > = ({biens}) => {
  return (<div className="rounded-xl relative bg-white hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1 ">
    <div className="relative h-39 w-full">
      <Image src={`/images/${biens.image}`} alt="bien image" layout="fill" objectFit="cover" className="rounded-t-xl"/>
    </div>
    {
      biens.score && (<span className="absolute left-2.5 top-2.5 h-8 flex justify-center items-center rounded-lg px-2 text-[15px] font-medium bg-white">
        <span className="mr-1">{biens.score}</span>
        <Image src="/icons/score.png" alt="score" width={21} height={22}/>
      </span>)
    }
    {
      biens.sansCredit && (<span className="absolute right-2.5 top-2.5 h-8 flex justify-center items-center rounded-lg px-2 text-[15px] font-medium bg-white ">
        <Image src="/icons/coins.png" alt="coins" width={21} height={22}/>{" "}
        <span className="ml-1">Sans crédit</span>
      </span>)
    }
    <div className="bg-white rounded-b-xl pt-5 sm:pt-4 pb-3.5 px-3.5">
      <h3 className="text-base sm:text-[15px] font-medium leading-5 text-center text-dark mb-8 break-words">
        {biens.title}
      </h3>
      <div className="flex justify-around">
        <div className="relative pl-2 stat">
          <span className="text-gray-400 text-[15px] sm:text-sm leading-5 sm:leading-4 flex items-center">
            <span className="mr-1">Rendement</span>
            <Image src="/icons/info.png" alt="icon info" width={12} height={12}/>
          </span>
          <span className="text-xl sm:text-[17px] font-medium leading-6 text-dark">
            {biens.rendement}
          </span>
        </div>
        <div className="relative pl-2 stat">
          <span className="text-gray-400 text-[15px] sm:text-sm leading-5 sm:leading-4 flex items-center">
            <span className="mr-1">Reversés</span>
            <Image src="/icons/info.png" alt="icon info" width={12} height={12}/>
          </span>
          <span className="text-xl sm:text-[17px] font-medium leading-6 text-dark">
            {biens.reverses}
          </span>
        </div>
      </div>
      {
        biens.type === "buying" && (<div className="flex mt-10 justify-between items-center sm:mt-5">
          <div className="text-sm leading-4 text-gray-400">
            <span className="text-primary text-[15px] font-semibold leading-[18.29px] mb-1.5 block">
              {biens.nbFunded}% financé
            </span>
            <div className="w-32.5 h-2 rounded-[20px] bg-[#f3f7fa]">
              <div className="w-[65.8px] h-2 rounded-[20px] bar" style={{
                  width: `${biens.nbFunded}%`
                }}></div>
            </div>
          </div>
          <button className="bg-primary text-white rounded-xl min-h-[40px] min-w-[138px] text-[15px] font-semibold cursor-pointer hover:shadow-md transition ease-in-out delay-50">
            Acheter
          </button>
        </div>)
      }
      {
        biens.type === "selling" && (<div className="flex mt-10 sm:mt-5 justify-between items-center">
          <span className="text-gray-400 text-sm leading-[17.07px]">
            Financé par {biens.nbInvestors} investisseurs
          </span>
          <button className="bg-[#F1F5F9] text-primary rounded-xl min-h-[40px] min-w-[138px] text-[15px] font-semibold cursor-pointer hover:shadow-md transition ease-in-out delay-50">
            Vendre
          </button>
        </div>)
      }
      {
        biens.type === "cancel" && (<div className="flex mt-10 sm:mt-5 justify-between items-center">
          <span className="text-gray-400 text-sm leading-[17.07px]">
            Financé par {biens.nbInvestors} investisseurs
          </span>
          <button className="bg-[#F1F5F9] text-primary rounded-xl min-h-[40px] min-w-[138px] text-[15px] font-semibold cursor-pointer hover:shadow-md transition ease-in-out delay-50">
            Annuler l'achat
          </button>
        </div>)
      } {" "} {
        biens.type === "default" && (<div className="flex mt-10 sm:mt-5 justify-center items-center">
          <span className="text-gray-400 text-sm leading-[17.07px]">
            Financé par {biens.nbInvestors}
            investisseurs
          </span>
        </div>)
      } {
        " "
      } {
        biens.type === "offre" && (<div className="flex mt-10 sm:mt-5 justify-center items-center">
          <span className="text-dark text-sm font-normal leading-[17.07px]">
            {biens.nbOffre} offres dispos sur la marketplace
          </span>
        </div>)
      }
      </div>
      <style>
        {`
          .stat:before {
            content: "";
            width: 1px;
            height: 46px;
            background: #98a3ab;
            border-radius: 8px;
            position: absolute;
            left: 0;
          }
          .bar {
            background: linear-gradient(
              270deg,
              #3280C2 0.17%,
              rgba(50, 128, 194, 0.3) 100%
            );
          }
        `}</style>
    </div>);
};

export default BiensItem;
