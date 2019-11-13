import React from 'react';
import useFetch from "../../hooks/useFetch";

const FetchingCommentsComponent = () => {
  const response = useFetch('https://jsonplaceholder.typicode.com/comments');
  return <p>The server responded with: {JSON.stringify(response)}</p>;
};

export default FetchingCommentsComponent;
