import { NextPage } from "next"
import Image from "next/image"
import { ICity } from "../../types"

const CityItem: NextPage<{ city: ICity }> = ({ city }) => {
    return (
        <div className="flex w-102.5 sm:w-71.5 h-41.5 sm:h-32.5 mr-5 sm:mr-3 last:mr-0  hover:shadow-md transition ease-in-out delay-50 hover:-translate-x-0.5 rounded-xl">
        <div className="relative w-37.5 sm:w-24 h-41.5 sm:h-32.5">
          <Image
            src={`/images/${city.image}`}
            alt="image city"
            layout="fill"
            className="rounded-l-xl w-37.5 sm:w-24 h-41.5 sm:h-32.5 object-cover"
          />
        </div>
        <div className="bg-white rounded-r-xl p-5 sm:p-[15px] flex-1">
          <h3 className="text-base sm:text-[15px] font-semibold leading-5 mb-1 sm:mb-0.5 text-dark">
            {city.title}
          </h3>
          <p className="text-sm sm:text-[13px] leading-4 text-dark mb-5 sm:mb-3 description">
            {city.description}
          </p>
          <div>
            <span className="text-gray-400 text-sm sm:text-[13px] font-normal leading-4 mb-1.5 sm:mb-0.5 block">
              {city.statText}
            </span>
            <span className="text-lg sm:text-[15px] font-medium leading-5 text-dark">
              {city.statValue}
            </span>
          </div>
        </div>
        <style jsx>{`
          .description {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
          }
        `}</style>
      </div>
    )
}

export default CityItem
