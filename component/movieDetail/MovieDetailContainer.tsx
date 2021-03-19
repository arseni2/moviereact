import React, {Fragment} from 'react'
import MovieDetail, {reviewsType} from "./MovieDetail";
import {connect} from 'react-redux';
import {
    getCurrentMovie,
    getGenres,
    getRating,
    Reviews,
    getReviews,
    setReviews,
    Name,
    Text,
    setRating,
    ReviewsText,
    MovieId,
    movieType, currentMovieType, NameType, TextType, NAME
} from '../../redux/HomeReducer'
import {RouteComponentProps, withRouter} from "react-router-dom";
import { AppStateType } from '../../redux/redux';
import HeaderContainer from "../Header/HeaderContainer";

type PathParamsType = {
    pk: string
}
type mapDispatchToProps = {
    getCurrentMovie: (pk: number) => Promise<void>
    getGenres: ()=>void
    getRating: (pk: number) => Promise<void>
    getReviews: (pk:number)=>void
    setReviews: (text:string, pk:number | string)=>void
    setRating: (star: number, movie: number) => Promise<void>
    Name: (name:string)=>void
    Text: (text: string) => void
    movie: Array<movieType>
    ReviewsText: (text: string) => void
}

type MapPropsType = ReturnType<typeof mapStateToProps>

/*type PropsType = {
    getCurrentMovie: (pk:number | string)=>void
    getGenres: ()=>void
    getRating: (pk:number | string)=>void
    getReviews: (pk:number | string)=>void
    setReviews: (text:string, pk:number | string, name:string)=>void
    setRating: (ratingValue: number, movieId:number | string)=>void
    match: any
    isFetching: boolean
    genres:any
    movie: movieType
    currentMovie: currentMovieType
    rating: any
    reviews: Array<reviewsType>
    Name:string
    Text:string
    star:string | number
    MovieId:number
    movieId:number
    isAuthorized:boolean
    userId:string | number
}*/

type PropsType = MapPropsType & mapDispatchToProps & RouteComponentProps<PathParamsType>;
class MovieDetailContainer extends React.Component<PropsType> {
    constructor(props:PropsType) {
        super(props);

    }
    componentDidMount() {
        this.props.getCurrentMovie(Number(this.props.match.params.pk))
        this.props.getRating(Number(this.props.match.params.pk))
        this.props.getGenres()
        //this.props.Reviews(this.props.currentMovie.reviews)
        this.props.getReviews(Number(this.props.match.params.pk))
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.currentMovie != this.props.currentMovie){
            return true
        }
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.getReviews !== this.props.getReviews){
            this.props.getReviews(this.props.match.params.pk)

        }
    }*/


    render() {

        return <>
            {this.props.isFetching == false ? <Fragment>
                {/* @ts-ignore */}
                    <HeaderContainer/>
                    <MovieDetail movie={this.props.movie}
                                 isFetching={this.props.isFetching}
                                 currentMovie={this.props.currentMovie}
                                 getRating={this.props.getRating}
                                 rating={this.props.rating}
                                 setReviews={this.props.setReviews}
                                 reviews={this.props.reviews}
                                 pk={this.props.match.params.pk}
                                 Name={this.props.Name}
                                 Text={this.props.Text}
                                 setRating={this.props.setRating}
                                 star={this.props.star}
                                 //MovieId={this.props.MovieId}
                                 movieId={this.props.movieId}
                                 isAuthorized={this.props.isAuthorized}
                                 userId={this.props.userId}
                                 ReviewsText={this.props.ReviewsText}
                                 textReviews={this.props.textReviews}
                    />

                </Fragment>



                :console.log('')}


        </>
    }
}
let mapStateToProps = (state: AppStateType) => {
    return {
        movie: state.homePage.movie,
        currentMovie: state.homePage.currentMovie,
        isFetching: state.homePage.isFetching,
        genres: state.homePage.genres,
        rating: state.homePage.rating,
        reviews: state.homePage.reviews,
        nameReviews: state.homePage.name,
        textReviews: state.homePage.textReviews,
        star: state.homePage.star,
        movieId: state.homePage.movieId,
        isAuthorized: state.authPage.isAuthorized,
        userId: state.authPage.userId
    }
}



export default withRouter( connect(mapStateToProps,
    {getCurrentMovie, MovieId, getGenres, getRating,
        getReviews, Reviews, setReviews,Name, Text, ReviewsText, setRating})

(MovieDetailContainer))