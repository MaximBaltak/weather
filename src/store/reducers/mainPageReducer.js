const defaultState={
    listRussiaCity:[]
}

const mainPageReducer=(state=defaultState,action)=>{
    let  stateCopy={...state}
    switch (action.type){
        case 'ADD_RUSSIA_LIST':
            stateCopy.listRussiaCity=[...action.arr]
            return stateCopy
        default:
            return state

    }
}
export default mainPageReducer
