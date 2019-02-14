export const logout = (dispatch) => {
    localStorage.removeItem("token");

    return {
        type: "LOGOUT",
        payload: {}
    }
}