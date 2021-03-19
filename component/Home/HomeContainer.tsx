import React from 'react'
import Home from "./Home";
import {connect} from 'react-redux';
import {getMovie, toggleIsFetching, movieType, currentMovieType} from '../../redux/HomeReducer'
import {AppStateType} from "../../redux/redux";


type mapDispatchToProps = {
    getMovie: ()=>void
}
type MapPropsType = ReturnType<typeof mapStateToProps>

/*type PropsType = {
    getMovie: ()=>void
    isFetching: boolean
    movie: Array<movieType>
    currentMovie: any | null
    text: string
    results: Array<movieType>
    count:number | null
}*/
/*сделать так чтобы все данные были в стейте this.props.movie.count = this.props.count
* type PropsType = MapPropsType & mapDispatchToProps
* и по сути ероров не будет*/

//type PropsType = MapPropsType & mapDispatchToProps
type PropsType = MapPropsType & mapDispatchToProps


class HomeContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getMovie()

    }

    render() {
        return <>
            { this.props.isFetching ? console.log('') : <Home movie={this.props.movie}
                                                                isFetching={this.props.isFetching}
                                                                //@ts-ignore
                                                                currentMovie={this.props.currentMovie}
                                                                text={this.props.text}
                //@ts-ignore
                                                                movieResults={this.props.results}
                                                                movieCount={this.props.count}


            /> }

        </>
    }
}
let mapStateToProps = (state:AppStateType) => {
    return {
        movie: state.homePage.movie,
        currentMovie: state.homePage.currentMovie,
        isFetching: state.homePage.isFetching,
        text: state.homePage.text,
        results: state.homePage.results,
        count: state.homePage.count,
    }
}
/*let mapDispatchToPops = (dispatch) => {
    return{
        getMovie:()=>{dispatch(getMovie)}
    }
}*/


export default connect<MapPropsType,mapDispatchToProps,PropsType, AppStateType>(mapStateToProps,
    {getMovie})(HomeContainer);