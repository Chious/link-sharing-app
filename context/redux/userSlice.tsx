import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Data = {
  email?: string;
  first_name?: string;
  last_name?: string;
  image?: string;
  links?: { platform: string; link: string }[]; // Update the type definition of the links property
  slug?: string;
};

const initialState: { user: Data } = { user: {} }; // Initialize the links property as an empty array

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialUser: (state, action: PayloadAction<Data>) => {
      state.user = action.payload;
    },
    addLink: (state) => {
      state.user = {
        ...state.user,
        links: [...state.user.links, { platform: '', link: '' }],
      };
    },
    updateProfile: (state, action: PayloadAction<Data>) => {
      const { email, first_name, last_name, image } = action.payload;

      state.user = {
        ...state.user,
        email: email || state.user.email,
        first_name: first_name || state.user.first_name,
        last_name: last_name || state.user.last_name,
        image: image || state.user.image,
      };
    },
  },
});

export const { initialUser, addLink, updateProfile } = userSlice.actions;

export default userSlice.reducer;
