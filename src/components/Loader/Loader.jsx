import BeatLoader from 'react-spinners/ClipLoader';
import { LoadingWrapp } from './Loader.styled';

export const Loading = () => {
  return (
    <LoadingWrapp>
      <BeatLoader
        color="#1c4931"
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingWrapp>
  );
};
