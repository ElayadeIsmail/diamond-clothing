import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const collectionSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollectionForPrev = createSelector(
  [collectionSelector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParams) =>
  createSelector(
    [collectionSelector],
    (collections) => collections[collectionUrlParams]
  );
