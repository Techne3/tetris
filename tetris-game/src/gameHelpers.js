export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// create new array to set the width and height for the tetrominos
// stage
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
