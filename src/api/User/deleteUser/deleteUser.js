import { User } from "../../../model";

export default {
  Mutation: {
    deleteUser: async (_, args) => {
      const { id } = args;
      if (id) {
        await (await User.findById({ _id: id })).execPopulate(err, data);
      }
    },
  },
};
