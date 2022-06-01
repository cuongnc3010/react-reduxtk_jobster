import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'

const initialState = {
  isLoading: false,
  user: null,
}
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user)
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login User: ${JSON.stringify(user)}`)
  }
)
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      const { user } = payload
      state.user = user
      toast.success(`Hello there, ${user.name} !`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      toast.error(payload)
    },
  },
})
export default userSlice.reducer
