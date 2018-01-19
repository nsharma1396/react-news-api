function itemsHasErrored() {
    return {
        type: 'ERROR',
    };
}

function itemsIsLoading() {
    return {
        type: 'LOADING',
    };
}

function itemsFetchDataSuccess(items) {
    return {
        type: 'SUCCESS',
        items: items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading());
        
        fetch(url, {
            credentials: 'omit',
        })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items))})
            .catch((e) => {
                console.log(e)
                dispatch(itemsHasErrored())});
            };
}

export function changeCountry(countryName) {
    return {
        type: 'COUNTRY_CHANGED',
        countryName
    }
}

export function changeCategory(categoryName) {
    return {
        type: 'CATEGORY_CHANGED',
        categoryName
    }
}

export function changePage(activePage) {
    return {
        type: 'PAGE_CHANGED',
        activePage
    }
}