import React from "react";

const Card = ({id,name,email}) => {
    return(
        <div className="tc dib pa2 ma4 bw1 br3 grow bb br w-25" style={{backgroundColor: "#d1d1e9"}}>
            <img src={"https://robohash.org/"+id+"?200x200"} alt={name}/>
            <div className="fl w-100 code b" style={{color: "#222525"}}>
                <p className="tc fl w-100">{name}</p>
                <p className="tc fl w-100" style={{overflowWrap:"break-word"}}>{email}</p>
            </div>
        </div>
    );
}

export default Card;