import { PlayList } from "../../../model";

export default {
  Mutation: {
    editPlayList: async (_, args, { request }) => {
      const { user } = request;
      const { id, name } = args;
      try {
        const findPlayList = await PlayList.findById({ _id: id });
        if (user.id === findPlayList.user.toString()) {
          findPlayList.name = name;
          findPlayList.save();
          console.log(findPlayList.populate("user").populate("video"));
          return findPlayList.populate("video");
        } else {
          throw Error("this user is not correct");
        }
        console.log(findPlayList);
      } catch (error) {
        console.log(error);
        throw Error("playList id not Exists");
      }

      return;
    },
  },
};
