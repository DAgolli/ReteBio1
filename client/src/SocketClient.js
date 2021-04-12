import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { POST_TYPES } from './redux/actions/postAction'
import { GLOBALTYPES } from './redux/actions/globalTypes'

const SocketClient = () => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    // joinUser
    useEffect(() => {
        socket.emit('joinUser', auth.user._id)
    }, [socket, auth.user._id])

    // Likes
    useEffect(() => {
        socket.on('likeToClient', newPost => {
            dispatch({type: POST_TYPES.UPDATE_POST, payload: newPost})
        })

        return () => socket.off('likeToClient')
    }, [socket, dispatch])

    // unLikes
    useEffect(() => {
        socket.on('unLikeToClient', newPost => {
            dispatch({type: POST_TYPES.UPDATE_POST, payload: newPost})
        })

        return () => socket.off('unLikeToClient')
    }, [socket, dispatch])

    // Comments
    useEffect(() => {
        socket.on('createCommentToClient', newPost => {
            dispatch({type: POST_TYPES.UPDATE_POST, payload: newPost})
        })

        return () => socket.off('createCommentToClient')
    }, [socket, dispatch])

    // deleteComments
    useEffect(() => {
        socket.on('deleteCommentToClient', newPost => {
            dispatch({type: POST_TYPES.UPDATE_POST, payload: newPost})
        })

        return () => socket.off('deleteCommentToClient')
    }, [socket, dispatch])

    // follow
    useEffect(() => {
        socket.on('followToClient', newUser => {
            dispatch({type: GLOBALTYPES.AUTH, payload: {...auth, user: newUser}})
        })

        return () => socket.off('followToClient')
    }, [socket, dispatch, auth])

    // unFollow
    useEffect(() => {
        socket.on('unFollowToClient', newUser => {
            dispatch({type: GLOBALTYPES.AUTH, payload: {...auth, user: newUser}})
        })

        return () => socket.off('unFollowToClient')
    }, [socket, dispatch, auth])

    return <> </>
}

export default SocketClient