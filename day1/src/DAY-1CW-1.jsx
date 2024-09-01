import React from 'react';
function alertmsg()
{
    alert("Message from Javascript Alert!");
    console.log("Message to developer");
}
const Thank=()=>
{
    return(
    <div>
    <h1>Let we see the output of JAVASCRIPT</h1>
    <button onClick={alertmsg}>Button</button>
</div>
    );
};
export default Thank;