// Defining custom text utility functions

export default (context, inject) => {
  inject('lowerSnake', (str) => str.toLowerCase().split(' ').join('-'))
  inject('capFirst', (str) => `${str[0].toUpperCase()}${str.slice(1)}`)
}
