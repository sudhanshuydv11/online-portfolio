import React from "react";
import { ZoomButton } from "./zoom-button.tsx";
import { RotatingButton } from "./rotating-button.tsx";
import  './buttons.scss';
import { BUTTON_TYPES } from "../../constants/custom-buttons.ts";
import { ButtonNameType } from "../../types/types.ts";

type componentsMappedToString={
    [key:string]: (props: ButtonNameType)=> React.JSX.Element
};

type CustomButtonType=ButtonNameType&{
    buttonType: string
}

const BUTTON_MAPPER: componentsMappedToString = {
    [BUTTON_TYPES.ZOOM]: ZoomButton,
    [BUTTON_TYPES.ROTOR]: RotatingButton
    };

export const CustomButton=({ buttonType, ...restProps } : CustomButtonType) => {

const Button=BUTTON_MAPPER[buttonType];

return <Button {...restProps}/>;

};