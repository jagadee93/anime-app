
import { useContext } from "react"
import { watchListContext } from "../contextApi/contextProvider"
const UseWatchList = () => {
  const context = useContext(watchListContext);
  if (!context) {
    throw new Error("useWatchlist must be used with watchlist provider ")
  }
  return context

}

export default UseWatchList