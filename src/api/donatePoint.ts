import axios from 'axios';
import swal from 'sweetalert';

export type DonatePointType = {
  category: string;
  donationPoint: number;
  percent: string;
};

export const DonatePoint = ({ category, donationPoint }: DonatePointType) => {
  const donateUserPoint = async () => {
    const res = await axios.post(
      'api/main/donations',
      {
        category,
        donationPoint: donationPoint,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      }
    );

    sessionStorage.setItem('userPoint', res.data);
    return res;
  };

  donateUserPoint().then((res) => {
    swal('Donate Completed!');
  });
};
