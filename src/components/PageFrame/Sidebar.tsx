const first_sidebar_data = [
  { id: 1, side_name: "업비트" },
  { id: 2, side_name: "코인원" },
  { id: 3, side_name: "코빗" },
  { id: 4, side_name: "고팍스" },
];

const second_side_bar_data = [
  { id: 1, side_name: "Binance" },
  { id: 2, side_name: "CoinBase" },
  { id: 3, side_name: "Bitfinex" },
  { id: 4, side_name: "Bitstamp" },
];

const Sidebar = () => {
  return (
    <div>
      <div className="flex-col m-8 ">
        {first_sidebar_data.map((item) => (
          <div
            className="shadow-xl m-4 ml-0 px-10 py-3 text-xl border-4 rounded-2xl"
            key={item.id}
          >
            {item.side_name}
          </div>
        ))}
      </div>
      <div className="flex-col m-8">
        {second_side_bar_data.map((item) => (
          <div
            className="shadow-xl m-4 ml-0 px-10 py-3 text-xl border-4 rounded-2xl"
            key={item.id}
          >
            {item.side_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
