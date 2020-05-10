import {User} from "../../../model/User";

export default { 
    Mutation:{
        deleteUser: async (_,args)=>{ 
            const {id } = args;
        }
    }
}