import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
const InputStyles = {
  color: "#1ed760",
  "&.Mui-checked": {
    color: "green",
  },
};
function RadioGroup({ value, onChangeFunc, Arr, name }) {
  return (
    <FormControl>
      <MuiRadioGroup value={value} onChange={onChangeFunc} name={name}>
        {Arr.map((item) => {
          return (
            <FormControlLabel
              key={item.name}
              sx={{
                ml: 0,
                justifyContent: "start",
              }}
              value={item.name}
              control={<Radio sx={InputStyles} />}
              label={item.name}
              labelPlacement="start"
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
}

export default RadioGroup;
