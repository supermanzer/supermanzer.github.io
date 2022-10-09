// Defining custom text utility functions

export default (context, inject) => {
  inject("lowerSnake", (str) => str.toLowerCase().split(" ").join("-"));
};
