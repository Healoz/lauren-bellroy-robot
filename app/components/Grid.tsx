"use client";
import React, { FC, useEffect, useState } from "react";
import { GridCell, Robot } from "../types";

interface GridProps {
  gridCells: GridCell[];
  robot: Robot;
}

const Grid: FC<GridProps> = ({ gridCells, robot }) => {
  const isRobotInCell = (gridCell: GridCell, robot: Robot): boolean => {
    return gridCell.x === robot.position.x && gridCell.y === robot.position.y;
  };

  const gridContent = gridCells.map((gridCell) => {
    return (
      <div className="bg-gray-100 rounded transition-transform hover:scale-105 cursor-pointer">
        {isRobotInCell(gridCell, robot) && <p className="text-green-500">X</p>}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-2 w-full max-w-[800px] aspect-square">
      {gridContent}
    </div>
  );
};

export default Grid;
