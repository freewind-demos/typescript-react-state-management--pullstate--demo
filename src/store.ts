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
  MyStore.update(setSubState);
}
