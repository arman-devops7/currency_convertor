import { useEffect, useState } from "react";

// custom hook
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({})
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => err)
  }, [currency]) // agar currncy m chng ho toh call krvao

  return data
}

export default useCurrencyInfo