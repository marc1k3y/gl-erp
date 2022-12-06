export const SET_UPLOAD_FILE = "SET_UPLOAD_FILE"
export const SET_FILE_CONTEXT = "SET_FILE_CONTEXT"

export const setUploadFileAction = (payload) => ({ type: SET_UPLOAD_FILE, payload })
export const setFileContextAction = (payload) => ({ type: SET_FILE_CONTEXT, payload })