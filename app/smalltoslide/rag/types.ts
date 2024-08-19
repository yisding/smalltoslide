
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
export type ChunkBundle = {
    pageNumbers: number[];
    ragResults: {
        // TODO: Add ColPali
        regular: string;
        s2s: string;
    };
};
