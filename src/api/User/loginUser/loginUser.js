import { User } from "../../../model";
import { generateToken } from "../../../util";
export default {
  Mutation: {
    loginUser: async (_, args) => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email, password });
        if(user){
            return generateToken(user.id);
        }else{
            throw Error("Wrong Email and password");
        }
      } catch (error) {
        console.log(error);
        throw Error("Wrong Email and Password");
      }
    },
  },
};
