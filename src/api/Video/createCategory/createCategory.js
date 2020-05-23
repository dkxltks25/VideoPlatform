import { Category } from "../../../model";

export default {
  Mutation: {
    createCategory: async (_, args) => {
      const { name } = args;
      try {
        await Category.create({ name });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  Query: {
    allCategory: async () => {
      return await Category.find();
    },
  },
};
