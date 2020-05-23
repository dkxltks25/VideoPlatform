import { isAuthenticated } from "../../../middlewares";
import { PlayList } from "../../../model";
export default {
  Mutation: {
    addPlayList: async (_, args, { request }) => {
      isAuthenticated(request);
      const { videoid, playListId } = args;
      const { user } = request;
      try {
        const findPlayList = await PlayList.findOne({ _id: playListId });
        const isExistsVideoInPlayList = findPlayList.videos.indexOf(videoid) === -1 ? false :true;
        console.log(isExistsVideoInPlayList); 
        if(isExistsVideoInPlayList){
            throw Error("is Exsists Video")
        }else{
            findPlayList.videos.push(videoid);
            findPlayList.save();
        }
      } catch (error) {
        console.log(error);
        throw Error("not Exists playList");
      }
    },
  },
};
