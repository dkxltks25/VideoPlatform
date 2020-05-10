// 
// searchUser 는 사용자 조회이며 테스트를 위한 api이다 
import { User } from "../../../model";
export default {
  Query: {
    searchUser: async (_, args) => {
      const { term } = args;
      return await User.find({ $text: { $search: term } });
    },
  },
};
