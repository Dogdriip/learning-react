import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const WithRouterSample = ({
  location,
  match,
  history,
}: RouteComponentProps) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly
      ></textarea>
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly
      ></textarea>
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
