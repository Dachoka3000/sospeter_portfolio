// Select the element with the class "sec-text" and store it in the 'text' variable
const text = document.querySelector(".sec-text");

// Define the 'textLoad' function which will change the content of the 'text' element after specific timeouts
const textLoad = () => {

  // Set a timeout of 0 milliseconds, but it will still run asynchronously.
  // After the timeout, change the text content of 'text' to "FULL-STACK SOFTWARE DEVELOPER."
  setTimeout(() => {
    text.textContent = "FULL-STACK SOFTWARE DEVELOPER.";
  }, 0);

  // Set a timeout of 4000 milliseconds (4 seconds).
  // After the timeout, change the text content of 'text' to "NETWORK ADMINISTRATOR."
  setTimeout(() => {
    text.textContent = "NETWORK ADMINISTRATOR.";
  }, 4000);

  // Set a timeout of 8000 milliseconds (8 seconds).
  // After the timeout, change the text content of 'text' to "DATA ENTRY CLERK."
  setTimeout(() => {
    text.textContent = "DATA ENTRY CLERK.";
  }, 8000);

  // Set a timeout of 12000 milliseconds (12 seconds).
  // After the timeout, change the text content of 'text' to "DATABASE MANAGER."
  setTimeout(() => {
    text.textContent = "DATABASE MANAGER.";
  }, 12000);
};

// Call the 'textLoad' function once immediately to start the initial text change
textLoad();

// Set an interval that will call the 'textLoad' function every 16 seconds (16000 milliseconds).
// This will keep changing the text content in the specified intervals.
setInterval(textLoad, 16000);
