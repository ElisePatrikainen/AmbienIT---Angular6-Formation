// Uniquement utilisée pour générer le fichier mockApi.ts
// Inutile dans une véritable application
export class WineItemObject {
    public name: string;
    public domaine: string;
    public imageUrl: string = "/mockApiAssets/wineImage.png";
    public description: string;
    constructor(i: number) {
            this.name = "Vin " + i;
            this.domaine = "Domaine" + i;
            this.description = "Le vin " + i + " est un vin d'appellation de la région " + i 
            + ", produit à base du cépage " + i + " en agriculture raisonnée et vendanges manuelles, et élevé en fût par le domaine " + i;
        } 
}

// Interface utilisée hors du fichier mockApi.ts
export interface WineItem {
    name: string;
    domaine: string;
    imageUrl: string;
    description: string;
}