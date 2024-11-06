// function simpleMiddleware({ getState, dispatch }) {
//     return function(next){
//       return function(action){
//         // processing
//         const nextAction = next(action);
//         // read the next state
//         const state = getState();
//         // return the next action or you can dispatch any other action
//         return nextAction;
//       }
//     }
//   }