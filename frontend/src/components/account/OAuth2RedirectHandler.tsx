import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../../constant";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5a42bf0c5fa83ebb1264a3f8fe77922e56b53101
const OAuth2RedirectHandler = () => {

  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");

  
  axios.post({BACKEND_URL}+"/api/auth/login/social", {
    params: {
      code: Authcode
    }
  })
  .then(function (response) {
       // response  
       console.log("정상실행");
       console.log(response);

  }).catch(function (error) {
      // 오류발생시 실행
      console.log("error발생");
       console.log(error);
  })
 
   return (
    <>
      <span>대기중</span>
    </>
  );
};
=======
<<<<<<< HEAD
=======
>>>>>>> ac944d20bcc4317d4b4d62d96820f2a79dcb489d
=======
>>>>>>> 5a42bf0c5fa83ebb1264a3f8fe77922e56b53101
function OAuth2RedirectHandler() {
  // 인가코드
  let Authcode = new URL(window.location.href).searchParams.get("code");
  console.log(Authcode);

  axios
    .get(BACKEND_URL + "/api/auth/login/kakao", {
      params: {
        code: Authcode,
      },
    })
    .then(function (response) {
      // response
      console.log("정상실행");
      console.log(response);
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.log("error발생");
      console.log(error);
    });

  return (
    <>
      <span>대기중</span>
      <p>code: {Authcode}</p>
    </>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ac944d20bcc4317d4b4d62d96820f2a79dcb489d
=======
=======
>>>>>>> 5a42bf0c5fa83ebb1264a3f8fe77922e56b53101
>>>>>>> ac944d20bcc4317d4b4d62d96820f2a79dcb489d

export default OAuth2RedirectHandler;
