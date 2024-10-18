"use client";
import { motion } from "framer-motion";
import React, { FC, useEffect, useRef, useState } from "react";
import { GridCell, Robot } from "../types";
import RobotIcon from "./Robot";

interface GridProps {
  gridCells: GridCell[];
  robot: Robot;
}

const Grid: FC<GridProps> = ({ gridCells, robot }) => {
  const cellRef = useRef<HTMLDivElement>(null); // Create a ref
  const [cellWidth, setCellWidth] = useState(0.0); // State to store the width
  const gapSize = 0.5 * 16; // Convert rem to pixels (0.5rem = 8px)

  // Function to get the width of the referenced cell
  const getCellWidth = () => {
    if (cellRef.current) {
      const width = cellRef.current.offsetWidth; // Get the width
      setCellWidth(width); // Set the width to state
      console.log(`Cell Width: ${width}`); // Log the width
    }
  };

  useEffect(() => {
    getCellWidth(); // Get the width on initial render

    // Optionally, set up a resize observer or event listener here to update width on resize
    const handleResize = () => {
      getCellWidth(); // Get width on resize
    };

    window.addEventListener("resize", handleResize); // Listen for resize events

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once
  const gridContent = gridCells.map((gridCell, index) => {
    return (
      <div
        key={`${gridCell.x}-${gridCell.y}`}
        ref={index === 0 ? cellRef : null} // apply cellRef to only the first cell
        className="bg-gray-100 rounded transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
      ></div>
    );
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-5 grid-rows-5 gap-2 w-full max-w-[800px] aspect-square relative">
        {gridContent}
        <motion.div
          className="bg-red-400/40 rounded flex items-center justify-center"
          style={{
            position: "absolute",
            top: robot.position.y * (gapSize + cellWidth),
            left: robot.position.x * (gapSize + cellWidth),
            width: cellWidth,
            height: cellWidth,
          }}
        >
          <RobotIcon robot={robot} />
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
