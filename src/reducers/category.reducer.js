import { categoryConstants } from "../actions/constants";



const initState = {
    categories: [],
    loading: false,
    error: null
};


const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    for (let cat of categories) {

        if (cat._Id == parentId) {
            myCategories.push({
                ...cat,
                childer: cat.childer && cat.childer.length > 0 ? buildNewCategories(parentId, [...cat.childer, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.childer
                }], category) : []
            });
        } else {
            myCategories.push({
                ...cat,
                childer: cat.childer && cat.childer.length > 0 ? buildNewCategories(parentId, cat.childer, category) : []
            });
        }


    }
    return myCategories;
}


export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCSESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.category;
            const updatedCategories = buildNewCategories(category.parentId ,state.categories, category)
            console.log('updated categories', updatedCategories);

            state = {
                ...state,
                categories: updatedCategories,
                loading: false,
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState
            }
            break;
    }
    return state;
}
