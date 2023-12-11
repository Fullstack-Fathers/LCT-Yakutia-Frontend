export const authStatus = () => {
  const getStatus = () => {
    return localStorage.getItem('auth') === 'true';
  };

  const setStatus = (status) => {
    localStorage.setItem('auth', status ? 'true' : 'false');
  };

  return { getStatus, setStatus };
};
