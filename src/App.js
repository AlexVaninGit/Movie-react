import React, {Component} from 'react';
import MuviItems from './components/MuviItems';
import muviesData from './muviesData'
import { API_URL, API_KEY_3 } from './utils/api';
import MovieTabs from './components/MovieTabs';
import MoviePages from './components/MoviePages';
import HeaderMovie from './components/HeaderMovie';
import FooterMovie from './components/FooterMovie';


class App extends Component {

  constructor(){
    super()

    this.state = {
      muvies: muviesData,
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
      page: 1,
      pages: null
    }
  }


  componentDidMount(){
    this.getMovies()
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page){
      console.log('call api')
      this.getMovies()
    }

  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
    .then(response => {
      return response.json()
    }).then(data => {
      this.setState({
        muvies: data.results,
        pages: data.total_pages
      })
    })
  }

  removeMovie = movie => {
    const updateMuvies = this.state.muvies.filter( item => {
      return item.id !== movie.id
    } )
    this.setState({
      muvies: updateMuvies
    })
  }

  removeMovieFromWillWatch = movie => {
    const updateMuviesWillWatch = this.state.moviesWillWatch.filter( item => {
      return item.id !== movie.id
    } )
    this.setState({
      moviesWillWatch: updateMuviesWillWatch
    })
  }

  addMovieWillWatch = movie => {
    const updateMuviesWillWatch = [...this.state.moviesWillWatch]
    updateMuviesWillWatch.push(movie)
    this.setState({
      moviesWillWatch: updateMuviesWillWatch
    })
  }

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }

  updatePage = value => {
    this.setState({
      page: value
    })
  }

  render(){
    return (
      <div className="App">
        <HeaderMovie/>
        <div className="container">
        <div className="row mb-4">
                <div className="col-12">
                  <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy}/>
                </div>
              </div>
        </div>
        <div className="container">

          <div className="row">
            <div className="col-9">

              <ul className="mouvi">
                <div className="row"  >

                  {
                    this.state.muvies.map( item => {
                      return(
                          <MuviItems movie={item} removeMovie={this.removeMovie} addMovieWillWatch={this.addMovieWillWatch} removeMovieFromWillWatch={this.removeMovieFromWillWatch} />
                      )
                    } )
                  }
                
                
              </div>
              </ul>
            </div>
            
            <div className="col-3" >
              Will Watch {this.state.moviesWillWatch.length}
              <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
            </div>
            <MoviePages page={this.state.page}  updatePage={this.updatePage} pages = {this.state.pages} />
          </div>  
        </div>
        <FooterMovie/>
      </div>
    );
  }

}

export default App;
