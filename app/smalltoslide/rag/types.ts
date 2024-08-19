
// Chunks to release to the front-end


export type Chunk = {
    text: string;
    page_num: number;
};

// Choosing which document to pick
export enum DocumentOption {
    Nvidia = "Nvidia",
    ClimateYouth = "Climate Youth"
  }