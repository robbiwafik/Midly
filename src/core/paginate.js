import _ from 'lodash';

export function paginate(items, currPageNumber, pageItemsCount) {
    const start = pageItemsCount * (currPageNumber - 1);
    const end = pageItemsCount * currPageNumber;
    return _.slice(items, start,  end);
}