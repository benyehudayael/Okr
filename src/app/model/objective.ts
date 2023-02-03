import { DateRange } from "./dateRange";
import { Person } from "./person";
import { Privacy } from "./privacy";

export class Objective {
    constructor(
        public description: string,
        public dateRange: DateRange,
        public assignie: Person,
        public privacy: Privacy
    ) { }
}