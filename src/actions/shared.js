import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUserId } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({ users, tweets }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(receiveTweets(AUTHED_ID))
        })
    }
}