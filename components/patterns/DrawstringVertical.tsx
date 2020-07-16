/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold } from "./PatternElements";
import { Pattern } from "../../types/Pattern";

const DrawstringVertical = (props: Pattern) => (
  <React.Fragment>
    <Cutline height={props.height} width={props.width} />
    <Sewline
      allowance={props.allowance}
      fold={props.fold}
      height={props.height}
      webbing={props.webbing}
      width={props.width}
    />
    <Fold fold={props.fold} height={props.height} width={props.width} />
  </React.Fragment>
);

export default DrawstringVertical;
