import { getUsaSummery } from './usaSummery';
import { getStatesStats } from './statesStats';

export const fetchAllUsaData = () => (dispatch) => {
    dispatch(getUsaSummery());
    dispatch(getStatesStats());
}