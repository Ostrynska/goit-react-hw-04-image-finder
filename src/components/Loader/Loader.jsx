import BeatLoader from 'react-spinners/ClipLoader';
import { LoadingWrapp } from './Loader.styled';

export const Loading = () => {
  return (
    <LoadingWrapp>
      <BeatLoader
        color="#d6cb36"
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoadingWrapp>
  );
};
