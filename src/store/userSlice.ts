import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
    id: string
    email: string;
    name: string;
}

export interface UserState {
    email: string;
    name: string;
    picture: string
    token: string | null
}

const initialState: UserState = {
    email: '',
    name: '',
    picture: '',
    token: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.token = action.payload.token
            state.picture = action.payload.picture
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        clearToken(state) {
            state.token = null;
        },
    },
});

export const { setUser, setToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
