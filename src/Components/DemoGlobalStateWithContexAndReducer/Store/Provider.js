import { useReducer } from 'react';
import Context from './Context';
import Reducer, {initialState} from '../State/Reducer';
import { Logger } from '../State';

const Provider = ({children}) => {

    const [state,dispatch] = useReducer(Logger(Reducer),initialState);
    
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;