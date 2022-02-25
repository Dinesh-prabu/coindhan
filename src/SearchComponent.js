import React, { useState } from "react";

const SearchComponent = (props) => {
  const employeeData = [
    {
      id: "btcusdt",
      name: "BTC/USDT",
      base_unit: "btc",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 5,
      price_precision: 0,
      min_price: "1",
      max_price: "100000",
      min_amount: "0.00005",
      position: 1,
      filters: []
    },
    {
      id: "btcinr",
      name: "BTC/INR",
      base_unit: "btc",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 5,
      price_precision: 0,
      min_price: "100",
      max_price: "10000000",
      min_amount: "0.00005",
      position: 2,
      filters: []
    },
    {
      id: "ethusdt",
      name: "ETH/USDT",
      base_unit: "eth",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 4,
      price_precision: 2,
      min_price: "1",
      max_price: "10000",
      min_amount: "0.001",
      position: 4,
      filters: []
    },
    {
      id: "ethinr",
      name: "ETH/INR",
      base_unit: "eth",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 4,
      price_precision: 0,
      min_price: "100",
      max_price: "10000000",
      min_amount: "0.001",
      position: 5,
      filters: []
    },
    {
      id: "ethbtc",
      name: "ETH/BTC",
      base_unit: "eth",
      quote_unit: "btc",
      state: "enabled",
      amount_precision: 4,
      price_precision: 6,
      min_price: "0.00001",
      max_price: "2",
      min_amount: "0.001",
      position: 6,
      filters: []
    },
    {
      id: "ltcusdt",
      name: "LTC/USDT",
      base_unit: "ltc",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 2,
      min_price: "30",
      max_price: "825",
      min_amount: "0.01",
      position: 7,
      filters: []
    },
    {
      id: "usdtinr",
      name: "USDT/INR",
      base_unit: "usdt",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "50",
      max_price: "100",
      min_amount: "1.5",
      position: 8,
      filters: []
    },
    {
      id: "ltcinr",
      name: "LTC/INR",
      base_unit: "ltc",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 3,
      price_precision: 2,
      min_price: "2000",
      max_price: "100000",
      min_amount: "0.01",
      position: 9,
      filters: []
    },
    {
      id: "shibinr",
      name: "SHIB/INR",
      base_unit: "shib",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 0,
      price_precision: 6,
      min_price: "0.00001",
      max_price: "0.01",
      min_amount: "50000",
      position: 10,
      filters: []
    },
    {
      id: "shibusdt",
      name: "SHIB/USDT",
      base_unit: "shib",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 0,
      price_precision: 8,
      min_price: "0.0000001",
      max_price: "0.001",
      min_amount: "50000",
      position: 11,
      filters: []
    },
    {
      id: "dogeinr",
      name: "DOGE/INR",
      base_unit: "doge",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 0,
      price_precision: 4,
      min_price: "1",
      max_price: "200",
      min_amount: "10",
      position: 12,
      filters: []
    },
    {
      id: "dogeusdt",
      name: "DOGE/USDT",
      base_unit: "doge",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 0,
      price_precision: 7,
      min_price: "0.01",
      max_price: "3",
      min_amount: "10",
      position: 13,
      filters: []
    },
    {
      id: "solinr",
      name: "SOL/INR",
      base_unit: "sol",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 3,
      price_precision: 2,
      min_price: "1200",
      max_price: "100000",
      min_amount: "0.015",
      position: 14,
      filters: []
    },
    {
      id: "solusdt",
      name: "SOL/USDT",
      base_unit: "sol",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 3,
      min_price: "20",
      max_price: "1500",
      min_amount: "0.015",
      position: 15,
      filters: []
    },
    {
      id: "adainr",
      name: "ADA/INR",
      base_unit: "ada",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 4,
      min_price: "50",
      max_price: "1000",
      min_amount: "1",
      position: 16,
      filters: []
    },
    {
      id: "adausdt",
      name: "ADA/USDT",
      base_unit: "ada",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 5,
      min_price: "0.5",
      max_price: "15",
      min_amount: "1",
      position: 17,
      filters: []
    },
    {
      id: "adabtc",
      name: "ADA/BTC",
      base_unit: "ada",
      quote_unit: "btc",
      state: "enabled",
      amount_precision: 1,
      price_precision: 8,
      min_price: "0.000003",
      max_price: "0.0005",
      min_amount: "10",
      position: 18,
      filters: []
    },
    {
      id: "ltcbtc",
      name: "LTC/BTC",
      base_unit: "ltc",
      quote_unit: "btc",
      state: "enabled",
      amount_precision: 3,
      price_precision: 6,
      min_price: "0.000726",
      max_price: "0.018155",
      min_amount: "0.01",
      position: 19,
      filters: []
    },
    {
      id: "xrpinr",
      name: "XRP/INR",
      base_unit: "xrp",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 3,
      min_price: "20",
      max_price: "400",
      min_amount: "2",
      position: 20,
      filters: []
    },
    {
      id: "xrpusdt",
      name: "XRP/USDT",
      base_unit: "xrp",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 4,
      min_price: "0.25",
      max_price: "5",
      min_amount: "4",
      position: 21,
      filters: []
    },
    {
      id: "xrpbtc",
      name: "XRP/BTC",
      base_unit: "xrp",
      quote_unit: "btc",
      state: "enabled",
      amount_precision: 1,
      price_precision: 8,
      min_price: "0.000009",
      max_price: "0.000093",
      min_amount: "8",
      position: 22,
      filters: []
    },
    {
      id: "trxinr",
      name: "TRX/INR",
      base_unit: "trx",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 0,
      price_precision: 3,
      min_price: "1",
      max_price: "40",
      min_amount: "20",
      position: 23,
      filters: []
    },
    {
      id: "trxusdt",
      name: "TRX/USDT",
      base_unit: "trx",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 0,
      price_precision: 5,
      min_price: "0.02",
      max_price: "1",
      min_amount: "40",
      position: 24,
      filters: []
    },
    {
      id: "trxbtc",
      name: "TRX/BTC",
      base_unit: "trx",
      quote_unit: "btc",
      state: "hidden",
      amount_precision: 0,
      price_precision: 8,
      min_price: "0.0000003",
      max_price: "0.000008",
      min_amount: "100",
      position: 25,
      filters: []
    },
    {
      id: "dotinr",
      name: "DOT/INR",
      base_unit: "dot",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "1000",
      max_price: "20000",
      min_amount: "0.05",
      position: 26,
      filters: []
    },
    {
      id: "dotusdt",
      name: "DOT/USDT",
      base_unit: "dot",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "10",
      max_price: "200",
      min_amount: "0.1",
      position: 27,
      filters: []
    },
    {
      id: "lunainr",
      name: "LUNA/INR",
      base_unit: "luna",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 3,
      price_precision: 0,
      min_price: "500",
      max_price: "15000",
      min_amount: "0.06",
      position: 28,
      filters: []
    },
    {
      id: "lunausdt",
      name: "LUNA/USDT",
      base_unit: "luna",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "6",
      max_price: "180",
      min_amount: "0.1",
      position: 29,
      filters: []
    },
    {
      id: "xlminr",
      name: "XLM/INR",
      base_unit: "xlm",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 3,
      min_price: "5",
      max_price: "150",
      min_amount: "6",
      position: 30,
      filters: []
    },
    {
      id: "xlmusdt",
      name: "XLM/USDT",
      base_unit: "xlm",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 4,
      min_price: "0.08",
      max_price: "2",
      min_amount: "10",
      position: 31,
      filters: []
    },
    {
      id: "bnbinr",
      name: "BNB/INR",
      base_unit: "bnb",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 3,
      price_precision: 0,
      min_price: "10000",
      max_price: "250000",
      min_amount: "0.005",
      position: 32,
      filters: []
    },
    {
      id: "bnbusdt",
      name: "BNB/USDT",
      base_unit: "bnb",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 2,
      min_price: "100",
      max_price: "3000",
      min_amount: "0.008",
      position: 33,
      filters: []
    },
    {
      id: "bnbbtc",
      name: "BNB/BTC",
      base_unit: "bnb",
      quote_unit: "btc",
      state: "enabled",
      amount_precision: 3,
      price_precision: 7,
      min_price: "0.0016",
      max_price: "0.05",
      min_amount: "0.025",
      position: 34,
      filters: []
    },
    {
      id: "busdinr",
      name: "BUSD/INR",
      base_unit: "busd",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "15",
      max_price: "400",
      min_amount: "2",
      position: 35,
      filters: []
    },
    {
      id: "busdusdt",
      name: "BUSD/USDT",
      base_unit: "busd",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 4,
      min_price: "0.2",
      max_price: "5",
      min_amount: "4",
      position: 36,
      filters: []
    },
    {
      id: "uniinr",
      name: "UNI/INR",
      base_unit: "uni",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 1,
      min_price: "500",
      max_price: "8000",
      min_amount: "0.08",
      position: 37,
      filters: []
    },
    {
      id: "uniusdt",
      name: "UNI/USDT",
      base_unit: "uni",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "6",
      max_price: "100",
      min_amount: "0.15",
      position: 38,
      filters: []
    },
    {
      id: "maticinr",
      name: "MATIC/INR",
      base_unit: "matic",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 2,
      min_price: "25",
      max_price: "600",
      min_amount: "1.5",
      position: 39,
      filters: []
    },
    {
      id: "maticusdt",
      name: "MATIC/USDT",
      base_unit: "matic",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 3,
      min_price: "0.3",
      max_price: "8",
      min_amount: "3",
      position: 40,
      filters: []
    },
    {
      id: "maticbtc",
      name: "MATIC/BTC",
      base_unit: "matic",
      quote_unit: "btc",
      state: "enabled",
      amount_precision: 1,
      price_precision: 8,
      min_price: "0.000005",
      max_price: "0.00012",
      min_amount: "8",
      position: 41,
      filters: []
    },
    {
      id: "fttinr",
      name: "FTT/INR",
      base_unit: "ftt",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 3,
      price_precision: 0,
      min_price: "800",
      max_price: "22000",
      min_amount: "0.04",
      position: 42,
      filters: []
    },
    {
      id: "fttusdt",
      name: "FTT/USDT",
      base_unit: "ftt",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 3,
      min_price: "10",
      max_price: "300",
      min_amount: "0.07",
      position: 43,
      filters: []
    },
    {
      id: "avaxinr",
      name: "AVAX/INR",
      base_unit: "avax",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "1000",
      max_price: "25000",
      min_amount: "0.02",
      position: 45,
      filters: []
    },
    {
      id: "avaxusdt",
      name: "AVAX/USDT",
      base_unit: "avax",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "10",
      max_price: "500",
      min_amount: "0.05",
      position: 46,
      filters: []
    },
    {
      id: "nearinr",
      name: "NEAR/INR",
      base_unit: "near",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "100",
      max_price: "10000",
      min_amount: "0.06",
      position: 47,
      filters: []
    },
    {
      id: "nearusdt",
      name: "NEAR/USDT",
      base_unit: "near",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "1",
      max_price: "10",
      min_amount: "0.22",
      position: 48,
      filters: []
    },
    {
      id: "linkinr",
      name: "LINK/INR",
      base_unit: "link",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "150",
      max_price: "10000",
      min_amount: "0.06",
      position: 49,
      filters: []
    },
    {
      id: "linkusdt",
      name: "LINK/USDT",
      base_unit: "link",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "2",
      max_price: "200",
      min_amount: "0.18",
      position: 50,
      filters: []
    },
    {
      id: "algoinr",
      name: "ALGO/INR",
      base_unit: "algo",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "10",
      max_price: "1000",
      min_amount: "1",
      position: 51,
      filters: []
    },
    {
      id: "algousdt",
      name: "ALGO/USDT",
      base_unit: "algo",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 3,
      min_price: "0.1",
      max_price: "10",
      min_amount: "3",
      position: 52,
      filters: []
    },
    {
      id: "atominr",
      name: "ATOM/INR",
      base_unit: "atom",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 2,
      min_price: "300",
      max_price: "30000",
      min_amount: "0.1",
      position: 53,
      filters: []
    },
    {
      id: "atomusdt",
      name: "ATOM/USDT",
      base_unit: "atom",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "4",
      max_price: "400",
      min_amount: "0.1",
      position: 54,
      filters: []
    },
    {
      id: "ftminr",
      name: "FTM/INR",
      base_unit: "ftm",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 2,
      min_price: "20",
      max_price: "2000",
      min_amount: "0.4",
      position: 55,
      filters: []
    },
    {
      id: "ftmusdt",
      name: "FTM/USDT",
      base_unit: "ftm",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 4,
      min_price: "0.2",
      max_price: "20",
      min_amount: "1.3",
      position: 56,
      filters: []
    },
    {
      id: "bchinr",
      name: "BCH/INR",
      base_unit: "bch",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 3,
      price_precision: 0,
      min_price: "2400",
      max_price: "24000",
      min_amount: "0.004",
      position: 57,
      filters: []
    },
    {
      id: "bchusdt",
      name: "BCH/USDT",
      base_unit: "bch",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 2,
      min_price: "30",
      max_price: "3000",
      min_amount: "0.01",
      position: 58,
      filters: []
    },
    {
      id: "sandinr",
      name: "SAND/INR",
      base_unit: "sand",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 0,
      price_precision: 2,
      min_price: "35",
      max_price: "3500",
      min_amount: "1",
      position: 59,
      filters: []
    },
    {
      id: "sandusdt",
      name: "SAND/USDT",
      base_unit: "sand",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 0,
      price_precision: 3,
      min_price: "0.45",
      max_price: "45",
      min_amount: "1",
      position: 60,
      filters: []
    },
    {
      id: "manausdt",
      name: "MANA/USDT",
      base_unit: "mana",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 4,
      min_price: "0.3",
      max_price: "30",
      min_amount: "1.2",
      position: 61,
      filters: []
    },
    {
      id: "manainr",
      name: "MANA/INR",
      base_unit: "mana",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 1,
      price_precision: 3,
      min_price: "25",
      max_price: "2500",
      min_amount: "0.4",
      position: 62,
      filters: []
    },
    {
      id: "galainr",
      name: "GALA/INR",
      base_unit: "gala",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 0,
      price_precision: 3,
      min_price: "3",
      max_price: "300",
      min_amount: "4",
      position: 63,
      filters: []
    },
    {
      id: "galausdt",
      name: "GALA/USDT",
      base_unit: "gala",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 1,
      price_precision: 4,
      min_price: "0.036",
      max_price: "3.6",
      min_amount: "10",
      position: 64,
      filters: []
    },
    {
      id: "sushiinr",
      name: "SUSHI/INR",
      base_unit: "sushi",
      quote_unit: "inr",
      state: "enabled",
      amount_precision: 2,
      price_precision: 2,
      min_price: "37",
      max_price: "3700",
      min_amount: "0.3",
      position: 65,
      filters: []
    },
    {
      id: "sushiusdt",
      name: "SUSHI/USDT",
      base_unit: "sushi",
      quote_unit: "usdt",
      state: "enabled",
      amount_precision: 3,
      price_precision: 3,
      min_price: "0.5",
      max_price: "50",
      min_amount: "1",
      position: 66,
      filters: []
    }
  ];

  const [searchKey, setSearchKey] = useState("");
  const employees = employeeData.filter((e) =>
    e.name.toLowerCase().match(searchKey.toLowerCase())
  );

  return (
    <div>
      <input
        className="form-control mb-2"
        placeholder="Search Markets..."
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
      />
      <table className="table-coin">
        <tbody>
          <tr>
            <th>MARKET</th>
            <th>MINIMUM ORDER SIZE</th>
            <th>MAKER FEE</th>
            <th>TAKER FEE</th>
            <th>STATUS</th>
          </tr>
          {employeeData &&
            employees.map((x) => {
              return (
                <tr>
                  <td>{x.name}</td>
                  <td>{x.min_amount}</td>
                  <td>{"0.125%"}</td>
                  <td>{"0.125%"}</td>
                  <td style={{ color: "#7ab489" }}>{x.state}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
