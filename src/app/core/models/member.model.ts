export interface IMember {
  email?: string;
  roles?: string[];
  token?: string;
}


export interface IMemberLogin extends IMember {
  password: string;
}
