import rootReducer from "../rootReducer";
const logger = (store) => (next) => (action) =>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upComingState = [action].reduce(rootReducer, store.getState())

  console.log(`upComingState: ${JSON.stringify(upComingState)}`)
    return next (action)
}
export default logger