# videoPlatform

유튜브 클론코딩 + 동영상스트리밍( node js + mongodb + graphql + react + reactNative)

# api 기능 리스트

1.  [User] 회원가입 - createAccount [O]
2.  [User] 이메일인증 - requestSecret #랜덤 문자열 전송 [O]
3.  [User] 로그인 - loginUser [O]
4.  [User] 사용자 정보 변경 - editProfile [O]
5.  [User] 비밀번호 찾기 - findPassword [X]
6.  [User] 계정 삭제 - deleteUser [O]
7.  [User] 사용자(채널)조회 - searchUser [X]
8.  [User] 채널구독/취소 - subscribeUser #toggle [O]
9.  [Video] 동영상조회 - searchVideo [X]
10. [Video] 동영상업로드 - uploadVideo [X]
11. [Video] 동영상삭제 - deleteVideo [X]
12. [Video] 동영상전체보기 - videos [x]
13. [Video] 동영상수정 - editVideo # 동영상 재업로드 불가 [X]
14. [Playlist] 재생목록추가 - addPlayList [X]
15. [Playlist] 재생목록삭제 - deletePlayList [X]
16. [Playlist] 재생목록수정 - editPlayList [X]
17. [Playlist] 재생목록조회 - searchPlayList [X]
18. [Like] 좋아요 - like [X]
19. [UnLike] 싫어요 - unlike [X]
20. [Comment] 댓글달기 - addComment [X]
21. [Comment] 댓글삭제 - removeComment [X]
22. [Comment] 댓글수정 - editComment [X]
23. [Post] 게시물작성 - uploadPost[x]
24. [Post] 게시물수정 - editPost[x]
25. [Post] 게시물삭제 - deletePost[x]
26. [Post] 게시물보기 - posts[x]

# 데이터베이스 모델링

![ex_screenshot](./modeling1.png)
