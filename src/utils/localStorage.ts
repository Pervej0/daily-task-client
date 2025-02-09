export const setToLocalStorage = (key: string, token: string) => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return localStorage.setItem(key, token);
  }
};

export const getTokenFromLocalStorage = (key: string) => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    const token = localStorage.getItem(key);
    return token;
  }
};

export const removeFromLocalStorage = (key: string) => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    return localStorage.removeItem(key);
  }
};
