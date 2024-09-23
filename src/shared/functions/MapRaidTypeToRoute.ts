import { routes } from '../constants/Routes';
import { raidTypes } from '../enums/RaidTypes';

export function mapRaidTypeToRoute(type: raidTypes) {
    // This shit is so ugly and stupid, fix later
    switch (type) {
        case raidTypes.CROTA:
            return routes.CROTA;
        case raidTypes.DSC:
            return routes.DSC;
        case raidTypes.KF:
            return routes.KF;
        case raidTypes.RON:
            return routes.RON;
        case raidTypes.SAL:
            return routes.SAL;
        case raidTypes.VOG:
            return routes.VOG;
        case raidTypes.VOW:
            return routes.VOW;
    }
}
