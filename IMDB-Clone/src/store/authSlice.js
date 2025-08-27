import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { name, email, password } = action.payload;
      const userExists = state.users.some((user) => user.email === email);

      if (!userExists) {
        const newUser = { name, email, password, watchlist: [] };
        state.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(state.users));
      } else {
       
        throw new Error("User already exists");
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;

      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      const alreadyLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
      if (alreadyLoggedIn) {
        throw new Error("User already logged in");
      }

      state.currentUser = user;
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("loggedInUser");
    },
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      const userIndex = state.users.findIndex(
        (u) => u.email === state.currentUser.email
      );

      

      if (userIndex !== -1) {
        const user = state.users[userIndex];
        const alreadyInList = user.watchlist?.some((m) => m.id === movie.id);

        if (!alreadyInList) {
          user.watchlist = [...(user.watchlist || []), movie];
          state.users[userIndex] = user;
          state.currentUser = user;

          localStorage.setItem("users", JSON.stringify(state.users));
          localStorage.setItem("loggedInUser", JSON.stringify(user));
        }
      }
    },
    removeFromWatchlist: (state, action) => {
      const movieId = action.payload;

      const userIndex = state.users.findIndex(
        (u) => u.email === state.currentUser.email
      );

      if (userIndex !== -1) {
        const updatedUser = {
          ...state.users[userIndex],
          watchlist: state.users[userIndex].watchlist.filter(
            (m) => m.id !== movieId
          ),
        };

        state.users[userIndex] = updatedUser;
        state.currentUser = updatedUser;

        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
      }
    },
  },
});

export const { signup, login, logout, addToWatchlist, removeFromWatchlist } =
  authSlice.actions;

export default authSlice.reducer;
