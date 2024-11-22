import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API Calls
const mockCrops = [
    {
        id: 1,
        _id: "123",
        cropName: "Tomatoes",
        plantingDate: "2024-01-10",
        tasks: ["Watering", "Fertilizing"],
        image: { url: "https://via.placeholder.com/150" },
        noOfRatings: 120
    },
    {
        id: 2,
        _id: "124",
        cropName: "Carrots",
        plantingDate: "2024-01-15",
        tasks: ["Weeding", "Harvesting"],
        image: { url: "https://via.placeholder.com/150" },
        noOfRatings: 80
    }
];

export const getAllCropsAsync = createAsyncThunk(
    'crops/getAllCrops',
    async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockCrops), 1000);
        });
    }
);

const cropSlice = createSlice({
    name: 'crops',
    initialState: {
        crops: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCropsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCropsAsync.fulfilled, (state, action) => {
                state.crops = action.payload;
                state.isLoading = false;
            });
    }
});

export default cropSlice.reducer;
