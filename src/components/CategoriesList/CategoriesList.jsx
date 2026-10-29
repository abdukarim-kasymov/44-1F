import { useParams } from "react-router-dom";
import { useCategoriesList } from "./Categories.api";

export const CategoriesList = () => {
    const { slug } = useParams();
    const {
        data: products,
        error,
        isError,
        isPending,
        isFetching
    } = useCategoriesList(slug);

    if (isPending) {
        return <div>Загрузка...</div>;
    }

    if(isError){
      return <div>Ошибка при получении данных: {error}</div>
    }

    return <section></section>;
};
