import { User, PlayList } from "../../../model";

export default {
  Query: {
    playLists: async (_, args) => {
      const { id } = args;
      try {
        console.log(await PlayList.find({ user: id }).populate("videos").populate("user"));
        return await PlayList.find({ user: id })
          .populate("videos")
          .populate("user");
      } catch (error) {
        console.error(error);
        throw Error("this id is not exists");
      }
    },
  },
};
