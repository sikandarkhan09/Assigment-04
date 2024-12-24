import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { username, password, email, phoneNumber } = action.payload;
      state.username = username;
      state.password = password;
      state.email = email;
      state.phoneNumber = phoneNumber;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
