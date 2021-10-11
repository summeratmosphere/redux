const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// action creator
function buyCake() {
    return { //action
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}


const store = createStore(reducer)
/*output */console.log('state', store.getState())
//const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
// /*output */store.dispatch(buyCake())
// /*output */store.dispatch(buyCake())
// /*output */store.dispatch(buyCake())
//unsubscribe()
