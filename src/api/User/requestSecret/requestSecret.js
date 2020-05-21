import { createSecret, sendSecretMail } from "../../../util"
import {User} from "../../../model";
export default {
    Mutation:{
        requestSecret: async(_,args)=>{
            const {email} = args;
            const loginSecret = createSecret();
            try{
                sendSecretMail(email,loginSecret);
                const updateUser = await User.findOneAndUpdate({email},{loginSecret})
                console.log(updateUser);
            }catch(error){
                console.log(error);
                throw Error("Email wrong!");
            }
            return true; 
        }
    }
}