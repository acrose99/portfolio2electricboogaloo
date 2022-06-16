/* Constants for edit actions */
export type changableProp = {
  label: string;
  value: any;
  onChange: (value: any) => void;
  placeholder?: any;
};

export type callableFunction = {
  label: string;
  onClick: () => void;
  icon?: string;
  toastLabel?: string;
  seperator?: boolean;
};


export type checkableFunction = {
  label: string;
  onClick: () => void;
  checked: boolean;
  disabled?: boolean;
};
