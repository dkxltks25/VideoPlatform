import { PlayList } from "../../../model";
export default {
  Mutation: {
    createPlayList: async (_, args, { request }) => {
      const { name } = args;
      const { user } = request;
      try {
        const NewPlayList = await PlayList.create({ name, user: user.id });
        user.playlists.push(NewPlayList.id);
        user.save();
        return NewPlayList;
      } catch (error) {
        console.log(error);
        throw Error("wrong name or user token");
      }
    },
  },
};
