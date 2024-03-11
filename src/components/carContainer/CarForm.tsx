import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {ICar} from "../../interfaces";
import {carActions} from "../../store";

const CarForm = () => {

    const {register, reset, handleSubmit, setValue} = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const save: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.create({car}))
        reset()
    }

    const update: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.updateById({car}));
        dispatch(carActions.setCarForUpdate(null));
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};