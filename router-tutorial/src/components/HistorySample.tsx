import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

const HistorySample = ({ history }: RouteComponentProps) => {
  // 뒤로 가기
  const handleGoBack = () => {
    history.goBack();
  };
  // 홈으로 이동
  const handleGoHome = () => {
    history.push("/");
  };

  useEffect(() => {
    // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
    const unblock = history.block("정말 떠나실 건가요?");
    // 컴포넌트가 언마운트되면 질문을 멈춤
    return () => unblock();
  });

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
