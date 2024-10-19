import React, { FC } from "react";
import { Direction, Robot } from "../types";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { motion } from "framer-motion";

interface RobotProps {
  robot: Robot;
}

const RobotIcon: FC<RobotProps> = ({ robot }) => {
  const rotateAmount = (): number => {
    const directionMap = {
      [Direction.N]: 0,
      [Direction.E]: 90,
      [Direction.S]: 180,
      [Direction.W]: 270,
    };
    let rotateAmount = 0;
    switch (robot.direction) {
      case Direction.N:
        rotateAmount = 0;
        break;
      case Direction.E:
        rotateAmount = 90;
        break;
      case Direction.S:
        rotateAmount = 180;
        break;
      case Direction.W:
        rotateAmount = 270;
        break;
      default:
        throw new Error("Invalid direction");
    }

    return rotateAmount;
  };
  return (
    <motion.div className="text-black " animate={{ rotate: rotateAmount() }}>
      <SmartToyIcon className="text-4xl icon" />
    </motion.div>
  );
};

export default RobotIcon;
