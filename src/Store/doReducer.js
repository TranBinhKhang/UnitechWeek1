
const testData = [{"id":1,"name":"DuLieu","isOpened":true,"showInput":false,"showEdit":false,"parent":null},{"id":2,"name":"NHAN SU","isOpened":true,"showInput":false,"showEdit":false,"parent":1},{"id":3,"name":"BIEN CHE","showInput":false,"isOpened":false,"showEdit":false,"parent":2},{"id":4,"name":"HOP DONG","showInput":false,"isOpened":false,"showEdit":false,"parent":2},{"id":5,"name":"TAI LIEU","isOpened":false,"showInput":false,"showEdit":false,"parent":1},{"id":6,"name":"DTKH","showInput":false,"showEdit":false,"isOpened":false,"parent":5},{"id":7,"name":"LUU TRU","showInput":false,"isOpened":false,"showEdit":false,"parent":5},{"id":8,"name":"VAN BANG","isOpened":false,"showInput":false,"showEdit":false,"parent":1},{"id":9,"name":"BAN LUONG","showInput":false,"showEdit":false,"isOpened":false,"parent":8},{"id":10,"name":"BAO CAO","showInput":false,"isOpened":false,"showEdit":false,"parent":8},{"id":11,"name":"HT","showInput":false,"isOpened":false,"showEdit":false,"parent":8}]

const doReducer = (
    state = {undoStack: [], redoStack: []},
    action
) => {
    const undo = state.undoStack;
    const redo = state.redoStack;
    switch (action.type) {
        case "UndoPush":
            undo.push(action.payload);
            return {
                ...state,
                // stack: state.stack.concat(action.payload)
        }
        case "RedoPush":
            redo.push(action.payload);
                return {
                    ...state,
                    // stack: state.stack.concat(action.payload)
        }
        case "DoTest": 
            console.log('reached', action.payload);
            undo.push(testData);
            console.log(undo)
            return {
                ...state,
                // stack: state.stack.push(testData)
            }
        default:
            return state
    }
}

export default doReducer;