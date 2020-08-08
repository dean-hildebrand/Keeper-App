import React from "react"

let date = new Date()
let currentYear = date.getFullYear()

function Footer(){
    return(
        <p>Copyright @ {currentYear}</p>
    )
}

export default Footer