import '../../style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/anim.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/*faSearch*/

function Header(props) {
    let arrGenres = {}
    //arrGenres.genres = null
    /* сделать свой гамбургер меню,
    дальше отптимизировать,добвлеть новые фичи,
    писать на ts и использовать много новых технологий = ит камас*/
    /*<div className="hamburger-menu">
                    <input id="menu__toggle " type="checkbox"/>
                    <label className="menu__btn " htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box " style={{paddingTop: 60+'px'}}>

                        {props.isFetching === false ? props.genres.map((g,i)=>{

                            return <li key={i} style={{marginTop: 10+'px'}}><p style={{marginTop: 60 + 'px'}} className="menu__item">
                                <input onClick={(e)=>{
                                if(e.target.checked){
                                    Object.assign(arrGenres, {[g.name]: e.target.value})
                                    props.check(arrGenres)
                                    props.FilterMovie(arrGenres)
                                }else{
                                    delete arrGenres[g.name]
                                }

                            }} type="checkbox" name=""
                                                                                className="menu__item" value={`&genres=${g.id}`}/>{g.name}</p></li>
                        }) : console.log("bad")}






                    </ul>

                </div>*/
    return (

        <header className="header " id="header">


            <div className="container">
                <div className="row">

                    <div className={"indexz"}>
                        <div className="hamburger-menu">
                            <input id="menu__toggle" type="checkbox"/>
                            <label className="menu__btn" htmlFor="menu__toggle">
                                <span> </span>
                            </label>
                            <ul className="menu__box">
                                {props.isFetching === false ? props.genres.map((g,i)=>{

                                    return <li key={i} style={{marginTop: 10+'px'}}><p style={{marginTop: 60 + 'px'}} className="menu__item">
                                        <input onClick={(e)=>{
                                            if(e.target.checked){
                                                Object.assign(arrGenres, {[g.name]: e.target.value})
                                                props.check(arrGenres)
                                                props.FilterMovie(arrGenres)
                                            }else{
                                                delete arrGenres[g.name]
                                            }

                                        }} type="checkbox" name=""
                                               className="menu__item" value={`&genres=${g.id}`}/>{g.name}</p></li>
                                }) : console.log("bad")}
                            </ul>
                        </div>
                    </div>

                    <div className="nav col-lg-5 ml-auto ">
                        <nav>
                            <ul className="nav__items d-flex justify-content-center ">

                                <div className="divse col-lg-12 col-sm-12">
                                    <input type="text" className="textbox" placeholder="Search" value={props.text} onChange={(e)=>{

                                        props.SearchText( e.target.value)
                                    }}/>

                                    <button type={"submit"} style={{fontSize:19+'px', marginTop: 0+'px'}} className={"button"}
                                            onClick={()=>{props.searchMovie(props.text)}}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header
