import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style/style.css'
import  logo from '../Terminator_Genisys.png'
import OwlDemo from '../Carousel/Carousel'
import React from "react"
import {Link,NavLink, Route, Switch} from "react-router-dom"
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import Particless from "../../particlesComponent/Partikles";

function Home(props) {
/*
* <div className="cardowner col-lg-2 col-sm-6 col-md-4 " key={i}>
                                <div className="d-flex" style={{marginTop: 20+'px', marginRight: 15+'px'}}>
                                    <Link to={`movie/${m.id}`}>
                                    <div className="cards d-flex " >
                                        <img className="cards__item__img " src={m.url} />
                                        <p className="cards__item__under__img__text__img">{m.title}</p>
                                        <p className="cards__item__under__img__text">{m.title}</p>
                                    </div>
                                    </Link>

style={{flexDirection: 'row', height:'200px', width:'300px', justifyContent: 'center'}}

                                </div>
                            </div>

* */
    /*
     надо сделать разбивку на компоненты мовидетайл, мовисерач, мовифилтер, и отабражать партиклес в мовидетайл

     */
    return (
        <section className="movielist">
            <div className="container">
                <div className="row">
                    {  <OwlDemo movie={Array.from(props.movie) || Array.from(props.movie.results)} isFetching={props.isFetching}/> }
                    <br/>
                        <br/>
                            <br/>


                    {

                        Array.from(props.movie).map((m, i)=>{
                            return<div style={{marginLeft: '0px'}} className={"ml-5"}>

                                <Link to={`movie/${m.id}`}>
                                <div className="row d-flex position-relative listMovie" style={{marginRight: '0'}}>
                                    <div className="col justify-content-center ">
                                        <div className="container1">
                                            <img src={m.url} alt="Avatar" width={'300px'} height={'400px'} className="image" style={{marginTop: '10px',
                                                marginLeft:'10px', zIndex: 999999999999999999
                                            }} />
                                                <div className="middle">
                                                    <div className="text"> </div><FontAwesomeIcon className={"iconPlay"} icon={faPlayCircle} />
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                </Link>
                           </div>
                        })  }


                    {/*props.movie.results ? <OwlDemo movie={Array.from(props.movie.results)} isFetching={props.isFetching}/> : console.log("search not")*/}

                    {
                        props.movie.results ?
                        Array.from(props.movie.results).map((m, i)=>{
                            console.log(m.title)
                            return <>

                                <div style={{marginLeft: '0px'}} className={"ml-5"}>
                                    <Link to={`movie/${m.id}`}>
                                        <div className="row d-flex position-relative listMovie" style={{marginRight: '0'}}>
                                            <div className="col justify-content-center ">
                                                <div className="container1">
                                                    <img src={m.url} alt="Avatar" width={'300px'} height={'400px'} className="image" style={{marginTop: '10px',
                                                        marginLeft:'10px', zIndex: 999999999999999999, marginBottom: "20%"
                                                    }} />
                                                    <div className="middle">
                                                        <div className="text"> </div><FontAwesomeIcon className={"iconPlay"} icon={faPlayCircle} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                </div></>




                        }): console.log("search not")  }
                    {props.movie.count == 0 &&


                      <strong style={{marginBottom: 64.2 + "%", marginLeft: 20+"%"}}>по вашему запросу ничего не найдено</strong>

                    }























                                    </div>
                                </div>



        </section>
    )
}
export default Home