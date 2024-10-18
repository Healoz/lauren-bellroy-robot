import React, { FC } from "react";
import { Robot } from "../types";
import SmartToyIcon from "@mui/icons-material/SmartToy";

interface RobotProps {
  robot: Robot;
}

const RobotIcon: FC<RobotProps> = ({ robot }) => {
  return (
    <div className="text-black">
      <SmartToyIcon className="text-4xl icon" />
    </div>
  );
};

export default RobotIcon;
