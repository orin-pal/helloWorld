const greetings = {
  en: "Hello, World!",
  bn: "হ্যালো বিশ্ব!",
  sa: "नमस्ते विश्व!",
  hi: "नमस्ते दुनिया!",
  ru: "Привет, мир!",
};

function changeGreeting(lang) {
  document.getElementById("greetingText").textContent = greetings[lang];
}

function spinGlobe() {
  const globe = document.querySelector(".globe");
  globe.style.animation = "none";
  void globe.offsetWidth; // Trigger reflow
  globe.style.animation = "rotate 5s linear infinite";
}

// Add sunrise/sunset effect based on local time
const hour = new Date().getHours();
const greeting = document.getElementById("greetingText");
if (hour < 12) {
  greeting.style.color = "#e67e22"; // Morning color
} else if (hour < 18) {
  greeting.style.color = "#2ecc71"; // Afternoon color
} else {
  greeting.style.color = "#3498db"; // Evening color
}
