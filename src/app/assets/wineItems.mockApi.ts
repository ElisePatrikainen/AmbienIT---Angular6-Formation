import { WineItemObject, WineItem } from './wineItem.model';

let data: WineItem[] = []
for (let i=0; i<15; i++) {
    data.push(new WineItemObject(i))
};

export const mockWineItemsList: WineItem[] = data;
