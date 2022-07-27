export const loadFromLocalStorage = key => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

export const writeToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
