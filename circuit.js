// // Variable to keep track of the last filled cell index in each row
// let lastFilledCellIndices = {};

// function allowDrop(event) {
//     event.preventDefault();
//   }
// // Function to handle the drop event
// function dropLogo(event) {
//   event.preventDefault();

//   const table2Row = event.target.parentElement;
//   const rowIndex = Array.from(table2Row.parentElement.children).indexOf(table2Row);
  
//   // Initialize lastFilledCellIndex for the current row if not already set
//   if (!lastFilledCellIndices[rowIndex]) {
//     lastFilledCellIndices[rowIndex] = -1;
//   }

//   const draggedImageAlt = event.dataTransfer.getData("text/plain");
//   const draggedImageSrc = event.dataTransfer.getData("text/uri-list"); // Get the source of the dragged image

//   // Find the next available empty cell in the row
//   const cells = Array.from(table2Row.children);
//   const nextEmptyCellIndex = cells.findIndex((cell, index) => index > lastFilledCellIndices[rowIndex] && cell.childElementCount === 0);

//   // If there is an empty cell in the row, drop the image
//   if (nextEmptyCellIndex !== -1) {
//     // Check if the cell already contains an image, remove it
//     const existingImage = cells[nextEmptyCellIndex].querySelector('img');
//     if (existingImage) {
//       existingImage.remove();
//     }

//     const newImage = createImageElement(draggedImageSrc); // Use the src of the dragged image
//     cells[nextEmptyCellIndex].appendChild(newImage);

//     // Update the last filled cell index for the current row
//     lastFilledCellIndices[rowIndex] = nextEmptyCellIndex;
//   }
// }

// // Function to create a new image element
// function createImageElement(src) {
//   const newImage = document.createElement("img");
//   newImage.src = src; // Set the src to the dragged image source
//   newImage.alt = src;

//   // Set the width and height of the new image to 1cm x 1cm
//   newImage.style.width = '1cm';
//   newImage.style.height = '1cm';

//   return newImage;
// }

// ***********************************************

// Function to handle the drop event
// Function to handle the drop event
function dropLogo(event) {
  event.preventDefault();

  // Get the target drop area
  const dropArea = event.target;

  // Check if the drop area already contains an image
  const existingImage = dropArea.querySelector('img');

  // If the drop area does not contain an image, proceed to drop the dragged image
  if (!existingImage) {
    const draggedImageSrc = event.dataTransfer.getData("text/uri-list"); // Get the source of the dragged image

    // Create a new image element
    const newImage = createImageElement(draggedImageSrc);

    // Append the new image to the drop area
    dropArea.appendChild(newImage);
  }
}

// Function to create a new image element
function createImageElement(src) {
  const newImage = document.createElement("img");
  newImage.src = src; // Set the src to the dragged image source

  // Set the width and height of the new image to 1.5cm x 1.5cm as requested
  newImage.style.width = '1.5cm';
  newImage.style.height = '1.5cm';

  return newImage;
}
