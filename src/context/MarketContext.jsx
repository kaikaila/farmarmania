import { createContext, useState, useEffect } from "react";
const MarketContext = createContext();

export const MarketProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [MarketEdit, setMarketEdit] = useState({
    item: {},
    edit: false,
  });
  const [Market, setMarket] = useState([]);
  useEffect(() => {
    console.log(123);
    fetchMarket();
  }, []);

  const fetchMarket = async () => {
    const response = await fetch(`/Market?_sort=id&_order=desc`);
    const data = await response.json();

    console.log(data);
    setMarket(data);
    setIsLoading(false);
  };
  // set item to be updated
  const editMarket = (item) => {
    setMarketEdit({
      item,
      edit: true,
    });
  };
  const closeEditMarket = (MarketEdit) => {
    MarketEdit.edit = false;
  };
  // delete Market
  const deleteMarket = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // .filter 是一个high order function
      // ${}意思是在一个模板字符串中加入表达式``
      await fetch(`/Market/${id}`, { method: "DELETE" });
      setMarket(Market.filter((item) => item.id !== id));
    }
  };

  const updateMarket = async (id, updItem) => {
    const response = await fetch(`/Market/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setMarket(
      //下文中{ ...item, ...updItem }的意思是合并这两项，如果有重复的属性，后者覆盖前者
      Market.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    //目前存在一个问题，一旦开始编辑一个Market之后，就一直在编辑它，不能添加新的item
    // 该问题已修正，只需要在完成updateMarket调用后将MarketEdit.edit更正为false即可
  };

  const addMarket = async (newMarket) => {
    // send to backend
    // no need for localhost because proxy is set
    const response = await fetch("/Market", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newMarket),
    });

    const data = await response.json();
    // 以下是使得UI显示了增加Market
    // 这是用uuid这个包给newMarket增加一个instance variable，即id
    // newMarket.id = uuvidv4();
    // 因为Market本身是immutable，所以只能复制一遍然后加上新加的

    setMarket([data, ...Market]);
  };

  return (
    <MarketContext.Provider
      value={{
        Market,
        isLoading,
        MarketEdit,
        addMarket,
        editMarket,
        closeEditMarket,
        updateMarket,
        setMarket,
        deleteMarket,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketContext;
