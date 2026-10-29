import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, authUnavailableMessage } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const publicUser = (user) =>
  user
    ? {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        username: user.displayName,
        photoURL: user.photoURL,
      }
    : null;
const errorMessage = (error) =>
  ({
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/email-already-in-use": "An account already exists for this email.",
    "auth/weak-password": "Choose a password with at least 6 characters.",
    "auth/popup-closed-by-user": "Sign-in was cancelled.",
    "auth/popup-blocked": "Allow pop-ups for this site to use Google sign-in.",
    "auth/unauthorized-domain": "Sign-in is not enabled on this address yet.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/network-request-failed": "Check your connection and try again.",
  })[error.code] || "Sign-in could not be completed. Please try again.";
const authTask = (name, operation) =>
  createAsyncThunk(name, async (input, { rejectWithValue }) => {
    if (!auth) return rejectWithValue(authUnavailableMessage);
    try {
      return publicUser(await operation(input));
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  });
export const signIn = authTask(
  "auth/signIn",
  async ({ email, password }) =>
    (await signInWithEmailAndPassword(auth, email.trim(), password)).user,
);
export const signUp = authTask(
  "auth/signUp",
  async ({ email, password, username }) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password,
    );
    await updateProfile(user, { displayName: username.trim() });
    return user;
  },
);
export const signInWithGoogle = authTask(
  "auth/signInWithGoogle",
  async () => (await signInWithPopup(auth, new GoogleAuthProvider())).user,
);
export const signOutUser = createAsyncThunk("auth/signOut", async () => {
  if (auth) await signOut(auth);
});
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    auth: false,
    ready: !auth,
    loading: false,
    error: null,
  },
  reducers: {
    setAuthUser(state, { payload }) {
      state.user = payload;
      state.auth = !!payload;
      state.ready = true;
    },
  },
  extraReducers: (builder) => {
    for (const task of [signIn, signUp, signInWithGoogle]) {
      builder
        .addCase(task.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(task.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.user = payload;
          state.auth = !!payload;
          state.error = null;
        })
        .addCase(task.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        });
    }
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.user = null;
      state.auth = false;
    });
  },
});
export const { setAuthUser } = authSlice.actions;
export default authSlice.reducer;
