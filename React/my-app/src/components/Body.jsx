import React, {useEffect} from "react";
import data from "../data";
import { Link } from "react-router-dom";
import "./Body.css";

const Body = ({ handleItemSelect }) => {
  // Using the 'useEffect' hook to scroll to the top of the page when the component mounts.
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);


  return (
    <div className="body">
      {/* creating a list of items using the map function to loop through the data array. */}
      {data.map((item, index) => (
        <ul key={index}>
          <Link
            to={`/selected/${item.name}`}
            onClick={handleItemSelect}
            className="no-underline"
          >
            <li className="item-container">
              <img
                src={item.image}
                alt={`Image of ${item.name}`}
                className="item-image"
              />
              <span className="item-name">{item.name}</span>
              <span className="item-arrow">➔</span>
            </li>
          </Link>
        </ul>
        
      ))}
      <div className="call">Not sure about consultation type? Please, call <span className="blue">0203 799273632</span></div>
    </div>
  );
};

export default Body;
