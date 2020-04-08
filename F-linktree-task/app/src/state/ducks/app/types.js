import { SCOPES } from '../../../assets/strings/constants';
import { ACTION_STATE } from '../../../assets/strings/constants';
import { ACTION_TYPES} from '../../../assets/strings/constants'
const { LOADING_TYPE} = ACTION_TYPES;
const { SCOPE_APP} = SCOPES;

const LOADING_START = `${SCOPE_APP}/${LOADING_TYPE}_${ACTION_STATE.START}`;
const LOADING_END = `${SCOPE_APP}/${LOADING_TYPE}_${ACTION_STATE.END}`;

export default {
    LOADING_START,
    LOADING_END
}