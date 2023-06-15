import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data";
import "./SelectedItem.css";

const SelectedItem = () => {
  // using useParams hook to get the selected name from the URL
  const { selectedName } = useParams();
  // using useNavigate hook to navigate back to the previous page
  const navigate = useNavigate();
  // finding the selected item from the data array based on its name
  const selectedItem = data.find((item) => item.name === selectedName);

  // handling the click event of the back button
  const handleBackButtonClicked = () => {
    navigate(-1);
  };

  return (
    <div className="selected">
      <div className="image-container">
        <img src={selectedItem.image} alt={`Image of ${selectedItem.name}`} />
      </div>
      <div className="text-container">
        <div className="name">{selectedName}</div>
        <div className="text">{selectedItem?.text}</div>
        <button onClick={handleBackButtonClicked}>Back</button>
      </div>
    </div>
  );
};

export default SelectedItem;
