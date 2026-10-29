import { useQuery } from "@tanstack/react-query";
import { $api } from "../../api/api";

const getByCategoryProducts = async (category) => {
    const response = await $api.get(`/products/category/${category}`);
    return response.data;
};

export const useCategoriesList = (slug) => {
    return useQuery({
        queryKey: ['products', 'categories', slug],
        queryFn: () => getByCategoryProducts(slug),
        enabled: !!slug
    });
};