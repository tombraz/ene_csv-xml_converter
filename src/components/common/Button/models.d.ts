export type ButtonType = {
  variant: VARIANT;
  isActive: boolean;
  onClick: (id?: string) => void;
};

export enum VARIANT {
  PICK = "pick",
  CLEAN = "clean",
  POPULATE = "populate",
  EXPORT = "export",
  EXPORTED = "exported",
}
