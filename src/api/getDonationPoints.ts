import axios from 'axios';
export const Donate = () => {
  const getDonationCategories = async () => {
    try {
      const res = await axios.get('main/donation/categories', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  getDonationCategories();
};
