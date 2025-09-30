import useAuthContext from './useAuthContext';
import useWorkoutContext from './useWorkoutContext';

export const useLogout=()=>{
    const {dispatch}=useAuthContext();
    const {dispatch:workoutsDispatch}=useWorkoutContext();

    const logout=()=>{
        //remove user from local storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({type:'LOGOUT'});
        workoutsDispatch({type:'SET_WORKOUT',payload:null});
    }

    return {logout};
}

export default useLogout;