import { User } from "../../../model";
export default {
  Mutation: {
    loginUser: async (_, args) => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email, password });
        if(user){
            throw Error("Wrong Email and password");
        }else{
            
        }
        return "token";
      } catch (error) {
        console.log(error);
        throw Error("Wrong Email and Password");
      }
    },
  },
};
