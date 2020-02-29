import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

function useFlip(initialVal = true) {
  const [isFacingUp, setIsFacingUp] = useState(initialVal);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  }
  return [isFacingUp, flipCard];
}

  //hooks cannot be async 
  function useAxios(URL) {
    const [cards, setCards] = useState([]);
    //async functions must be inside the hook
    const getCards = async () => {
      const response = await axios.get(URL);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  }
  return [cards, getCards];
}


export { useFlip, useAxios }