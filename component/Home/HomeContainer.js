import React from 'react'
import Home from "./Home";
import {connect} from 'react-redux';
import {getMovie, toggleIsFetching} from '../../redux/HomeReducer'
import * as axios from 'axios'

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getMovie()
    }

    render() {
        return <>
            { this.props.isFetching ? <p>loading...</p> : <Home movie={this.props.movie}
                                                                isFetching={this.props.isFetching}
                                                                currentMovie={this.props.currentMovie}
                                                                text={this.props.text}


            /> }

        </>
    }
}
let mapStateToProps = (state) => {
    return {
        movie: state.homePage.movie,
        currentMovie: state.homePage.currentMovie,
        isFetching: state.homePage.isFetching,
        text: state.homePage.text,
    }
}
/*let mapDispatchToPops = (dispatch) => {
    return{
        getMovie:()=>{dispatch(getMovie)}
    }
}*/

export default connect(mapStateToProps,
    {getMovie})(HomeContainer);