import './App.css';
import HomeContainer from './component/Home/HomeContainer'
import Footer from  './component/Footer/Footer'
import HeaderContainer from "./component/Header/HeaderContainer";
import MovieDetailContainer from "./component/movieDetail/MovieDetailContainer";
import {Route, Switch} from 'react-router-dom'
import {Fragment} from 'react'


function App() {
  return (
    <div className="animate__animated animate__fadeIn">

        <Switch>
            <Route exact path="/movie/:pk?" component={MovieDetailContainer}/>
            <Route exact path='/' render={() =>
                <Fragment>
                    <HeaderContainer />
                    <HomeContainer />


                    {<Footer/>}
                </Fragment>
            } />




        </Switch>


    </div>
  );
}

export default App;
