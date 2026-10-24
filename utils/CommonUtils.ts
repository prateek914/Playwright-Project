import cryptojs from 'crypto-js';

export default class CommonUtils {
    // Secret key for encryption and decryption
    private secretKey: string;
    
    constructor() {
       // this.secretKey = process.env.ENCRYPTION_KEY ? process.env.Encryption_KEY : "";

       if(process.env.ENCRYPTION_KEY){
        this.secretKey = process.env.ENCRYPTION_KEY;
       }else{
        throw new Error("ENCRYPTION_KEY is not defined in the environment variables.");
       }
    } 

    // Method to encrypt data using AES encryption
    public encryptData(data: string){
        const encryptedData = cryptojs.AES.encrypt(data, this.secretKey).toString();
        console.log('Encrypted Data:', encryptedData);
        return encryptedData; 
    }

    // Method to decrypt data using AES decryption
    public decryptData(encryptedData: string){
        const decryptedData = cryptojs.AES.decrypt(encryptedData, this.secretKey).toString(cryptojs.enc.Utf8);
        return decryptedData;
    } 

}