import React from 'react';
import { BUTTON_TYPES } from '../../constants/custom-buttons.ts';
import { CustomButton } from '../button/custom-buttons.tsx';

type voidFunction=()=> void;

export const ClosedInfoItemButton=({onClick}:{ onClick: voidFunction })=>{

return <>
<button onClick={onClick}>
<CustomButton name={BUTTON_TYPES.ZOOM}/>
</button>
</>;
};