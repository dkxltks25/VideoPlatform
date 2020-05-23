import { Video } from "../../../model";

export default {
  Query: {
    searchVideos: async (_, args) => {
      const { term } = args;
      try {
        return await Video.find({
          title: { $regex: term, $options: "i" },
        });
      } catch (error) {
        console.log(erorr);
        throw Error("wrong");
      }
    },
  },
};
