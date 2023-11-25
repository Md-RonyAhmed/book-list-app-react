export const getDataFromLocalStorage = () => {

  const data = localStorage.getItem("books");
  return JSON.parse(data) || []
};
