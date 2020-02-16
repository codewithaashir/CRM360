const baseUrl='http://localhost:8000/api/';
export const Apis={
    Login:baseUrl+'login',
    Register:baseUrl+'register',
    Amenities:baseUrl+'amenities_list'
}
export const HeaderSend = {
    SetHeaders: token => {
      const headers = {
        'Content-Type':'application/json',
        Accept: 'application/json',
        Authorization:'Bearer ' +token,
      };
      return headers;
    },
  };;