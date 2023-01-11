import { useDispatch, useSelector } from "react-redux";
import { dDecrement, dIncrement } from "../redux/dynamicCounter/action";

const DynamicHoocCounter =()=> {
    const count = useSelector(state => state.dynamicCounter.value)
   
    const dispatch = useDispatch()

    const incrementHandeler = (value) => {
     dispatch(dIncrement(value))
    }
    const decrementHandeler = (value) => {
        dispatch(dDecrement(value))
    }

    

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">`
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => incrementHandeler(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrementHandeler(2)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default DynamicHoocCounter