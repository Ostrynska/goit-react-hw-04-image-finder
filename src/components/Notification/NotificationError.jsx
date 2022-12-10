import errorImage from '../../images/error.jpg';

export function ErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="error image" />
      <p>{message}</p>
    </div>
  );
}
