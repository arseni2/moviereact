import React from 'react'
import App from './App'
import {AppStateType} from "./redux/redux";
import {connect} from "react-redux";
import {initThunk} from "./redux/AppReducer";
import Loader from "./component/loader/loader";
import {ISUserThunk} from "./redux/AuthReducer";


type mapDispatchToProps = {
    initThunk: () => void
    ISUserThunk: () => void
}
type MapPropsType = ReturnType<typeof mapStateToProps>

type PropsType = MapPropsType & mapDispatchToProps


class AppContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initThunk()
        this.props.ISUserThunk()
    }

    render() {
        return <>
            {!this.props.isInitilized ? <Loader/> :
                <App isInitilized={this.props.isInitilized}/>}


        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isInitilized: state.app.isInitilized,
        isFetching: state.homePage.isFetching
    }
}



export default connect<MapPropsType, mapDispatchToProps, PropsType, AppStateType>(mapStateToProps,
    {initThunk, ISUserThunk})(AppContainer);