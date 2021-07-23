import { useContext, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import useFirestore from "hooks/useFirestore";
import { AuthContext } from "context/AuthProvider";

import DetailContent from "./pages/DetailContent";

DetailMain.propsTypes = {
  product: PropTypes.object,
};

DetailMain.defaultProps = {
  product: null,
};

const dataOptions = [
  {
    content: "Buy 2 get 15 percent off",
    percentOff: 15,
  },
  {
    content: "Buy 3 get 25 percent off",
    percentOff: 25,
  },
  {
    content: "Buy 5 get 50 percent off",
    percentOff: 50,
  },
];

function DetailMain(props) {
  const { product } = props;
  const { price } = product || 0;

  const [fixedPrice, setFixedPrice] = useState(price);
  const [prevId, setPrevId] = useState("");
  const [qnt, setQnt] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("");

  const params = useParams();
  const { id } = params;
  const paramsName = params.name.replace("-", " ");

  const { addToFirestore } = useFirestore();
  const { user } = useContext(AuthContext) ?? "";

  const handleFuncs = {
    handleOptionChange: (e, percentOff) => {
      switch (percentOff) {
        case 15:
          setQnt(2);
          break;
        case 25:
          setQnt(3);
          break;
        case 50:
          setQnt(5);
          break;
        default:
          return price;
      }

      setSelectedRadio(e.target.value);
    },
    handleDecreaseQnt: () => {
      qnt > 1 && setQnt(qnt - 1);
    },
    handleIncreaseQnt: () => {
      setQnt(qnt + 1);
    },
  };

  // whenever change product then reset price
  useLayoutEffect(() => {
    if (id !== prevId) {
      setQnt(1);
      setFixedPrice(price || 0 * qnt);
      setSelectedRadio(null);
    } else if (qnt >= 5) {
      setFixedPrice((price * qnt - price * 5 * 0.5).toFixed(2));
    } else if (qnt === 3) {
      setFixedPrice((price * 3 * 0.75).toFixed(2));
      setSelectedRadio("Buy 3 get 25 percent off");
    } else if (qnt === 2) {
      setFixedPrice((price * 2 * 0.85).toFixed(2));
      setSelectedRadio("Buy 2 get 15 percent off");
    } else {
      setFixedPrice(((price || 0) * 1).toFixed(2));
      setSelectedRadio(null);
    }

    setPrevId(id);
  }, [price, qnt, id, prevId]);

  const handleAddToFirestore = (type, product) => {
    if (!product || !user.uid) return;

    const info = { type, productInfo: { ...product, qnt: qnt } };

    addToFirestore(user.uid, info);
  };

  return (
    <DetailContent
      paramsName={paramsName}
      dataOptions={dataOptions}
      handleFuncs={handleFuncs}
      selectedRadio={selectedRadio}
      product={product}
      price={fixedPrice || price}
      qnt={qnt}
      handleAddToFirestore={handleAddToFirestore}
    />
  );
}

export default DetailMain;
