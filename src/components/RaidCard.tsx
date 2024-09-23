import { raidTypes } from '../shared/enums/RaidTypes';
import { mapRaidTypeToRoute } from '../shared/functions/MapRaidTypeToRoute';
import VOG from '../assets/vog-thumbnail.jpg';
import CROTA from '../assets/crota-thumbnail.jpg';
import KF from '../assets/kf-thumbnail.jpg';
import DSC from '../assets/dsc-thumbnail.jpg';
import SAL from '../assets/sal-thumbnail.jpg';
import VOW from '../assets/vow-thumbnail.jpg';
import RON from '../assets/ron-thumbnail.jpg';
import { routes } from '../shared/constants/Routes';
import { Link } from 'react-router-dom';

function RaidCard(type: raidTypes) {
    const url: string = mapRaidTypeToRoute(type);
    const img = getImageForCard(url);

    return (
        <div className="card">
            <img className="img-fluid" src={img} alt={url} />
            <div className="card-body">
                <div className="card-title">{type}</div>
                <div className="card-text">
                    <Link
                        type="button"
                        to={`/${url}`}
                        className="btn btn-primary"
                    >
                        Play LFG Bingo for {type}
                    </Link>
                </div>
            </div>
        </div>
    );
}

function getImageForCard(url: string) {
    switch (url) {
        case routes.VOG:
            return VOG;
        case routes.CROTA:
            return CROTA;
        case routes.KF:
            return KF;
        case routes.DSC:
            return DSC;
        case routes.SAL:
            return SAL;
        case routes.VOW:
            return VOW;
        case routes.RON:
            return RON;
    }
}

export default RaidCard;
