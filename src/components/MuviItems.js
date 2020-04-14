import React, {Component} from 'react'


export default class MuviItems extends Component{
    constructor(){
        super()

        this.state = {
            isWillWatch: false
        }
    }

    render(){
        const {movie, removeMovie, addMovieWillWatch, removeMovieFromWillWatch} = this.props
        return(
            <>
                <li key={movie.id} className="mouvi__tems col-6 mb-4" >
                <div className="card">
                    <img
                        className="card-img-top"
                        src = {`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                        alt=""
                    />
                                    <div className="card-body" >
                    <div className="card-title" >{movie.title}</div>
                    <div className="d-flex justify-content-between align-items-center" >
                        <p className="mb-6">Rating {movie.vote_average} </p>

                        {
                            this.state.isWillWatch ?
                            <button type="button"  className="btn btn-success" onClick={ () => {
                                this.setState({
                                    isWillWatch: false
                                })
                                removeMovieFromWillWatch(movie)
                            } } >
                                Remove Will Watch
                            </button>
                            :
                            <button type="button"  className="btn btn-secondary" onClick={ () => {
                                this.setState({
                                    isWillWatch: true
                                })

                                addMovieWillWatch(movie)
                            } }>
                                Add Will Watch
                            </button>
                        }


                    </div>
                    <button type="button" className="btn btn-primary" onClick={removeMovie.bind(null,movie)}>Delete</button>

                </div>
                </div>
            
            </li>

            </>

        )
    }
}