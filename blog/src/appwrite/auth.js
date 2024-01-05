import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // return userAccount;
                // another method
return this.login({email,password});
            } else {
return userAccount;
            }

        } catch (error) {
            throw error001;
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
         throw error002;   
        }
    }
    async getCurrentUser(){
        try {
           return await this.account.get(); 
        } catch (error) {
            throw error003;
        }
        return null;
    }
    async logout(){

try {
    await this.account.deleteSessions();
} catch (error) {
    return error003
}
        
    }
}

const Authservice = new AuthService();

export default authService;
