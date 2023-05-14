import { useGetRecipesQuery } from '../store/api/api';
import LoadingDots from './LoadingDots';
import CreateRecipe from './create-recipe/CreateRecipe';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import Search from './search/Search';

// const userId = 1; //? пример проверки на авторизацию

function App() {
  // const { isLoading, data, error } = useGetRecipesQuery(undefined, {
  //   skip: !userId, //? пример проверки на авторизацию
  // });

  const { isLoading, data, error } = useGetRecipesQuery('');

  return (
    <section>
      <Header />
      <div className="App">
        <Search />
        <CreateRecipe />
        {isLoading ? (
          <h1>
            Loading
            <LoadingDots />
          </h1>
        ) : error ? (
          <h1>Error</h1>
        ) : data?.length ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <h1>Not found!</h1>
        )}

        {/* <User /> */}
      </div>
    </section>
  );
}

export default App;
