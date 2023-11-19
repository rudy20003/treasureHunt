export const url = process.env.NEXT_PUBLIC_SITE_URL;
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      console.log("debounce");
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const changeOrientation1 = () => {
  // orientation
  if (window) {
    const isPortrait = window.innerHeight > window.innerWidth;
    if (isPortrait && window.innerWidth < 750) {
      alert(
        "Please rotate your device to landscape mode to play the game! Thank you!"
      );
      changeOrientation();
    }
  }
};
export const changeOrientation = debounce(changeOrientation1, 1000);
