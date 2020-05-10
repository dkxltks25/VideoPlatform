//
// createAccount는 사용자 계정을 만들기 위한 메서드입니다.
// username,email,password,gender,avatar등으로 가장 필요한 정보들입니다.
// 동작과정 사용자 이메일이 있는지 먼저 확인합니다.
// 있는 경우 "이미 존재하는 이메일입니다."라고 알려주며 에러를 내뱉습니다.
// 없는 겨웅 새로운 계정을 만들고 해당하는 정보들을 리턴해줍니다.

import { User } from "../../../model";
export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, password, gender, avatar } = args;
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        throw Error("this email is exisits");
      }
      const newUser = await User.create({
        username,
        email,
        password,
        gender,
        avatar,
      });
      return newUser;
    },
  },
};
