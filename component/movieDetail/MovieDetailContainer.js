import React, {Fragment} from 'react'
import MovieDetail from "./MovieDetail";
import {connect} from 'react-redux';
import {getCurrentMovie, getGenres, getRating, Reviews, getReviews, setReviews, Name, Text, setRating, ClearFields, MovieId} from '../../redux/HomeReducer'
import {withRouter} from "react-router-dom";
import Header from "../Header/Header";
import {MovieApi} from "../../api/api"


class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCurrentMovie(this.props.match.params.pk)
        this.props.getRating(this.props.match.params.pk)
        this.props.getGenres()
        //this.props.Reviews(this.props.currentMovie.reviews)
        this.props.getReviews(this.props.match.params.pk)
    }
    /*componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.getReviews !== this.props.getReviews){
            this.props.getReviews(this.props.match.params.pk)

        }
    }*/


    render() {
        return <>
            {this.props.isFetching == false ? <Fragment>
                    <Header genres={this.props.genres}
                            isFetching={this.props.isFetching}/>
                    <MovieDetail movie={this.props.movie}
                                 isFetching={this.props.isFetching}
                                 currentMovie={this.props.currentMovie}
                                 getRating={this.props.getRating}
                                 rating={this.props.rating}
                                 setReviews={this.props.setReviews}
                                 getReviews={this.props.getReviews}
                                 reviews={this.props.reviews}
                                 pk={this.props.match.params.pk}
                                 Name={this.props.Name}
                                 Text={this.props.Text}
                                 nameReviews={this.props.nameReviews}
                                 textReviews={this.props.textReviews}
                                 ClearFields={this.props.ClearFields}
                                 setRating={this.props.setRating}
                                 star={this.props.star}
                                 MovieId={this.props.MovieId}
                                 movieId={this.props.movieId}
                    />

                </Fragment>



                :<div>loading...</div>}


        </>
    }
}
let mapStateToProps = (state) => {
    return {
        movie: state.homePage.movie,
        currentMovie: state.homePage.currentMovie,
        isFetching: state.homePage.isFetching,
        genres: state.homePage.genres,
        rating: state.homePage.rating,
        reviews: state.homePage.reviews,
        nameReviews: state.homePage.name,
        textReviews: state.homePage.text,
        star: state.homePage.star,
        movieId: state.homePage.movieId
    }
}


export default withRouter( connect(mapStateToProps,
    {getCurrentMovie, MovieId, getGenres, getRating, getReviews, Reviews, setReviews,Name, Text, ClearFields, setRating})(MovieDetailContainer));