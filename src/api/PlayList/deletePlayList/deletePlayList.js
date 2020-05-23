import { PlayList } from "../../../model";

const ITEM = "ITEM";
const LIST = "LIST";

export default {
  Mutation: {
    deletePlayList: async (_, args, { request }) => {
      const { playListId, TARGET, ids } = args;
      const { user } = request;
      if (TARGET === ITEM) {
        const findPlayList = await PlayList.findOne({ _id: playListId });
        ids.map(async (id) => {
          findPlayList.videos.pull({ id });
          findPlayList.save();
        });
      } else if (TARGET === LIST) {
        ids.map(async (id) => {
          await PlayList.deleteOne({id});
          user.playLists.pull({id});
          user.save();
          
        });
      } else {
        throw Error("not Exists TARGET");
      }
    },
  },
};
