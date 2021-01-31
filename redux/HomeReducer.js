import {MovieApi} from "../api/api";

let initialState = {
    text: null,
    movie: [],
    currentMovie: [],
    isFetching: true,
    genres: [],
    rating: [],
    reviews:[],
    genresCheck: [],
    movieId: null,
    nameReviews: "",
    textReviews: "",
    star: 0
};
const LOAD_MOVIE = "LOAD_MOVIE"
const LOAD_CURRENT_MOVIE = "LOAD_CURRENT_MOVIE"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const GENRES = "GENRES"
const RATING = "RATING"
const TEXT = "TEXT"
const CHECKBOX = "CHECKBOX"
const REVIEWS = "REVIEWS"
const NAME = "NAME"
const TEXTREVIEWS = "TEXTREVIEWS"
const CLEARFIELDS = "CLEARFIELDS"
const SETSTAR = "SETSTAR"
const GETSTAR = "GETSTAR"
const SETMOVIEID = "SETMOVIEID"
/*сервак при пост зопросе возвращает все отзывы вклюсая толькочто добавленный*/
const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_MOVIE: {
           return {...state, movie: action.movie}
        }
        case SETSTAR: {
            return {...state, star: action.star}
        }
        case REVIEWS: {
            return {...state, reviews: action.reviews}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFething}
        }
        case GENRES: {
            return {...state, genres: action.genres}
        }
        case LOAD_CURRENT_MOVIE: {
            return {...state, currentMovie: action.currentMovie}
        }
        case RATING: {
            return {...state, rating: action.rating}
        }
        case SETMOVIEID: {
            return {...state, movieId: action.movieId}
        }
        case TEXTREVIEWS: {
            return {...state, textReviews: action.text}
        }
        case TEXT: {
            return {...state, text: action.text}
        }
        case NAME: {
            return {...state, nameReviews: action.name}
        }
        case CLEARFIELDS: {
            return {...state, nameReviews: "", textReviews: ""}
        }
        case CHECKBOX: {
            return {...state, genresCheck: action.check}
        }
        default:
            return state


    }}
export const setMovie = (movie) => ({type: LOAD_MOVIE, movie })
export const setGenres = (genres) => ({type: GENRES, genres })
export const toggleIsFetching = (isFething) => ({type: TOGGLE_FETCHING, isFething})
export const setCurrentMovie = (currentMovie) => ({type: LOAD_CURRENT_MOVIE, currentMovie })
export const RatingCurrentMovie = (rating) => ({type: RATING, rating})
export const SearchText = (text) => ({type: TEXT, text})
export const Check = (check) => ({type: CHECKBOX, check})
export const Reviews = (reviews) => ({type: REVIEWS, reviews})
export const Name = (name) => ({type: NAME, name})
export const Text = (text) => ({type: TEXTREVIEWS, text})
export const ClearFields = () => ({type: CLEARFIELDS})
export const Star = (star) => ({type: SETSTAR, star})
export const MovieId = (movieId) => ({type: SETMOVIEID, movieId})

export const getMovie = function (){
    return async function (dispatch){
        await MovieApi.getMovie().then(data => {
            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const setReviews = function (text, movie, name){
    return async function (dispatch){
        await MovieApi.CreateReviews(text, movie, name).then(data => {
            debugger
            dispatch(Reviews(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
/*export const getMovie = async (dispatch) => {


    await MovieApi.getMovie().then(data => {


            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
        });
    }*/
export const searchMovie = function (text){
    return async function (dispatch){
        await MovieApi.searchMovie(text).then(data => {
            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const FilterMovie = function (number){
    return async function (dispatch){
        await MovieApi.GenreMovie(number).then(data => {
            dispatch(setMovie(data));
            dispatch(toggleIsFetching(false));
        })
    }
}
export const getGenres = ()=>{
    return async (dispatch) => {


        await MovieApi.getGenres().then(data => {


        dispatch(setGenres(data));
        dispatch(toggleIsFetching(false));
    });
}}

export const  getCurrentMovie = function (pk){

    return async function  (dispatch) {

        await MovieApi.getDetailMovie(pk).then(data => {


            dispatch(setCurrentMovie(data));


        });
        await MovieApi.getRating(pk).then(data => {
            dispatch(RatingCurrentMovie(data))
            dispatch(Star(data))
            dispatch(toggleIsFetching(false));
        })

    }
}
export const getRating = function (pk){

    return async function (dispatch) {
        await MovieApi.getRating(pk).then(data => {
            dispatch(Star(data))
            dispatch(RatingCurrentMovie(data))
            dispatch(toggleIsFetching(false));
        })

    }
}
export const setRating = function (star, movie){

    return async function (dispatch) {
        await MovieApi.setRating(star, movie).then(data => {
            dispatch(RatingCurrentMovie(data))
            dispatch(Star(data))
            dispatch(toggleIsFetching(false));
        })

    }
}
export const getReviews = function (pk){
    debugger
    return async function (dispatch) {
        await MovieApi.getReviews(pk).then(data => {
            dispatch(Reviews(data))
            dispatch(toggleIsFetching(false));

        })

    }
}


export default HomeReducer