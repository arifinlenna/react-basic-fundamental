import { atom, selector } from "recoil";


const authUser = selector({
    key: 'authUser', // unique ID (with respect to other atoms/selectors)
    get: () => {
      const text = 'arifin';
  
      return text.length;
    },
});

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

const loadingState = atom({
  key: 'loadingState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})

const themeState = atom({
  key: 'themeState', // unique ID (with respect to other atoms/selectors)
  default: 'dark', // default value (aka initial value)
})

const getTheme = selector({
  key:'getTheme',
  get:()=>{
    return themeState;
  }
})

const Authenticated = atom({
  key: 'Authenticated', // unique ID (with respect to other atoms/selectors)
  default: {
    check: true,
    user: {
      name: "Nur Arifin"
    }
  },
})



export {authUser,loadingState, textState,themeState,getTheme,Authenticated}