import { User } from "../../../model";
import {isAuthenticated} from "../../../middlewares";
export default {
  Mutation: {
    deleteUser: async (_, __,{request}) => {
      isAuthenticated(request);
      const {user} = {request};
      try{
        await User.findByIdAndDelete({_id:user.id});
        return true;
      }catch(error){
        console.log(error);
        return false;
      }
      return true;
    },
  },
};
