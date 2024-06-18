export interface ButtonConfig {
  variant: "text" | "contained" | "outlined";
  buttonText: string;
  textColor?: string;
  buttonColor?: string;
  onHoverColor?: string;
  outlineColor?: string;
  outlineOnHoverColor?: string;
  buttonIcon?: any;
  borderStyle?: "sharp" | "rounded" | "extra-rounded";
  elevation?: "none" | "low-elev" | "medium-elev" | "high-elev";
  activeState?: boolean;
  activeStateColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
