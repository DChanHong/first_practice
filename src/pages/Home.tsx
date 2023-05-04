// Object들
import { useEffect } from "react";
import { HomePageCoin } from "../Types";
//components
import Header from "../components/PageFrame/Header";
import Sidebar from "../components/PageFrame/Sidebar";
import CoinList from "../components/CoinDetail/CoinList";

import { useNavigate } from "react-router-dom";
import { clearCoins, getHomePageCoins } from "../store3/Slice/coinSlice";
import { useAppDispatch, useAppSelctor } from "../store3/hooks";

function Home() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  let coins = useAppSelctor((state) => state.coinApp.coins);

  //
  // let coins =useSelector((state:RootState) => state.coinApp.coins)

  useEffect(() => {
    return () => {
      dispatch(clearCoins());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageCoins());
  }, [dispatch]);

  const coin = coins.slice(0, 30); // 배열 짜르기

  const title = ["기호", "코인이름", "현재가격", "마켓수요", "1hR", "6hR"];

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="flex justify-start">
        <div>
          <Sidebar />
        </div>
        <div className="border-gray border-4 my-8 rounded-2xl">
          <div className="ml-2 py-5 pl-5 pr-5 pb-0  flex justify-start">
            {title.map((items) => (
              <div className="m-3 ml-4 pr-10 mb-0 text-xl ">{items}</div>
            ))}
          </div>
          <div>
            {coin.map((item: HomePageCoin, idx: number) => {
              return <CoinList data={item} idx={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
