const { createSlice } = require("@reduxjs/toolkit")


const initialState={cat:[]};

const catSlice= createSlice({
    name:'catSlice',
    initialState,
    reducers:{


    }
});


const {reducer:catsReducer, actions:{}} = catSlice;
export default catsReducer;
