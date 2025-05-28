import data from './mock_items_list.json';
import { IGoodItem } from '../interfaces/IGoodItem';

export const itemsListMock: IGoodItem[] = data.shop
    .map(
        (item, index): IGoodItem => ({
            id: item.offerId?.replace('v2:/', 'v2_') || index.toString(),
            offerId: item.offerId ?? '',
            name: item.displayName ?? '',
            description: item.displayDescription ?? '',
            displayType: item.displayType ?? '',
            mainType: item.mainType ?? '',
            icon: item.displayAssets?.[0]?.url ?? '',
            background: item.displayAssets?.[0]?.background ?? '',
            colors: item.colors,
            rarity: item.rarity,
            series: item.series,
            offerTag: item.offerTag,
            banner: item.banner,
            priority: item.priority,
            price: item.price ? item.price.regularPrice : 0,
        })
    )
    .filter((item) => item.background && item.id);


