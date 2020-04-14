import React from 'react'



const MoviePages = ( {page, updatePage, pages} ) => {

   

    return (
      <>
        <div className="movie-pages">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (page > 1) {
                page--;
              }
              updatePage(page);
            }}
          >
            Prev
          </button>
          <div className="movie-page" >
            <div className="movie-page_number" >{page}</div>
            <div>...</div>
            <div>{pages}</div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              if (page < pages) page++;
              updatePage(page);
            }}
          >
            Next
          </button>
        </div>
      </>
    );
}


export default MoviePages