import axios from 'axios';

export type DonatePointType = {
  category: string;
  donationPoint: number;
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
    console.log(res);
  };

  donateUserPoint();
};
