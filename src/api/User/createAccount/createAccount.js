import { User } from "../../../model";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, password, gender, avatar } = args;
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        throw Error("this email is exisits");
      }
      const newUser = await User.create({
        username,
        email,
        password,
        gender,
        avatar,
      });
      return newUser;
    },
  },
};
