import { NextPage } from "next";
import Image from "next/image";
import { IBrick } from "../../types";

const BricksItem: NextPage<{
    brick: IBrick;
}> = ({ brick }) => {
    return (
         <div className="bricksItem relative w-[322px] min-h-[317px] shadow-[0px_10px_54px_0px_#0873d51a] m-3 child hover:shadow-md transition ease-in-out delay-50 hover:-translate-y-1 ">
      <div className="h-[224px] w-full relative">
        <Image
          src={`/images/${brick.image}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className="absolute flex items-center justify-center flex-col bg-white rounded px-2 text-[10px] leading-3 font-medium text-dark left-3 top-3 min-w-[84px] min-h-[46px]">
        <span className="text-base leading-5 font-bold text-[#ed5d3b]">
          {brick.stat}
        </span>{" "}
        de rentabilité
      </span>
      <div className="bg-white px-4.5 py-3.5">
        <h3 className="text-sm font-semibold leading-4 text-dark mb-4">
          {brick.title}
        </h3>
        <div>
          <span className="flex justify-between text-xs font-normal leading-4 mb-1.5 text-[#ed5d3b]">
            {brick.rangeText}
            {brick.rangeText2 && <span>{brick.rangeText2}</span>}
          </span>
          <div className="w-full h-2 rounded-xl bg-[#f4f4f4]">
            <div
              className="bg-[#ed5d3b] w-16 h-2 rounded-xl"
              style={{ width: `${brick.range}%` }}
            ></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bricksItem:nth-child(4) {
          margin-right: 150px;
        }
      `}</style>
    </div>
    );
};

export default BricksItem;
