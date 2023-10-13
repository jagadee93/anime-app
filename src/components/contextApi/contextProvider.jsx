
import React, { createContext, useState, useEffect } from 'react'
export const watchListContext = createContext({
    watchList: [],
    addItem: () => { },
    removeItem: () => { },

});


const WatchListProvider = ({ children }) => {

    const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem("watchList")) || [])

    function checkDuplicate_objet(data) {
        let duplicate = false;
        watchList.forEach((item) => {
            if (item.id === data.id) {
                duplicate = true;
                return;
            }
        });
        return duplicate;
    }

    const addItem = (data) => {
        if (!checkDuplicate_objet(data)) {
            setWatchList([...watchList, data])
            return "added to watch list "
        }
        else {
            return "already added to watch list"
        }

    }

    const removeItem = (id) => {
        setWatchList(watchList.filter((item) => item.id !== id))
        return "Removed from watchlist"
    }

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(watchList))
    }, [watchList])


    const value = {
        watchList,
        addItem,
        removeItem,
    }
    return (
        <watchListContext.Provider value={value}>


            {children}
        </watchListContext.Provider>
    )
}

export default WatchListProvider

