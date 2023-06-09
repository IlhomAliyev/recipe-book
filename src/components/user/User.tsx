import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LoadingDots from '../LoadingDots';

const User = () => {
  const { isLoading, error, user } = useTypedSelector((state) => state.user);

  const { getUserById } = useActions();

  return (
    <div className="User">
      <button onClick={() => getUserById(1)}>Get user</button>
      {isLoading ? (
        <h3>
          Идёт загрузка
          <LoadingDots />
        </h3>
      ) : error ? (
        <h1>An error has occurred: {error}</h1>
      ) : user?.name ? (
        <h1>User: {user.name}</h1>
      ) : (
        <h1>USER NOT FOUND!</h1>
      )}
    </div>
  );
};

export default User;
