import React from 'react';
import { BUTTON_TYPES } from '../../constants/custom-buttons.ts';
import { CustomButton } from '../button/custom-buttons.tsx';
import { ButtonNameType } from '../../types/types.ts';

type InfoItemButton = ButtonNameType & {
    onClick: ()=>void
}

export const InfoItemButton=({onClick,...restProps}: InfoItemButton)=>{

return <>
<button onClick={onClick}>
<CustomButton {...restProps} buttonType={BUTTON_TYPES.ZOOM}/>
</button>
</>;
};