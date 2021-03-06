import React from 'react'

const MovieTabs = ({ sort_by, updateSortBy }) => {
    
    const handleClick = value => {
        return () => {
            updateSortBy(value)
        }
    }

    const getClassLink = value => {
        return `nav-link  ${sort_by === value ? "active" : ""}`
    }

    return(
        <ul className="tabs nav nav-pills">
            <li className="nav-item nav-movie">
                <div className={getClassLink('popularity.desc')} 
                    onClick={ handleClick('popularity.desc') }
                >
                    Popularity desc
                </div>
            </li>
            <li className="nav-item nav-movie">
                <div className={getClassLink('revenue.desc')}
                    onClick={ handleClick('revenue.desc')}
                >
                    Revenue desc
                </div>
            </li>
            <li className="nav-item nav-movie">
                <div className={getClassLink('vote_average.desc')}
                    onClick={ handleClick('vote_average.desc') }
                >
                    Vote averange desc
                </div>
            </li>
        </ul>
    )
}

export default MovieTabs