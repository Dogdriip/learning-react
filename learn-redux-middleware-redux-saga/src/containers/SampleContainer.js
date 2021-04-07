import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = () => {
  const { loading, post, users } = useSelector((state) => state.sample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loading.GET_POST}
      loadingUsers={loading.GET_USERS}
    />
  );
};

export default SampleContainer;
