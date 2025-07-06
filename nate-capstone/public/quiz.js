import { useReducer } from "react";

const updateCount = (state, action) => {
    switch (action.type) {
        case 'PLUS_ONE':
            return state + 1;
        case 'MINUS_ONE':
            return state - 1;
        case 'RESET':
            return 0;
        case 'PLUS_FIVE':
            return state + 5;
    }
}

function Counter() {
    const [count, dispatch] = useReducer(updateCount, 0);

    return (
        <div>
            <p>Count: {count}</p>
            <Button 
            onClick={() => dispatch({
                type: 'PLUS_ONE'
            })}
            >
                +1
            </Button>
            <Button 
            onClick={() => dispatch({
                type: 'MINUS_ONE'
            })}
            >
                 -1
            </Button>
            <Button 
            onClick={() => dispatch({
                type: 'RESET'
            })}
            >
                Reset
            </Button>
            <Button 
            onClick={() => dispatch({
                type: 'PLUS_FIVE'
            })}
            >
                +5
            </Button>
        </div>
    );
}

export default Counter;