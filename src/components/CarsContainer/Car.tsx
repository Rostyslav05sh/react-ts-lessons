import {FC, PropsWithChildren} from "react";
import {ICar} from "../../interfaces";

interface IProps extends PropsWithChildren {
car:ICar
}

const Car: FC<IProps> = ({car}) => {

    const {id, price, brand, year, photo} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};