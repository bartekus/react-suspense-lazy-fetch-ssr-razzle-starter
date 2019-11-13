import React from 'react';
import useFetch from "../../hooks/useFetch";

const FetchingTodosComponent = () => {
  const response = useFetch('https://jsonplaceholder.typicode.com/todos');
  return <p>The server responded with: {JSON.stringify(response)}</p>;
};

export default FetchingTodosComponent;
