// This function changes the value and text content of each option element
function changeValues() {
  const options = document.getElementsByName("option");

  // looping through each option element and updating its value and corresponding text content
  for (let i = 0; i < options.length; i++) {
    options[i].value = `New Value ${i + 1}`;
    options[i].nextSibling.textContent = `New Value ${i + 1}`;
  }
}

// This function shows the selected values from a list of options
function showSelectedValues() {
  const options = document.getElementsByName("option");
  let selectedValues = [];

  // looping through each option element and checking if it is selected
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      // if an option is selected, we add its value to the array of selected values
      selectedValues.push(options[i].value);
    }
  }

  // Updating the text content of the element with ID selectedValues to display the selected values
  document.getElementById(
    "selectedValues"
  ).textContent = `Selected values: ${selectedValues.join(", ") || 'None'}`;
}

// This function shuffles the order of a list of option elements
function shuffleValues() {
  // we get all option elements as an array
  let options = Array.from(document.getElementsByName("option"));
  // shuffle the order of the array using the Fisher-Yates algorithm
  options.sort(() => Math.random() - 0.5);
  // geting the container element for the options
  let container = document.getElementById("optionsContainer");
  // appending each option's parent node to the container in the shuffled order
  options.forEach((option) => {
    container.appendChild(option.parentNode);
  });
}

