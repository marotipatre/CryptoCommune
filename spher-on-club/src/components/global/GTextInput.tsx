import { TextField, InputAdornment, IconButton } from "@mui/material";
import textInput from "../../assets/textinput.svg";
import textInputSuccess from "../../assets/textinputSuccess.svg";
import eye from "../../assets/eye.svg";
import remove from "../../assets/remove.svg";
import loadingImg from "../../assets/checkEmailLoading.svg";
import { GTextInputProps } from "./GInterfaces";
import { useState } from "react";

const GTextInput = ({
  label,
  value,
  onChange,
  error,
  success,
  placeholder,
  dontShowIcon,
  helperText,
  password,
  radius = 10,
  bgColor = "auto",
  borderColor,
  loading,
  icon,
  startIcon,
}: GTextInputProps) => {
  const [type, setType] = useState(true);
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={!!error}
      helperText={helperText}
      variant="outlined"
      fullWidth
      type={password && type ? "password" : "text"}
      placeholder={placeholder}
      autoFocus
      sx={{
        borderColor: loading
          ? "#9757D7"
          : success == true
          ? "#45B26B"
          : error == true
          ? "#EF466F"
          : "#353945",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: borderColor
            ? borderColor
            : loading
            ? "#9757D7"
            : success == true
            ? "#45B26B"
            : error == true
            ? "#EF466F"
            : "#353945",
          borderRadius: radius,
          backgroundColor: bgColor,
          borderWidth: 2,
          color: "#968FA3",
        },
        "& input::placeholder": {
          fontFamily: "Space Grotesk",
          fontSize: "12px",
          color: "#968FA3",
        },
        "& .MuiOutlinedInput-input": {
          color: "#968FA3",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: loading
              ? "#9757D7"
              : success == true
              ? "#45B26B"
              : error == true
              ? "#EF466F"
              : "#353945",
          },
        "&:-webkit-autofill": {
          WebkitBoxShadow: "#E0D98C",
          WebkitTextFillColor: "default",
        },
      }}
      InputProps={{
        startAdornment: !dontShowIcon && (
          <InputAdornment position="start">
            <IconButton>{startIcon && startIcon}</IconButton>
          </InputAdornment>
        ),
        endAdornment: !dontShowIcon && (
          <InputAdornment position="end">
            <IconButton>
              {icon ? (
                icon
              ) : error ? (
                <img src={remove} alt="remove" onClick={() => onChange("")} />
              ) : success ? (
                <img src={textInputSuccess} alt="success" />
              ) : password ? (
                <img src={eye} alt="eye" onClick={() => setType(!type)} />
              ) : loading ? (
                <img className="animate-spin" src={loadingImg} alt="ok" />
              ) : (
                <img src={textInput} alt="ok" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default GTextInput;
