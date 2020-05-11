import { User } from "../../../model";

export default {
  Mutation: {
    deleteUser: async (_, args) => {
      const { id } = args;
      // 사용자 본인 인증 로직 필요....
      //테스트 로직
    },
  },
};
