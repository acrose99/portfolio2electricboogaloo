import {
  changableProp,
  checkableFunction,
  callableFunction,
} from "../constants/editConstants";
import ContextMenu from "./primitives/ContextMenu";
import Tooltip from "./primitives/Tooltip";
import React, { useEffect, useState } from "react";
import Toast from "./primitives/Toast";
interface EditableComponentProps extends React.HTMLAttributes<HTMLElement> {
  changableProps: changableProp[];
  callableFunctions?: callableFunction[];
  checkableFunctions?: checkableFunction[];
  children: React.ReactNode;
  tooltip?: string;
  designSystem?: string; // TODO: add type later
  source?: string;
  tooltipOffset?: number;
}

function EditableComponent({
  changableProps,
  callableFunctions,
  checkableFunctions,
  children,
  tooltip,
  designSystem,
  source,
  tooltipOffset,
}: EditableComponentProps) {
  const [open, setOpen] = useState(false);
  const [activeToast, setActiveToast] = useState(null);
  const timerRef = React.useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  useEffect(() => {
    if (activeToast) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        setActiveToast(null);
      }, 3000);
    }
  }, [activeToast]);
  if (callableFunctions) {
    callableFunctions = callableFunctions.map((callableFunction) => {
      return {
        icon: callableFunction.icon,
        label: callableFunction.label,
        toastLabel: callableFunction.toastLabel,
        onClick: () => {
          callableFunction.onClick();
          setActiveToast(callableFunction.toastLabel);
        },
      };
    });
  }
  return (
    <ContextMenu
      callableFunctions={callableFunctions}
      checkableFunctions={checkableFunctions}
      changableProps={changableProps}
      designSystem={designSystem}
      source={source}
    >
      <Toast
        title={activeToast}
        open={open}
        setOpen={() => {
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(false);
          }, 1000);
        }}
      >
        {tooltip && (
          <Tooltip sideOffset={tooltipOffset} trigger={tooltip}>
            {children}
          </Tooltip>
        )}
        {!tooltip && children}
      </Toast>
    </ContextMenu>
  );
}

export default EditableComponent;
