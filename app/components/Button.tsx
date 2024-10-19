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
      className="border text-black rounded-full p-7"
      onClick={!isDisabled ? onClick : undefined}
      role="button" // Accessibility
      aria-disabled={isDisabled} // ARIA attribute for accessibility
      whileHover={{ scale: 1.1, backgroundColor: "#f7f7f7" }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon />
    </motion.button>
  );
};

export default Button;
