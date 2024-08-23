//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props){
    console.log(props)
    return (<div className="bigCounter">

   
    <div className="six">{parseInt(props.six)}</div>
    <div className="five">{parseInt(props.five)}</div>
    <div className="four">{parseInt(props.four)}</div>
    <div className="three">{parseInt(props.three)}</div>
    <div className="two">{parseInt(props.two)}</div>
    <div className="one">{parseInt(props.one)}</div>

    </div>);
} let root= ReactDOM.createRoot(document.getElementById('app'))
let counter= 0
setInterval(()=>{
    counter+=1
    root.render(<SimpleCounter one={counter%10} two={(counter/10)%10} three={(counter/100)%10} four={(counter/1000)%10} five={(counter/10000)%10} six={(counter/100000)%10}/>)},1000)




