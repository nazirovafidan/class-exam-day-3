import { useContext } from 'react';
import { BasketContext } from '../../context/basketContext';

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  return (
    <div>
      <ul>  
        {basket &&
          basket.map((basketItem) => {
            return (
              <li key={basketItem.id}>
                <span>
                  {basketItem.title} | <b>{basketItem.count}</b>
                </span>
                <button
                  onClick={() => {
                    const foundItem = basket.find((x) => x.id == basketItem.id);
                    if (foundItem.count > 1) {
                      foundItem.count -= 1;
                      setBasket([...basket]);
                      localStorage.setItem("basket", JSON.stringify(basket));
                    } else {
                      let updatedBasket = basket.filter(
                        (x) => x.id != basketItem.id
                      );
                      setBasket([...updatedBasket]);
                      localStorage.setItem(
                        "basket",
                        JSON.stringify(updatedBasket)
                      );
                    }
                  }}
                  style={{ padding: "5px" }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    let found = basket.find((x) => x.id == basketItem.id);
                    found.count += 1;
                    setBasket([...basket]);
                    localStorage.setItem("basket", JSON.stringify(basket));
                  }}

                >
                  +
                </button>
                <button
                  onClick={() => {
                    let updatedBasket = basket.filter(
                      (x) => x.id != basketItem.id
                    );
                    setBasket([...updatedBasket]);
                    localStorage.setItem(
                      "basket",
                      JSON.stringify(updatedBasket)
                    );
                  }}
                >
                  remove
                </button>
              </li>
            );
          })}
      </ul>
      <hr />
      <button
        onClick={() => {
          if (window.confirm("are you sure to order?")) {
            setBasket([]);
            localStorage.setItem("basket", JSON.stringify([]));
          }
        }}
      >
        order
      </button>
    </div>
  );
}

export default Basket