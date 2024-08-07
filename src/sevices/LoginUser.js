
import axios from 'axios';

const loginUser = async (credentials) => {
  try {
    const response = await axios.post('/api/login', credentials);
    if (response.status === 200) {
      const { user } = response.data;
      // Save user data to local storage or state
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, user };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed' };
  }
};

export default loginUser;
