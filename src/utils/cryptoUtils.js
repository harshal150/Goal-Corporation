import CryptoJS from "crypto-js";
const SECRET_KEY = 'goalcorporation';
console.log('object',SECRET_KEY);

// export const encryptData=(plainText) =>{
//     alert('object',SECRET_KEY)
//     return CryptoJS.AES.encrypt(plainText, SECRET_KEY).toString();
// }

// export const decryptData=(cipherText)=>{
//     const bytes=CryptoJS.AES.decrypt(cipherText,SECRET_KEY);
//     return bytes.toString(CryptoJS.enc.utf8)
// }

export const encryptData = (text) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  };
  
  export const decryptData = (base64) => {
    return CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.Utf8);
  };
  