import * as React from "react";
import { InfoItem } from "../components/info-content-item/info-item.tsx";



export const InfoContainer=()=>{

    return <>
    <InfoItem buttonName='Work Experience' infoContent='WE'/>
    <InfoItem buttonName='Skills' infoContent='Sk'/>
    <InfoItem buttonName='Education' infoContent='Ed'/>
    <InfoItem buttonName='Projects' infoContent='Pr'/>
    </>;
};