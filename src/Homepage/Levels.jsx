import React, { Component, useCallback, useState} from "react"

class Levels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            levelSelected: "LEVEL",             
            input: "",
            tooHightooLow: "HIGH OR LOW",
            standardNum: Math.floor(Math.random() *10) + 1 + "",
            difficultNum: Math.floor(Math.random() *100) + 1 + "",
        };
        this.standard = this.standard.bind(this);
        this.difficult = this.difficult.bind(this);
        this.guessNumber = this.guessNumber.bind(this);
        this.clickedbuttonGuess = this.clickedbuttonGuess.bind(this);
        this.Initial = this.Initial.bind(this)
    }
    Initial(){
        this.setState({
            levelSelected: "LEVEL",             
            input: "",
            tooHightooLow: "HIGH OR LOW",
            guessNumber: "",
            standardNum : Math.floor(Math.random() *10) + 1 + "",
            difficultNum: Math.floor(Math.random() * 100 + 1) + "",         
    })
    }
    standard(e){
        e.preventDefault();
        this.setState({levelSelected:'Standard'});
    }
    difficult(e){
        e.preventDefault();
        this.setState({levelSelected:'Difficult'});
    }
    componentDidUpdate(){
           
        }
    componentDidMount(){
        
    }
    guessNumber(e){
        e.preventDefault();
        this.setState({ input:e.target.value})
    }
clickedbuttonGuess(e){
    e.preventDefault(); 
    let startNewStandardGame = this.state.standardNum 
    let startNewDifficultGame = this.state.difficultNum 
    let guessedValue = this.guessNumber;  

    console.log(this.state.levelSelected);
    console.log(this.state.input);
    console.log(this.state.difficultNum)

        if(guessedValue == startNewStandardGame){
            this.setState({tooHightooLow:'Good Job!Correct'});
        }else if(guessedValue < startNewStandardGame){
            this.setState({tooHightooLow:'Wrong!Too Low'});
        }else if(guessedValue  > startNewStandardGame){
            this.setState({tooHightooLow:'Wrong!Too high'});
        }
        if(guessedValue  == startNewDifficultGame){
            this.setState({tooHightooLow:'Good Job!Correct'});
        }else if(guessedValue  > startNewDifficultGame){
            this.setState({tooHightooLow:'Wrong!too High'});
        }else if(guessedValue  < startNewDifficultGame){
            this.setState({tooHightooLow:'Wrong!Too Low'});
        }
        else {
            this.setState({tooHightooLow:'PLEASE ENTER A NUMBER'});
        }
    }
render(){
    return(
        <>
        <div className="levelselect">
        <h5 style={{color: "white",fontSize:"17px",marginLeft:'5em'}}>Select Difficulty Level</h5>
        <button id="standard"  onClick ={this.standard}>Standard</button>
        <button id="difficult" onClick ={this.difficult}>Difficult</button>
        </div>
        <div className="levelCard">
        <h3 style={{color: "black",fontSize: '20px',marginLeft: '5.5em'}}>Selected Level</h3>
        &nbsp;
        <p style={{color: "red",fontSize: 20,marginLeft:'6.5em'}}>{ this.state.levelSelected }</p>
        &nbsp;
        <form id = "LevelForm">
            <input style={{float:'center'}} value={this.state.input}  id = "Levelsinput" placeholder="Enter Number Here" type="number" onChange = {this.guessNumber} ref={this.inputFocus}/>
        </form>
        &nbsp;
        <p style={{color: "red",fontSize: 20, marginLeft:'5.5em'}}>{this.state.tooHightooLow}</p>
        &nbsp;&nbsp;
        <button onClick={this.clickedbuttonGuess}  id="guess" type = "submit">Guess</button>
        &nbsp;
        <div className="playButtons">
        <button id="play"  onClick={this.Initial} type = "submit">Play Again</button>
        <button id="login" type = "submit">Log In</button>
        </div>
        </div>
        </>
    )
}
}
export default Levels
