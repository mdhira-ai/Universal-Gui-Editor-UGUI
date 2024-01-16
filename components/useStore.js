import { create } from 'zustand'

const useStore = create((set) => ({
 

  selectItem: null,
  selectItemproperties: (e) => set(() => ({
    selectItem: e,
  })),

  btn: [],
  addbtn: () => set((state) => ({
    btn: [...state.btn, ''],

  })),

  deletebtn: (e) => set((state) => ({
    btn: state.btn.filter((_, index) => index !== e)
  })),


  // add a div
  div: [],
  adddiv: () => set((state) => ({
    div: [...state.div, ''],

  })),

  deletediv: (e) => set((state) => ({
    div: state.div.filter((_, index) => index !== e)
  })),

  // add a input

  input: [],
  addinput: () => set((state) => ({
    input: [...state.input, ''],

  })),

  deleteinput: (e) => set((state) => ({
    input: state.input.filter((_, index) => index !== e)
  })),

  // Todo add more elements


}))

export default useStore