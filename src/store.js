
import { configureStore } from '@reduxjs/toolkit';
import TeluguSlice from "./slice/teluguSlice"
import MathSlice from "./slice/mathsSlice"
import PhySlice from "./slice/phySlice"
const store= configureStore({
    reducer:{
        telugu:TeluguSlice,
        math:MathSlice,
        phy:PhySlice
    }
})

export default store;
