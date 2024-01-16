import { create } from 'zustand'

const useStore = create((set) => ({
  btn: [],
  addbtn: () => set((state) => ({
    btn: [...state.btn, ''],

  })),

  selectItem: null,
  selectItemproperties: (e) => set(() => ({
    selectItem: e,
  }))
}))

export default useStore