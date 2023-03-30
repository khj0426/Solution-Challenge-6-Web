import AutoComplete from 'react-google-autocomplete';

export const SearchPlace = () => {
  return (
    <AutoComplete
      apiKey={process.env.NEXT_PUBLIC_MAP_KEY}
      style={{ color: 'black', width: '80%' }}
      onPlaceSelected={(place) => {
        console.log(place);
      }}
    />
  );
};
