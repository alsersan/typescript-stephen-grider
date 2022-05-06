import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialRepositoryState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const initialState = {
  value: initialRepositoryState,
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    searchRepositories: (state) => {
      state.value = { loading: true, error: null, data: [] };
    },
    searchRepositoriesSuccess: (state, action: PayloadAction<string[]>) => {
      state.value = { loading: false, error: null, data: action.payload };
    },
    searchRepositoriesError: (state, action: PayloadAction<string>) => {
      state.value = { loading: false, error: action.payload, data: [] };
    },
  },
});

export const actions = repositoriesSlice.actions;
export const repositoriesReducer = repositoriesSlice.reducer;
