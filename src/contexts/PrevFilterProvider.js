import { createContext, useState } from "react";

export const PrevFilterContext = createContext();

function PrevFilterProvider({ children }) {
  const [prevName, setPrevName] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);
  const [prevRate, setPrevRate] = useState(null);
  const [prevSearch, setPrevSearch] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedDrop, setSelectedDrop] = useState("Featured");
  const [nameActive, setNameActive] = useState(null);

  const handlePrevious = (type, value) => {
    switch (type) {
      case "name":
        setPrevName(value);
        setPrevPrice(null);
        setPrevRate(null);
        setSelectedDrop("Featured");
        break;
      case "price":
        setPrevPrice(value);
        setPrevRate(null);
        setSelectedDrop("Featured");
        break;
      case "rate":
        setPrevRate(value);
        setPrevPrice(null);
        setSelectedRadio(null);
        setSelectedDrop("Featured");
        break;
      case "search":
        setPrevName(null);
        setPrevPrice(null);
        setPrevRate(null);
        setSelectedRadio(null);
        setSelectedDrop("Featured");
        setNameActive(null);
        break;
      case "sort":
        setPrevPrice(null);
        setPrevRate(null);
        setSelectedRadio(null);
        setSelectedDrop("Featured");
        break;
      case "pagination":
        setPrevName(null);
        setSelectedDrop("Featured");
        break;
      case "drop":
        setSelectedDrop(value);
        break;
      default:
        break;
    }

    return {
      prevName,
      prevPrice,
      prevRate,
      prevSearch,
      selectedRadio,
      selectedDrop,
      nameActive,
      setPrevName,
      setPrevPrice,
      setPrevRate,
      setPrevSearch,
      setSelectedRadio,
      setSelectedDrop,
      setNameActive,
    };
  };

  return (
    <PrevFilterContext.Provider value={{ handlePrevious }}>
      {children}
    </PrevFilterContext.Provider>
  );
}

export default PrevFilterProvider;
