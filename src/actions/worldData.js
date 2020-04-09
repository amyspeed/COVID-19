import { getSummery } from './summery';

export const fetchAllWorldData = () => (dispatch) => {
    return dispatch(getSummery());
}