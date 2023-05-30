import axios, { AxiosError } from 'axios';

export type TypeofDonateFetchAPI = {
  category: string;
  percent: string;
  donationPoint: string;
  id: string;
};

export const Donate = () => {
  const setPercents = ({
    categorieArr,
  }: {
    categorieArr: TypeofDonateFetchAPI[];
  }) => {
    const result: TypeofDonateFetchAPI[] = [];

    if (categorieArr.length > 0) {
      let initsum = 0;
      categorieArr?.forEach((eachDonateElement) => {
        initsum += parseInt(eachDonateElement.donationPoint);
      });

      categorieArr.map((eachDonateElement) => {
        const percent =
          (parseInt(eachDonateElement.donationPoint) / initsum) * 100;
        const florrPercent = Math.floor(percent);
        eachDonateElement.percent = String(florrPercent) + '%';
        result.push(eachDonateElement);
      });
    }

    return result;
  };
  const getDonationCategories = async () => {
    if (sessionStorage.getItem('accessToken') === null) {
      return;
    }
    try {
      const res = await axios.get('/main/donations', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          'Cache-Control': 'max-age=60', // 1분으로 설정
        },
      });

      if (res.status === 200) {
        const Data = setPercents({ categorieArr: res.data });
        return Data;
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.status + error.message);
      } else {
        console.log(error);
      }
    }
  };
  return getDonationCategories();
};
