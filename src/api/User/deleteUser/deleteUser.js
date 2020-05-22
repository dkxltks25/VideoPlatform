import { User } from "../../../model";
import {isAuthenticated} from "../../../middlewares";
export default {
  Mutation: {
    deleteUser: async (_, args,{request}) => {
      isAuthenticated(request);
      console.log(request.user);
      const { id } = args;
      return true;
    },
  },
};
