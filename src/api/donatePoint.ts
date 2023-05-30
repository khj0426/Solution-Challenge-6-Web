import axios from 'axios';
import swal from 'sweetalert';

export type DonatePointType = {
  donationPoint: number;
  percent: string;
  donationId: string;
};

export const DonatePoint = ({ donationPoint, donationId }: DonatePointType) => {
  const donateUserPoint = async () => {
    const res = await axios.post(
      `/main/donations/${donationId}`,
      {
        donationPoint,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log(res.status + res.data + res.headers);

    sessionStorage.setItem('userPoint', res.data);
    return res;
  };

  donateUserPoint().then((res) => {
    swal('Donate Completed!');
  });
};
