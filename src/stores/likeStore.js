import { create } from 'zustand';

export const useLikeStore = create((set) => ({
  likedProducts: [],
  toggleLike: (productId) => set((state) => ({
    likedProducts: state.likedProducts.includes(productId)
      ? state.likedProducts.filter(id => id !== productId)
      : [...state.likedProducts, productId]
  })),
  isLiked: (productId) => {
    return useLikeStore.getState().likedProducts.includes(productId);
  }
}));