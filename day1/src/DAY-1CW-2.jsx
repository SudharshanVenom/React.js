import React from 'react';
function AlertMsg()
{
   let myobject={name:"Madras"};
   let newObject=myobject;
   myobject.name="Chennai";
   let myarray=["a","e","i","o"];
   let vowelArray=myarray;
   myarray.push("u");
   console.log(myobject);
   console.log(newObject);
   console.log(vowelArray);
}
const Work=()=>{
    return(
        <div>
            <h1>Reference Data Type</h1>
            <button onClick={AlertMsg}>Reference Data Type and call the function</button>
        </div>
    );
};
export default Work;