import { isAuthenticated } from "../../../middlewares";
import {User} from "../../../model"
export default {
  Mutation: {
    editProfile: async (_, args, { request }) => {
      const { user } = request;
      isAuthenticated(request);
      const { username, email, password, avatar } = args;
      try {
        const updateUser = await User.findByIdAndUpdate(
          { _id: user._id },
          { username, email, password, avatar }
        );
        return updateUser;
      } catch (error) {
        console.log(error);
        throw Error("email was wrong");
      }
    },
  },
};
