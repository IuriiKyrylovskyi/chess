import { createSlice } from '@reduxjs/toolkit';

const initialSectionsState = {
  sections: [],
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: initialSectionsState,
  reducers: {
    fetchSections(state, action) {
      const fetchSectionsData = action.payload;
      // console.log(fetchSectionsData);
      // state.Sections = [...state.Sections, ...fetchSectionsData];
      state.sections = fetchSectionsData;
    },
  },
});

export const sectionsActions = sectionsSlice.actions;

export default sectionsSlice;
