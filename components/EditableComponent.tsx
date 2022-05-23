import {
  changableProp,
  checkableFunction,
  callableFunction,
} from "../constants/editConstants";
import ContextMenu from "./primitives/ContextMenu";
import Tooltip from "./primitives/Tooltip";
import React, { useState } from "react";
interface EditableComponentProps extends React.HTMLAttributes<HTMLElement> {
  changableProps: changableProp[];
  callableFunctions?: callableFunction[];
  checkableFunctions?: checkableFunction[];
  children: React.ReactNode;
  tooltip?: string;
  designSystem?: string; // TODO: add type later
  source?: string;
}

function EditableComponent({
  changableProps,
  callableFunctions,
  checkableFunctions,
  children,
  tooltip,
  designSystem,
  source,
}: EditableComponentProps) {
  return (
    <ContextMenu
      callableFunctions={callableFunctions}
      checkableFunctions={checkableFunctions}
      changableProps={changableProps}
      source={source}
    >
      {tooltip && <Tooltip trigger={tooltip}>{children}</Tooltip>}
      {!tooltip && children}
    </ContextMenu>
  );
}

export default EditableComponent;
