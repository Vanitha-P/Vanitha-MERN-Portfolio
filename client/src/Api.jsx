import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL, // Set the base URL
});

export const SendEmail = async ({
    fullName, email, phone, address, message,
    setSend,
}) => {
    try {
        const datas = { fullName, email, phone, address, message };
        let res = await axiosInstance.post('/send', datas);
        console.log(res)
        if (res) {
            console.log("inside", res.data)
            setSend(res.data);
        } else {
            console.error('Invalid response:', res); console.log(res.data)
        }
    } catch (error) {
        console.error('Error:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            alert(error.response.data.message);
        }
        // Handle specific error scenarios, e.g., network error or server error
    }
};

