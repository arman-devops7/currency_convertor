import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [currency]); // Re-fetch when `currency` changes

  return data;
};

export default useCurrencyInfo;
