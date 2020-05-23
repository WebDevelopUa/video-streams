import streams from "../api/streams";
import plainRouterHistory from "../history";
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type: CREATE_STREAM, payload: response.data});
    plainRouterHistory.push('/')
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = (streamId) => async dispatch => {
    const response = await streams.get(`/streams/${streamId}`);
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const editStream = (streamId, formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const validOwner = formValues.userId === userId && userId !== null;
    (validOwner) ? dispatch({
        type: EDIT_STREAM,
        payload: (await streams.patch(`/streams/${streamId}`, formValues)).data
    }) : console.log('Validate Owner Error!');
    plainRouterHistory.push('/')
}

export const deleteStream = (streamId) => async dispatch => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({type: DELETE_STREAM, payload: streamId});
    plainRouterHistory.push('/')
}