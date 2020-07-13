import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL
} from "./actionTypes.shop";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebaseUtils";

export const fetchCollectionSuccess = collections => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = errorMessage => ({
  typed: FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
});

export const fetchCollectionsStart = () => ({ type: FETCH_COLLECTIONS_START });

export const fetchCollectionsStartAsync = () => dispatch => {
  dispatch(fetchCollectionsStart());
  const collectionRef = firestore.collection("collections");
  collectionRef
    .get()
    .then(snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collections));
    })
    .catch(err => {
      fetchCollectionsFailure(err.message);
    });
};
