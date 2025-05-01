import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Incident } from '../../types'
import { MOCK_INCIDENTS } from './mockData'

export interface IncidentsState {
  incidents: Incident[]
}

const initialState: IncidentsState = {
  incidents: MOCK_INCIDENTS,
}

export const incidentsSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    addIncident: (state, action: PayloadAction<Omit<Incident, 'id'>>) => {
      const newIncident = action.payload
      const newId = state.incidents.length + 1
      const incidentWithId = { ...newIncident, id: newId }
      state.incidents = [incidentWithId, ...state.incidents]
    }
  },
})

export const { addIncident } = incidentsSlice.actions

export default incidentsSlice.reducer