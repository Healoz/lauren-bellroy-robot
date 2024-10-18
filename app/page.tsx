"use client";
import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import { Direction, GridCell, Robot } from "./types";
import Controls from "./components/Controls";

export default function Home() {
  const [gridCells, setGridCells] = useState<GridCell[]>([]);
  const [robot, setRobot] = useState<Robot>();

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

  // Initialize the robot once gridCells has been populated
  useEffect(() => {
    if (gridCells.length > 0) {
      setRobot({ position: { x: 3, y: 0 }, direction: Direction.S });
    }
  }, [gridCells]); // This effect runs after gridCells is populated

  return (
    <section className="w-full flex h-svh bg-white">
      <div className="flex w-full h-full flex-col items-center justify-center p-10">
        {robot && <Grid gridCells={gridCells} robot={robot} />}
        <Controls />
      </div>
    </section>
  );
}
