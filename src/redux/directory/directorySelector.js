import { createSelector } from "reselect";

const directorySelctor = (state) => state.directory;

export const directorySectionsSelector = createSelector(
  [directorySelctor],
  (directory) => directory.sections
);
