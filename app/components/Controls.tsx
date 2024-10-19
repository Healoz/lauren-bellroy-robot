import React, { FC } from "react";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "./Button";
import { Direction, RotateDirection } from "../types";

interface ControlsProps {
  rotateRobot: (rotateDirection: RotateDirection) => void;
  moveRobotForward: () => void;
  isFacingEdge: () => boolean;
  playNudgeAnimation: () => void;
}

const Controls: FC<ControlsProps> = ({
  rotateRobot,
  moveRobotForward,
  isFacingEdge,
  playNudgeAnimation,
}) => {
  return (
    <div className="gap-4 flex ">
      <Button
        icon={RotateLeftIcon}
        onClick={() => rotateRobot(RotateDirection.Left)}
      />
      <Button
        icon={ArrowUpwardIcon}
        onClick={isFacingEdge() ? playNudgeAnimation : moveRobotForward}
      />
      <Button
        icon={RotateRightIcon}
        onClick={() => rotateRobot(RotateDirection.Right)}
      />
    </div>
  );
};

export default Controls;
