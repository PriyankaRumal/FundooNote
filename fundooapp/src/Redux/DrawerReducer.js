const initailstate = {
    value: "Fundoo"
}
export const DrawerReducer = (state = initailstate, action) => {
    switch(action.type) {
        case "Notes":
            return {...state, value: "Fundoo"}
        case "Reminders":
            return {...state, value: "Reminders"}
        case "Edit":
            return {...state, value: "Edit"}
        case "Archive":
            return {...state, value: "Archive"}
         case "Trash":
            return {...state, value: "Trash"}
       default:
        return state
  }
}