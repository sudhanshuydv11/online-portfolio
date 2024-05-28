import React from "react";
import { ButtonNameType } from "../../types/types";

export const ZoomButton=({buttonName}:ButtonNameType)=>{

    return<>
      <div className="button-wrap-2">
    <a className="circle">{buttonName}</a>
    <div className="outer-circle"></div>
  </div>
    </>;
};