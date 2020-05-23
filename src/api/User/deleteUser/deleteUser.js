import { User } from "../../../model";
import { isAuthenticated } from "../../../middlewares";
export default {
  Mutation: {
    deleteUser: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      try {
        const findUser = await User.findByIdAndRemove(
          { _id: user.id },
          { subscriber: { $in: "5ec80e33a2a16141d3883c24" } }
        );
        findUser.map((findUser) => {
          findUser.subscriber.pull(user.id);
          findUser.save();
        });
        console.log(findUser);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
      return true;
    },
  },
};
