import React, { FC } from "react";
import { Direction, Robot } from "../types";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { motion, useAnimationControls } from "framer-motion";

interface RobotProps {
  robot: Robot;
}

const RobotIcon: FC<RobotProps> = ({ robot }) => {
  const rotateAmount = (): number => {
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

  const playNudgeAnimation = () => {
    const animationControls = useAnimationControls();
  };

  return (
    <motion.div
      className="text-orange-400 "
      animate={{ rotate: rotateAmount() }}
      initial={{ rotate: 0 }}
      variants={{
        nudge: {
          rotate: [
            rotateAmount(),
            rotateAmount() + 20,
            rotateAmount(),
            rotateAmount() - 20,
            rotateAmount(),
          ],
          transition: {
            duration: 0.3,
          },
        },
      }}
      whileHover="nudge"
    >
      <SmartToyIcon className="text-4xl icon" />
    </motion.div>
  );
};

export default RobotIcon;
