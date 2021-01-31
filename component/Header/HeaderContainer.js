import Header from "./Header";
import React from 'react'
import {connect} from 'react-redux';
import {getGenres, toggleIsFetching, searchMovie, Check, FilterMovie, getMovie} from '../../redux/HomeReducer' //thunk
import {SearchText} from '../../redux/HomeReducer' // actioncreator


class HeaderContainer extends React.Component {
    componentDidMount() {
        //searchMovie

        this.props.getGenres()
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    forceUpdateHandler(){
        this.forceUpdate();
    };
    render() {
        return <>
            { this.props.isFetching ? <p>loading...</p> : <Header genres={this.props.genres}
                                                                isFetching={this.props.isFetching}
                                                                  SearchText={this.props.SearchText}
                                                                  text={this.props.text}
                                                                  searchMovie={this.props.searchMovie}
                                                                  check={this.props.Check}
                                                                  FilterMovie={this.props.FilterMovie}
                                                                  forceUpdateHandler={this.forceUpdateHandler}
                                                                  getMovie={this.props.getMovie}





            /> }

        </>
    }
}
let mapStateToProps = (state) => {
    return {
        genres: state.homePage.genres,
        isFetching: state.homePage.isFetching,
        text: state.homePage.text,
    }
}
/*let mapDispatchToPops = (dispatch) => {
    return{
        getGenres:()=>{dispatch(getGenres)}
    }
}*/

export default connect(mapStateToProps,
    {getGenres, SearchText, searchMovie, Check, FilterMovie, getMovie})(HeaderContainer);