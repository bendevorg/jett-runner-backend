/**
 * Module to decrypt data using rsa
 * @module utils/rsaDecryptor
 */
const NodeRSA = require('node-rsa');
const validator = require('./validator');

/**
 * Decrypt an encrypted data using RSA
 *
 * @param {string} encryptedData - Data to be decrypted
 * @param {string} key - Key to decrypt the data
 * @return {object} - Returns all the data inside the encrypted data
 * @throws {object} - Returns -1 that indicates a fail
 *
 */
module.exports = (encryptedData, key) => {
  if (!encryptedData || !key) {
    return false;
  }
  try {
    const rsa = new NodeRSA(key);
    let decryptedData = rsa.decrypt(encryptedData, 'utf8');

    if (validator.isValidJSON(decryptedData)) {
      decryptedData = JSON.parse(decryptedData);
    }

    return decryptedData;
  } catch (err) {
    return false;
  }
};