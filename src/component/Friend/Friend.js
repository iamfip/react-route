import React from 'react';

const Friend = (props) => {
    const {id,name,phone,website,address}=props.friend;
    return (
        <div className="friend-container" style={{backgroundColor:"gold",
                    border:"1px solid blue",
                    borderRadius:"5px" ,
                    margin:"10px"}}>
            <h2>I am : {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>visit me: {website}</p>


        </div>
    );
};

export default Friend;