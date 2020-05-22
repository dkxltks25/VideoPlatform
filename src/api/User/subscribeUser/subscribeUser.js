import { User } from "../../../model";

export default {
  Mutation: {
    subscribeUser: async (_, args, { request }) => {
      const { id } = args;
      const { user } = request;
      try {
        const TargetUser = await User.findById({ _id: id });
        //구독중인지 아닌지
        const TargetUserIsSubscribed = TargetUser.subscriber.indexOf(user.id) === -1 ? true : false ;
        
        if(TargetUserIsSubscribed){
            TargetUser.subscriber.push(user.id);
            user.subscribing.push(id);
        }else{
            TargetUser.subscriber.pull(user.id);
            user.subscribing.pull(id);
        }
        TargetUser.save();
        user.save();
      } catch (error) {
        console.log(error);
        throw Error("Wrong id");
      }

      return true;
    },
  },
};
