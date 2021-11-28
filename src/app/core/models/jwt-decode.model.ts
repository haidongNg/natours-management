export interface JWTDecode {
  id: string;
  name: string;
  roles: string[];
  iat: number;
  exp: number;
}
