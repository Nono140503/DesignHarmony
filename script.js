document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", function () {
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const cellnumber = document.getElementById("number").value;

    const typeOfSpaceSection = document.getElementById("customer_info");
    const typeOfSpace = typeOfSpaceSection.querySelector(
      'input[name="option"]:checked'
    );

    const other = document.getElementById("other").value;

    const rooms = document.getElementById("rooms").value;

    const spaceInSquareFt = document.getElementById("ft").value;

    const designOption = document.getElementById("customer_info");
    const selectedDesign = designOption.querySelector(
      'input[name="option_2"]:checked'
    );

    const other_1 = document.getElementById("other_1").value;

    const colorInput_1 = document.getElementById("color_1");
    const selectedColor_1 = colorInput_1.value;
    const colorInput_2 = document.getElementById("color_2");
    const selectedColor_2 = colorInput_2.value;
    console.log("Selected Color:", selectedColor_1, selectedColor_2);

    const materials = document.getElementById("materials").value;

    const inspiration = document.getElementById("customer_info");
    const inspirationUrlInput = inspiration.querySelector(
      'input[type="url"].links'
    );
    const inspirationUrl = inspirationUrlInput.value;
    console.log("Inspiration URL:", inspirationUrl);

    const comms = document.getElementById("customer_info");
    const commsOption = comms.querySelector('input[name="option3"]:checked');

    // Log or use the inspiration URL value

    // Access the value property to get the selected color in hexadecimal format

    // Log or use the selected color value

    if (typeOfSpace) {
      const typeOfSpaceValue = typeOfSpace.value;
      console.log("Selected Type of Space:", typeOfSpaceValue);
    }
    if (selectedDesign) {
      const designValue = selectedDesign.value;
      console.log("Selected Design:", designValue);
    }
    if (commsOption) {
      const commsValue = commsOption.value;
      if (commsValue === "Both") {
        console.log(
          "Selected communication channels: Both cellphone and email"
        );
      } else {
        console.log("Selected communication channels:", commsValue);
      }
    }
    const timeline = document.getElementById("customer_info");
    const startDateInput = timeline.querySelector('input[type="date"].dates');
    const endDateInput = timeline.querySelector('input[type="date"].dates_');

    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    console.log("Start Date:", startDate);
    console.log("Desired End Date:", endDate);

    // Other form data collection goes here

    const formData = {
      name: name,
      email: email,
      cellnumber: cellnumber,
      typeOfSpace: typeOfSpaceValue,
      otherTypes: other,
      rooms: rooms,
      space: spaceInSquareFt,
      design: designValue,
      otherDesign: other_1,
      color1: selectedColor_1,
      color2: selectedColor_2,
      preferedMaterials: materials,
      start_date: startDate,
      end_date: endDate,
      inspirationUrl: inspirationUrl,
      commsInfo: commsValue,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Server response:", json);
        // Add any further actions based on the server response
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors if any
      });
  });
});
