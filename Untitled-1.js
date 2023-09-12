const affirmations = [
    "You are amazing, never forget that",
    "Everything is better when you're here.",
    "Whenever I feel down, I think of you as my inspiration",
    "I learned to take care of others through you.",
    "Your smile brightens my day and warms my heart.",
    "You are incredibly talented, especially in drawing, and I admire your creativity.",
    "I am so grateful to have you in my life.",
    "Your kindness and compassion inspire me to be a better person.",
    "I love you.",
    "I love how you always find a way to fix things with me and collaborate.",
    "You bring so much joy and positivity into my world.",
    "You were always there for me when I didn't know what to do with myself.",
    "I believe in you, and I know you can conquer any challenge that comes your way.",
  ];
// Get the output element
const outputElement = document.getElementById("output");

document.getElementById("rollButton").onclick = function(){

    affirmation = Math.floor(Math.random() * 13) + 1;
    console.log(affirmation)

    // Set the content of an HTML element with the id "xlabel" based on the value of x
    if (affirmation >= 1 && affirmation <= affirmations.length) {
        document.getElementById("xlabel").textContent = affirmations[affirmation - 1];
      }
}