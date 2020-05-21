import { createSecret } from "../../../util"

export default {
    Mutation:{
        requestSecret: async(_,args)=>{
            const loginSecret = createSecret();
                       
            return true; 
        }
    }
}