import axios from 'axios';
import toast from 'react-hot-toast';

const Logout = async () => {
    try {
        await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/logout');
        toast.success('logout success')
        console.log('logout success')
    } catch (error) {
        console.error('Logout failed:', error);
        toast.error(error.response.data.message)
    }
};
export default Logout