import { useState, useEffect } from "react";
import { countryList } from "../../assets/assets";
export default function CurrencyConverter() {
  const BASE_URL = "https://open.er-api.com/v6/latest";

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(5000);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch exchange rates when currencies or amount changes
  useEffect(() => {
    const updateExchangeRate = async () => {
      if (amount < 1) {
        setAmount(1);
      }

      try {
        setIsLoading(true);
        const URL = `${BASE_URL}/${fromCurrency}`;
        const response = await fetch(URL);
        const data = await response.json();

        if (data && data.rates) {
          const fromRate = data.rates[fromCurrency];
          const toRate = data.rates[toCurrency];
          const calculatedAmount = ((amount * toRate) / fromRate).toFixed(2);

          setExchangeRate(toRate / fromRate);
          setConvertedAmount(calculatedAmount);
        } else {
          setError("Error retrieving exchange rates.");
        }
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
        console.log("There is an issue fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    updateExchangeRate();
  }, [fromCurrency, toCurrency, amount]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || "";
    setAmount(value);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getFlag = (currencyCode) => {
    const countryCode = countryList[currencyCode] || "";
    return `https://flagsapi.com/${countryCode}/flat/64.png`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-xl font-semibold mb-6">Money Exchange</h1>

        <div className="flex justify-between mb-6">
          <div className="w-1/2 pr-2" id="from">
            <div className="flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4">
              <img
                src={getFlag(fromCurrency)}
                alt={fromCurrency}
                className="w-12 h-12 mb-2 rounded"
              />
              <div className="font-medium">{fromCurrency}</div>
              <div className="text-xs text-gray-400 mt-1">
                {Object.keys(countryList).includes(fromCurrency)
                  ? "Currency"
                  : "Unknown"}
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-2" id="To">
            <div className="flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4">
              <img
                src={getFlag(toCurrency)}
                alt={toCurrency}
                className="w-12 h-12 mb-2 rounded"
              />
              <div className="font-medium">{toCurrency}</div>
              <div className="text-xs text-gray-400 mt-1">
                {Object.keys(countryList).includes(toCurrency)
                  ? "Currency"
                  : "Unknown"}
              </div>
            </div>
          </div>
        </div>

        <form>
          <div className="flex justify-between mb-6">
            <div className="w-1/2 pr-2" id="amountcontainer">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-gray-700 text-white text-xl py-2 px-3 rounded outline-none"
                min="1"
              />
            </div>

            <div className="w-1/2 pl-2">
              <div className="w-full bg-gray-700 text-white text-xl py-2 px-3 rounded">
                {isLoading ? (
                  <div className="flex justify-center">
                    <div className="animate-pulse">Loading...</div>
                  </div>
                ) : (
                  <>{convertedAmount}</>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSwap}
            className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg mb-4"
          >
            Swap Currencies
          </button>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              // Already updated via useEffect, but could add additional functionality here
            }}
          >
            Exchange
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-gray-400" id="message">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 selectmenu">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">
              From Currency
            </label>
            <select
              name="fromdd"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full bg-gray-700 rounded p-2 outline-none"
            >
              {Object.keys(countryList).map((code) => (
                <option key={`from-${code}`} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400 mb-1 block">
              To Currency
            </label>
            <select
              name="Todd"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full bg-gray-700 rounded p-2 outline-none"
            >
              {Object.keys(countryList).map((code) => (
                <option key={`to-${code}`} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-2 bg-red-900 text-white rounded text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
