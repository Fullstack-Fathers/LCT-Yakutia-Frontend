export const useAuth = (): {
  initSetup: (accessToken: string) => void;
  getStatus: () => boolean;
  setStatus: (status: boolean) => void;
  decryptionUserId: () => string;
  decryptionUserRole: () => string;
} => {
  const initSetup = (accessToken: string): void => {
    localStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('userAuthentication', 'true');
  };

  const getStatus = (): boolean => {
    return sessionStorage.getItem('userAuthentication') === 'true';
  };

  const setStatus = (status: boolean): void => {
    sessionStorage.setItem('userAuthentication', status ? 'true' : 'false');
  };

  const tokenParser = (token: string | null): string => {
    return token ? token.split('.')[1] : '';
  };

  const checkToken = (): boolean => {
    return localStorage.getItem('accessToken') ? true : false;
  };

  const decryptionUserId = (): string => {
    return checkToken()
      ? JSON.parse(atob(tokenParser(localStorage.getItem('accessToken'))))
          .userId
      : '';
  };

  const decryptionUserRole = (): string => {
    return checkToken()
      ? JSON.parse(atob(tokenParser(localStorage.getItem('accessToken')))).role
      : '';
  };

  return {
    initSetup,
    getStatus,
    setStatus,
    decryptionUserId,
    decryptionUserRole,
  };
};
