import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_ALBUM = "library";

const usePhotosStore = create(
  immer((set) => ({
    activeAlbum: INITIAL_ALBUM,

    setActiveAlbum: (albumId) =>
      set((state) => {
        state.activeAlbum = albumId;
      }),

    resetToLibrary: () =>
      set((state) => {
        state.activeAlbum = INITIAL_ALBUM;
      }),
  })),
);

export default usePhotosStore;
