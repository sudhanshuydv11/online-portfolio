import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Avatar } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ClosedInfoItemButton } from '../closed-info-item-button/closed-info-item.tsx';

type accordianIndexType=number[]| undefined;

export const InfoItem=()=>{
    const  [isShowContent, setIsShowContent] =useState(false);
    const [defaultIndex, setDefaultIndex]=useState<accordianIndexType>([]);

    const handleClick=()=>{
        setIsShowContent(false);
        setDefaultIndex([]);
    };

    const handleClickCustomInfoButton=()=>{
        setIsShowContent(true);
        setDefaultIndex([0]);
    };

return <>
{isShowContent
?<Accordion defaultIndex={defaultIndex} allowToggle>
    <AccordionItem>
        <AccordionButton onClick={ handleClick }>
        <Avatar/>
        </AccordionButton>
        <AccordionPanel>
            test text
        </AccordionPanel>
    </AccordionItem>
</Accordion>
:<ClosedInfoItemButton onClick={handleClickCustomInfoButton}/>
}
</>;
};
