import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IAuth, IUser} from "../../interfaces";
import {apiService, authService} from "../../services";
import {urls} from "../../constants";
import {AxiosError} from "axios";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import * as trace_events from "trace_events";

interface IState {
    registerError: string,
    loginError: string,
    currentUser: IUser
}

const initialState: IState = {
    registerError: null,
    loginError: null,
    currentUser: null
};

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const login = createAsyncThunk<IUser, {user: IAuth}>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
            .addCase(register.rejected, state => {
                state.registerError = 'Username already exist'
            })
            .addCase(login.rejected, state => {
                state.loginError = 'Incorrect username or password'
            })
            .addCase(me.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
            .addMatcher(isFulfilled(register, login), state => {
                state.loginError = null
                state.registerError = null
            })
    }
})

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    login,
    register,
    me
}

export {
    authActions,
    authReducer
}