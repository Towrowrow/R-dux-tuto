




const addAction = {
  type: 'ADD',
};

const removeAction = {
  type: 'REMOVE',
};

const adding = {
  type: 'ADD10',
};

const removing = {
  type: 'RMV10',
};

const resetall = {
  type: 'RESET',
};


//reducers
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REMOVE':
      return state - 1;
    case 'ADD10':
      return state + 10;
    case 'RMV10':
      return state - 10;
    case 'RESET':
      return state = 0;
    default:
      return state;
  }
}

export default counterReducer;


