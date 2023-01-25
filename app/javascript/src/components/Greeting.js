import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/reducer/greetingsReducer';

const Greeting = () => {
  const greetingsArr = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, []);

  return (
    <div>
      <h1>Here's your greeting:</h1>
      <p>{greetingsArr.text}</p>
    </div>
  );
};

export default Greeting;
