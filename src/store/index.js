const redux = require("redux")

function storeReducer(prev = {counter: 0, show: true}, action){
    if (!prev) {
        return({counter: 0, show: true})
        } else if(action.type){
            
        switch (action.type) {
            case "INCREMENT":
                return( {counter: prev.counter + 1, show : prev.show})
                break;
                case "DECREMENT":
                    return( {counter: prev.counter - 1, show : prev.show})
                    break;
                case "PLUS X":
                    return({counter: prev.counter + action.value * 1, show : prev.show})
                case "CLEAR":
                    return ({counter: 0, show : prev.show})
                    break;
                case "SHOW":
                    return ({counter: prev.counter, show: !prev.show})
                    break;
                default:
                break;
        }
    }
    return {counter: prev.counter}

}

const store = redux.createStore(storeReducer)

export default redux
export {store}