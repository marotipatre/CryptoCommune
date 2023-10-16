import { ReactElement, ReactNode } from "react";

export interface GButtonProps {
  variant?: "contained" | "outlined";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  value: string;
  style?: object;
  disabled?: boolean;
  loading?: boolean;
  bgColor?: string;
  onClick?: () => void;
}

export interface GModalProps {
  variant?: "contained" | "outlined";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  value: string;
  style?: object;
  bgColor?: string;
  onClick?: () => void;
  children?: ReactNode;
  title?: string;
  textWallet?: string;
  alertTxt?: ReactElement;
  showLoginPic?: boolean;
  showTextInput?: boolean;
  walletConnected?: boolean;
  hideClose?: boolean;
}

export interface GTextInputProps {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  error?: boolean;
  success?: boolean;
  dontShowIcon?: boolean;
  password?: boolean;
  loading?: boolean;
  placeholder?: string;
  helperText?: string;
  bgColor?: string;
  borderColor?: string;
  radius?: number;
  icon?: ReactElement;
  startIcon?: ReactElement;
}
