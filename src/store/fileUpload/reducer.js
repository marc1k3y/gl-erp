import { SET_FILE_CONTEXT, SET_UPLOAD_FILE } from "./actions"

const initState = {
  uploadFile: null,
  fileContext: null
}

export function FileUploadReducer(state = initState, action) {
  switch (action.type) {
    case SET_FILE_CONTEXT:
      return { ...state, uploadFile: action.payload }
    case SET_UPLOAD_FILE:
      return { ...state, fileContext: action.payload }
    default:
      return state
  }
}