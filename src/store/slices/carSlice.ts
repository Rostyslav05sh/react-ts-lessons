import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car);
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const updateById = createAsyncThunk<ICar, { carId: number, car: ICar }>(
    'updateById/carSlice',
    async ({car: car,carId}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(carId, car);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteById = createAsyncThunk<void, number>(
    'deleteById/carSlice',
    async (id, {rejectWithValue}) => {
        try {
            await carService.deleteById(id)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addMatcher(isFulfilled(create), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(updateById), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(deleteById), state => {
                state.trigger = !state.trigger
            })
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
}

export {
    carReducer,
    carActions
}