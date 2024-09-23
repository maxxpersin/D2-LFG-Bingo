import { useLocation } from 'react-router-dom';
import { raidTypes } from '../shared/enums/RaidTypes';
import shared from '../assets/bingo-boards/shared.json';
import crota from '../assets/bingo-boards/crota.json';

function RaidPage() {
    const location = useLocation();
    const raidType: raidTypes = getRaidType(location);
    const sharedBoardOptions = loadSharedBoardOptions();
    const bingoBoardOptions = loadBingoBoardOptions(raidType);

    const bingoBoard = generateBingoBoard(
        sharedBoardOptions,
        bingoBoardOptions
    );

    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">{raidType}</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">a</div>
                            <div className="col">a</div>
                            <div className="col">a</div>
                            <div className="col">a</div>
                            <div className="col">a</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getRaidType(location: any) {
    // ts is so elegant
    return raidTypes[
        location.pathname.replace('/', '') as keyof typeof raidTypes
    ];
}

function loadSharedBoardOptions() {
    return shared;
}

function loadBingoBoardOptions(type: raidTypes) {
    switch (type) {
        case raidTypes.CROTA:
            return crota;
    }

    throw Error;
}

function generateBingoBoard(shared: string[], spec: string[]): string[] {
    return [];
}

export default RaidPage;
