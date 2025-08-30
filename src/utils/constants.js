export const Netflix_logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVTAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const LOGIN_BACKGROUNDIMG = "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_medium.jpg"
export const photoURL="https://avatars.githubusercontent.com/u/88936961?s=400&u=3ba51bb1f98092729d1a6065bbfd3f2950fcd8bd&v=4"
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Use the environment variable to keep your key secret
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
  }
};

// You can also add other constants here
export const TMDB_IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier:"en",name: "English"}, {identifier:"hindi",name: "Hindi"}, {identifier:"spanish",name: "Spanish"}]

