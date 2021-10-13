export class Civilization {
    id: number;
    name: string;
    expansion: string;
    army_type: string;
    unique_unit: string[];
    unique_tech: string[];
    team_bonus: string;
    civilization_bonus: string[];

    constructor(id: number, name: string, expansion: string, army_type: string, unique_unit: string[], unique_tech: string[], team_bonus: string, civilization_bonus: string[]){
        this.id = id;
        this.name = name;
        this.expansion = expansion;
        this.army_type = army_type;
        this.unique_tech = unique_tech;
        this.unique_unit = unique_unit;
        this.team_bonus = team_bonus;
        this.civilization_bonus = civilization_bonus;
    }
}