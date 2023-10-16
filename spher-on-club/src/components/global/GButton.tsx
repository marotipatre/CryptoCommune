import Button from "@mui/material/Button";
import { GButtonProps } from "./GInterfaces";
import loadingImg from "../../assets/checkEmailLoading.svg";

function GButton(props: GButtonProps) {
  return (
    <Button
      variant={props.variant}
      startIcon={props.startIcon && props.startIcon}
      endIcon={
        props.endIcon && props.loading ? (
          <img className="animate-spin" src={loadingImg} alt="ok" />
        ) : (
          props.endIcon && props.endIcon
        )
      }
      style={{
        color: "#FFFFFF",
        fontFamily: "Montserrat",
        backgroundColor: props.bgColor,
        textTransform: "none",
        borderRadius: 10,
        ...props.style,
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.value}
    </Button>
  );
}

export default GButton;
