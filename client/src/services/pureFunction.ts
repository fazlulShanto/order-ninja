export const handleErrorMessage = (error: any) => {
    console.log(error);
    if (error?.response?.data) {
        if (error?.response?.data?.error) {
            return error?.response?.data?.error
        }
        if (error?.response?.data?.data) {
            return error?.response?.data?.data
        }
        if (error?.response?.data?.err) {
            return error?.response?.data?.err
        }
        return error?.response?.data;
    }
    return error.message
}

function handleInputChange(name: string, value: any, setState: any) {
    return setState((state: any) => ({ ...state, [name]: value }));
}

export default handleInputChange;