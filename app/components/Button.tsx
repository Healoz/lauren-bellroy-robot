import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  onClick?: () => void; // Optional onClick prop
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({ icon: Icon, onClick, isDisabled }) => {
  return (
    <motion.button
      className=" text-white bg-orange-400 rounded-md p-7"
      onClick={!isDisabled ? onClick : undefined}
      role="button" // Accessibility
      aria-disabled={isDisabled} // ARIA attribute for accessibility
      whileHover={{ scale: 1.1, backgroundColor: "rgb(255 103 42)" }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon />
    </motion.button>
  );
};

export default Button;
