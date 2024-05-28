import React, { useState } from 'react';
import { InfoItemButton } from '../info-item-button/info-item-button.tsx';
import './info-item-styles.scss';
import { ButtonNameType } from '../../types/types.ts';

type InfoItemType=ButtonNameType &{
    infoContent: string
}

export const InfoItem=({infoContent,...restProps}: InfoItemType)=>{
    const [isOpen, setIsOpen]=useState(false);
    const handleClick=()=>{
       setIsOpen(!isOpen);
    };

return <div className='accordian'>
<InfoItemButton {...restProps}  onClick={handleClick}/>
<div className={`accordian-animation-div${ isOpen ? '--open' : '--close' } `}>{infoContent}</div>
</div>;
};
