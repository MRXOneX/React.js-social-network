import classes from "./Users.module.css";
import React, {useState} from "react";
import cn from "classnames"

function Paginator({portionSize = 10, ...props}) {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            {portionNumber > 1 &&
            <button className={classes.btnPrev} onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return <span className={ cn({
                        [classes.selectedPage]: props.currentPage === page
                    }, classes.pageNumber)}
                                 key={page}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            {
                portionCount > portionNumber &&
                <button className={classes.btnNext} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}> NEXT </button>
            }
        </div>

    )
}

export default Paginator;