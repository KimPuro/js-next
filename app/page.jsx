'use client';

import React from 'react';
import { useState } from 'react';
import LoginPage from "./pages/users/login/page";
import JoinPage from "./pages/users/join/page";
export default function Home() {
    const [showJoin, setShowJoin] = useState(false);

    const handleJoin = () => {
setShowJoin(!showJoin);
    }


  return (
      <div>
          {showJoin ? (
              <div>
                  <JoinPage id="join-page"/>
                  <button onClick={handleJoin} style={{}}>돌아가기</button>
              </div>
          ) : (
              <div>
                  <LoginPage id="login-page"/>
                  <button onClick={handleJoin}>회원 가입</button>
              </div>
          )}
      </div>
  )


}
