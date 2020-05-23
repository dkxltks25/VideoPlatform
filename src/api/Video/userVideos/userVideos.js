import { Video } from "../../../model"


export default {
    Query:{
        userVideos: async(_,args)=>{
            const {id} =args;
            try{
                const video = Video.find({user:id}).sort({createAt:-1});
                return video;
            }catch(error){
                console.log(error);
                throw Error("This chanel is not Exists");
            }
        }
    }
}