import {
  changableProp,
  checkableFunction,
  callableFunction,
} from "../constants/editConstants";
import ContextMenu from "./primitives/ContextMenu";
import Tooltip from "./primitives/Tooltip";
import React, { useContext, useEffect, useState } from "react";
import Toast from "./primitives/Toast";
import { SettingContext } from "../pages/_app";
interface EditableComponentProps extends React.HTMLAttributes<HTMLElement> {
  changableProps: changableProp[];
  callableFunctions?: callableFunction[];
  checkableFunctions?: checkableFunction[];
  children: React.ReactNode;
  designSystem?: string; // TODO: add type later
  source?: string;
  showTooltip?: boolean;
  tooltip?: string;
  toolTipColor?: string;
  tooltipOffset?: number;
  triggerAsChild?: boolean;
}

function EditableComponent({
  changableProps,
  callableFunctions,
  checkableFunctions,
  children,
  tooltip,
  designSystem,
  source,
  showTooltip = true,
  toolTipColor,
  tooltipOffset,
  triggerAsChild,
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
  const useTooltip = useContext(SettingContext).settings.displayTooltips;
  const isEditable = useContext(SettingContext).settings.enableEditing;
  return (
    <>
      {isEditable ? (
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
            {tooltip && useTooltip ? (
              <Tooltip
                toolTipColor={toolTipColor}
                sideOffset={tooltipOffset}
                trigger={tooltip}
                showTooltip={showTooltip}
                triggerAsChild={triggerAsChild}
              >
                {children}
              </Tooltip>
            ) : (
              <Tooltip
                trigger={null}
                showTooltip={false}
                triggerAsChild={triggerAsChild}
              >
                {children}
              </Tooltip>
            )}
          </Toast>
        </ContextMenu>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default EditableComponent;
