import { getSummery } from './summery';
import { getCountryStats } from './countryStats';

export const fetchAllWorldData = () => (dispatch) => {
    dispatch(getSummery());
    dispatch(getCountryStats());
}