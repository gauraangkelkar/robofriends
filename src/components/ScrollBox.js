
import React, { Component } from "react";

class ScrollBox extends Component{
    render(){
        return(
        <div className="mv3 pv2" style={{overflowY:"scroll", height:"700px"}}>
            {this.props.children}
        </div>
        );
    }
}

export default ScrollBox;