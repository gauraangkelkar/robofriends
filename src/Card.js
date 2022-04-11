import React from "react";

const Card = ({id,name,email}) => {
    return(
        <div className="tc dib bg-light-green pa2 ma4 bw1 br3 grow bb br w-25">
            <img src={"https://robohash.org/"+id+"?200x200"} alt={name}/>
            <div className="fl w-100">
                <p className="tc">{name}</p>
                <p className="tc">{email}</p>
            </div>
        </div>
    );
}

export default Card;