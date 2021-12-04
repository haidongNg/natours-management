export interface JWTProfile {
  id: string;
  name: string;
  roles: string[];
  iat: number;
  exp: number;
}
