import {Store, useStoreState} from "pullstate";

type StoreType = {
  username: string,
}

export const MyStore = new Store<StoreType>({
  username: 'pullstate'
});

export function getState<S>(getSubState: (store: StoreType) => S) {
  return useStoreState(MyStore, getSubState)
}

export function updateStore(setSubState: (store: StoreType) => void) {
  // Notice
  // it's important to wrap `setSubState` to ignore its return value
  // otherwise, if the real `setSubState` function returns some value other than `void`,
  // immer will throw exceptions like:
  // Uncaught Error: An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
  MyStore.update(it => {
    setSubState(it)
  });
}
