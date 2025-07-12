import axiosInstance from "../utils/axiosInstances";

export const registerUser = async (formData) => {
    return await axiosInstance.post("/users/add", formData);
}
    

export const loginUser = async (formData) => {
    return await axiosInstance.post("/auth/login", formData);
}
    
export const getAuthenticatedUser = async (accessToken) => {
    return await axiosInstance.get("/auth/user", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};