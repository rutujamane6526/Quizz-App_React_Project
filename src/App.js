
import React, {useState} from "react";
import data from "./data.js";
import "./index.css";


function App()
{
  const [elementID, setElementID] = useState(null);

  const handleClick= (id) =>{
    //console.log(id);
    setElementID(elementID !== id ? id : null);
  };

  return(
    <>
      <div className="flashcards">
          {
            data.map( (item, i) =>{
              return (
              <div
                key={i} onClick={ () => {
                  handleClick(item.id);
              }}
                className={elementID === item.id ? "selected" : ""}
              >
                  <p>{elementID === item.id ? item.answer : item.question}</p>
              </div>
              );
            })
          }
      </div>
    </>
  );
}

export default App;