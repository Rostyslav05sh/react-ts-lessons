import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/setStateType";

interface IProps {
    changeTrigger: () => void
    setCarForUpdate: ISetState<ICar>
    carForUpdate: ICar
}

const CarForm: FC<IProps> = ({changeTrigger, setCarForUpdate, carForUpdate}) => {

    const {reset, register, handleSubmit , setValue} = useForm<ICar>();

    useEffect(() => {
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);
    const save: SubmitHandler<ICar> = async (car) => {
      await carService.create(car)
        changeTrigger()
        reset()
    }

    const update:SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        changeTrigger()
        setCarForUpdate(null)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CarForm};