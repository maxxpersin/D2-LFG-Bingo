import RaidCard from './RaidCard';
import { raidTypes } from '../shared/enums/RaidTypes';

function RaidList() {
    const raids: any[] = [
        raidTypes.CROTA,
        raidTypes.DSC,
        raidTypes.KF,
        raidTypes.RON,
        raidTypes.SAL,
        raidTypes.VOG,
        raidTypes.VOW,
    ];

    return (
        <div className="container-fluid">
            <section>
                <div>
                    <h1>Raid List</h1>
                    <ul className="list-group list-group-flush">
                        {raids.map((raid: any) => {
                            return (
                                <li className="list-group-item">
                                    {RaidCard(raid)}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default RaidList;
