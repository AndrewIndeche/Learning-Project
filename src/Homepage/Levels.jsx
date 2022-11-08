import React from "react"

class Levels extends React.Component{
render(){
    return(
        <>
        <h4>Select Difficulty Level</h4>
        <button id="standard" type  = "submit">Standard</button>
        <button id="difficult" type = "submit">Difficult</button>
        <div className="levelCard">
        <h3 style={{color: "black"}}>Selected Level</h3>
        <p style={{color: "red"}}>STANDARD</p>
        <form id = "LevelForm">
            <input/>
        </form>
        &nbsp;
        <p style={{color: "red"}}>CORRECT GUESS</p>
        <button id="guess" type = "submit">Guess</button>
        &nbsp;
        <div className="playButtons">
        <button id="play" type = "submit">Play Again</button>
        <button id="login" type = "submit">Log In</button>
        </div>
        </div>
        </>
    )
}
}
export default Levels
