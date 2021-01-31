import React from 'react'

function FormReviews(props) {
    let click = (text, name) => {
        props.setReviews(text, props.pk, name)
        //props.uc()
    }
    console.log(props.isFetching)
    return (<>

            <input style={{width: 225 + 'px'}} name={"name"} type="text"
                   placeholder={"name"} onChange={(e) => {

                window.name12 = e.target.value
                console.log(e.target.value)
            }}/> <br/>

            <textarea className={"textarea"} cols="29" name={"text"}
                      placeholder="text" onChange={(e) => {

                window.text = e.target.value
                console.log(e.target.value)
            }}/> <br/>

            <button onClick={(e) => {
                click(window.text, window.name12)
            }} style={{marginLeft: 230 + 'px'}} disabled={props.isFetching} type={"submit"}>Submit
            </button>


        </>

    )
}

export default FormReviews