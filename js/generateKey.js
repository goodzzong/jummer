const shortid = require('shortid');

export const generateKey = () => {
  return shortid.generate()
}