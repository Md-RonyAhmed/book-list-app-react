export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
