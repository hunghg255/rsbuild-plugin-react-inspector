export interface IAuth {
  loading?: boolean;
  token: string | null;
  refreshToken?: string | null;
  expiredTime: number;
}

export const getAuthLocalStorage = (props?: IAuth) => {
  try {
    return 2;
  } catch {}
};
