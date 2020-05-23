import { Video } from "../../../model";

export default {
  Mutation: {
    uploadVideo: async (_, args, { request }) => {
      const { title, description, thumbnail, playtime, category } = args;
      const { user } = request;
      try {
        return await Video.create({
          title,
          description,
          thumbnail,
          playtime,
          category,
          user: user.id,
        });
      } catch (error) {
        console.log(error);
        throw Error("wrong");
      }
    },
  },
};
