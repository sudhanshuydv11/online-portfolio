import React from "react";
import { ZoomButton } from "./zoom-button.tsx";
import { RotatingButton } from "./rotating-button.tsx";
import  './buttons.scss';
import { BUTTON_TYPES } from "../../constants/custom-buttons.ts";

type buttonInterface={
    [key:string]: ()=> React.JSX.Element
};

const BUTTON_MAPPER: buttonInterface = {
    [BUTTON_TYPES.ZOOM]: ZoomButton,
    [BUTTON_TYPES.ROTOR]: RotatingButton
    };

export const CustomButton=({ name } : { name : string }) => {

const Button=BUTTON_MAPPER[name];

return <Button/>;

};