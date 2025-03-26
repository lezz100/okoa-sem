// Array of Motivational Quotes
const quotes = [
    "The future depends on what you do today. - Mahatma Gandhi",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Hard work beats talent when talent doesn't work hard. - Tim Notke",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar"
  ];
  
  // Function to Calculate Current Day
  function getCurrentDay(startDate) {
    const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
    const today = new Date();
    const diffDays = Math.floor((today - startDate) / oneDay);
    return diffDays + 1; // Start counting from Day 1
  }
  
  // Function to Update Quote and Day Tag
  function updateQuote() {
    const startDate = new Date("2023-10-01"); // Replace with your desired start date
    const currentDay = getCurrentDay(startDate);
  
    // Get the corresponding quote (loop through the array)
    const quoteIndex = (currentDay - 1) % quotes.length;
    const currentQuote = quotes[quoteIndex];
  
    // Update the day tag and quote text
    document.getElementById("day-tag").textContent = `Day ${currentDay}`;
    document.getElementById("quote-text").textContent = currentQuote;
  
    // Reset animation
    const quoteElement = document.getElementById("quote-text");
    quoteElement.style.opacity = 0;
    quoteElement.style.transform = "translateY(20px)";
  
    // Trigger reflow to restart animation
    void quoteElement.offsetWidth;
  
    // Apply animation
    quoteElement.style.opacity = 1;
    quoteElement.style.transform = "translateY(0)";
  }
  
  // Initial Call to Display Quote
  updateQuote();
  
  // Optional: Update Automatically Every 24 Hours
  setInterval(updateQuote, 24 * 60 * 60 * 1000); // 24 hours in milliseconds