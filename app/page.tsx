"use client";
import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import { Direction, GridCell, Robot, RotateDirection } from "./types";
import Controls from "./components/Controls";

export default function Home() {
  const [gridCells, setGridCells] = useState<GridCell[]>([]);
  const [robot, setRobot] = useState<Robot>();

  //   Populate gridCells array
  useEffect(() => {
    const cells: GridCell[] = [];
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        cells.push({ x, y });
      }
    }
    setGridCells(cells);
  }, []);

  // Initialize the robot once gridCells has been populated
  useEffect(() => {
    if (gridCells.length > 0) {
      setRobot({ position: { x: 3, y: 0 }, direction: Direction.N });
    }
  }, [gridCells]); // This effect runs after gridCells is populated

  // Robot move functions
  const rotateRobot = (rotateDirection: RotateDirection) => {
    const directions: Direction[] = [
      Direction.N,
      Direction.E,
      Direction.S,
      Direction.W,
    ];
    setRobot((prevRobot) => {
      if (!prevRobot) return prevRobot; // check prevRobot not undefined

      const currentDirection = prevRobot.direction;
      const currentIndex = directions.indexOf(currentDirection);

      let newIndex: number;

      if (rotateDirection === RotateDirection.Left) {
        newIndex = (currentIndex - 1 + directions.length) % directions.length; // Rotate left
      } else if (rotateDirection === RotateDirection.Right) {
        newIndex = (currentIndex + 1) % directions.length; // Rotate right
      } else {
        newIndex = currentIndex; // In case rotateDirection is neither left nor right
      }

      const newDirection = directions[newIndex];
      console.log("new direction: " + newDirection);

      return {
        ...prevRobot,
        direction: newDirection,
      };
    });
  };

  const moveRobotForward = () => {
    setRobot((prevRobot) => {
      if (!prevRobot) return prevRobot;

      let { x: prevX, y: prevY } = prevRobot.position;

      // Create new coordinates based on the current direction
      let newX = prevX;
      let newY = prevY;

      switch (prevRobot.direction) {
        case Direction.N:
          console.log("move north");
          newY -= 1; // Move up
          break;
        case Direction.S:
          console.log("move south");
          newY += 1; // Move down
          break;
        case Direction.E:
          console.log("move east");
          newX += 1; // Move right
          break;
        case Direction.W:
          console.log("move west");
          newX -= 1; // Move left
          break;
        default:
          throw new Error("Invalid direction");
      }

      return {
        ...prevRobot,
        position: { x: newX, y: newY },
      };
    });
  };

  const isFacingEdge = (): boolean => {
    if (!robot) {
      return false;
    }
    if (robot.position.y === 0 && robot.direction === Direction.N) {
      return true;
    } else if (robot.position.y === 4 && robot.direction === Direction.S) {
      return true;
    } else if (robot.position.x === 4 && robot.direction === Direction.E) {
      return true;
    } else if (robot.position.x === 0 && robot.direction === Direction.W) {
      return true;
    } else {
      return false;
    }
  };

  const playNudgeAnimation = () => {
    console.log("play nudge animation");
  };

  return (
    <section className="w-full flex h-svh bg-white">
      <div className="flex w-full h-full flex-col items-center justify-center p-10 gap-10">
        {robot && <Grid gridCells={gridCells} robot={robot} />}
        <Controls
          rotateRobot={rotateRobot}
          moveRobotForward={moveRobotForward}
          isFacingEdge={isFacingEdge}
          playNudgeAnimation={playNudgeAnimation}
        />
      </div>
    </section>
  );
}
