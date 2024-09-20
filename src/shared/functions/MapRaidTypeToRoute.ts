import { routes } from "../constants/Routes";
import { RaidTypes } from "../enums/RaidTypes";

export function MapRaidTypeToRoute(type: RaidTypes) {
    // This shit is so ugly and stupid, fix later
    switch (type) {
        case RaidTypes.CROTA:
            return routes.CROTA;
        case RaidTypes.DSC:
            return routes.DSC;
        case RaidTypes.KF:
            return routes.KF;
        case RaidTypes.RON:
            return routes.RON;
        case RaidTypes.SAL:
            return routes.SAL;
        case RaidTypes.VOG:
            return routes.VOG;
        case RaidTypes.VOW:
            return routes.VOW;
    }
}