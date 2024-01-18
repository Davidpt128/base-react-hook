import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CitiesList from "../../assets/data/cities_list.json";
import axios from "axios";

const initialState = {
  cities: [],
  citySelected: "",
  displayWeather: {},
  isLoading: false,
  isError: false,
};

export const changeSelectSearch = createAsyncThunk(
  "crud/changeSelectSearch",
  async (citySelected, thunkAPI) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${citySelected.value}&units=metric&appid=be641094cb1041f70e4170417978ca6c`
    );

    return { citySelected: citySelected, displayWeather: response.data };
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchListCities: (state) => {
      CitiesList.forEach((element) => {
        state.cities.push({
          value: element.name,
          label: `${element.name}, ${element.country}`,
        });
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeSelectSearch.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeSelectSearch.fulfilled, (state, action) => {
        state.citySelected = action.payload.citySelected;
        state.displayWeather = action.payload.displayWeather;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(changeSelectSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { fetchListCities } = weatherSlice.actions;

export default weatherSlice.reducer;
