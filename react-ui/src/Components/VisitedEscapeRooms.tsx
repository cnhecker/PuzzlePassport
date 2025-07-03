import { Collapse, CollapseProps, message } from "antd";
import { useEffect, useState } from "react";
import { fetchVisitedEscapeRooms } from "../Actions/PersonActions";
import { VisitedEscapeRoom } from "../Models/EscapeRoom";


const escapeRooms: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: "text",
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: "text",
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: "text",
    },
];

function VisitedEscapeRooms() {
    const [visitedEscapeRooms, setVisitedEscapeRooms] = useState<VisitedEscapeRoom[]>([]);

    useEffect(() => {
        async function fetch() {
            try {
                setVisitedEscapeRooms(await fetchVisitedEscapeRooms(4));
            } catch {
                message.error("Something went wrong fetching the escape rooms");
            }
        }

        fetch();
    }, []);

    function escapeRooms() {
        const escapeRooms : CollapseProps['items'] = visitedEscapeRooms.map((visitedEscapeRoom, index) => {
            return (
                {
                    key: index,
                    label: visitedEscapeRoom.name,
                    children: (<div>{new Date(visitedEscapeRoom.dateVisited).toDateString()} </div>)
                }
            )
        })
        return escapeRooms;
    }

    return (
        <Collapse items={escapeRooms()} bordered={false} accordion/>
    );
}
export default VisitedEscapeRooms; 