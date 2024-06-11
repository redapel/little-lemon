const initialState = {
    availableTimes : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
};

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_TIMES':
            return {
                availableTimes: fetchAPI(new Date())
            };
        case 'UPDATE_TIMES':
            return {
                availableTimes: fetchAPI(new Date(action.payload))
            };
        default:
            return state;
    }
};
  
export default availableTimesReducer;
