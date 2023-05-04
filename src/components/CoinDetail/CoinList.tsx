import { HomePageCoin } from "../../Types";

import { Link } from "react-router-dom";

import { useState } from "react";
const CoinList = ({ data, idx }: { data: HomePageCoin; idx: number }) => {
  const [isHandle, setIsHandled] = useState(false);

  const mouseOver = () => {
    setIsHandled(true);
  };
  const mouseLeave = () => {
    setIsHandled(false);
  };

  const divStlye = {
    backgroundColor: isHandle ? "red" : "white",
  };

  return (
    <div className="flex justify-start">
      <div>
        <input className="m-2" type="button" value="▶" />
      </div>

      <Link to={`/CoinDetail?id=${idx}`}>
        <div
          className="flex justify-start"
          key={data.id}
          style={divStlye}
          onMouseOver={mouseOver}
          onMouseOut={mouseLeave}
        >
          {/* <div className='flex justify-start' key={data.id} onMouseOver ={selectElement(this)} > */}
          <div className="m-3 ml-9 ml-8 pl-0 text-xs w-10 ">{data.symbol}</div>
          <div className="m-3 ml-2 pl-12 text-xs w-10">{data.name}</div>
          <div className="m-3 ml-20 mr-4 pl-5 text-xs w-20 ">
            {Math.round(data.quotes.KRW.price * 100) / 100}{" "}
          </div>
          <div className="m-3 ml-10 mr-14 text-xs w-20 ">{`${Math.floor(
            data.quotes.KRW.market_cap / 10000
          )} 만원`}</div>
          <div className="m-3 text-xs mr-14 w-8 ">{`${Math.floor(
            data.quotes.KRW.percent_change_1h * 100
          )}%`}</div>
          <div className="m-3 text-xs ">
            {" "}
            {data.quotes.KRW.percent_change_6h}{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinList;
