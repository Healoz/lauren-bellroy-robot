"use client";
import React, { useEffect, useState } from "react";
import { GridCell } from "../types";

const Grid = () => {
  const [gridCells, setGridCells] = useState<GridCell[]>([]);

  //   Populate gridCells array
  useEffect(() => {
    const cells: GridCell[] = [];
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        cells.push({ x, y });
      }
    }
    setGridCells(cells);
  }, []);

  const gridContent = gridCells.map((gridCell) => {
    return (
      <div className="bg-green-300 w-20 h-20">
        {gridCell.x}, {gridCell.y}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-2">{gridContent}</div>
  );
};

export default Grid;
