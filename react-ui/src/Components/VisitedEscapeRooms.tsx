import { Collapse, CollapseProps, Empty, Flex, message, Result, Space, Spin } from "antd";
import { BookOutlined, LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { fetchVisitedEscapeRooms } from "../Actions/PersonActions";
import { VisitedEscapeRoom } from "../Models/EscapeRoom";

function VisitedEscapeRooms() {
    const [visitedEscapeRooms, setVisitedEscapeRooms] = useState<VisitedEscapeRoom[]>([]);
    const [loadingVisitedEscapeRooms, setLoadingVisitedEscapeRooms] = useState(true);

    useEffect(() => {
        async function fetch() {
            try {
                setLoadingVisitedEscapeRooms(true);
                setVisitedEscapeRooms(await fetchVisitedEscapeRooms(4));
                setLoadingVisitedEscapeRooms(false);

            } catch {
                setLoadingVisitedEscapeRooms(false);
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
                    children: visitedEscapeRoom.dateVisited === null ? "No Date" : (<div>{new Date(visitedEscapeRoom.dateVisited).toLocaleDateString()} </div>)
                }
            )
        })
        return escapeRooms;
    }

    return (
        <>
            <Spin spinning={loadingVisitedEscapeRooms} percent={'auto'} fullscreen size="large" indicator={<LoadingOutlined spin />} />
            {
                visitedEscapeRooms.length === 0 ? 
                    <Flex align="center" justify="center" style={{width: "100%", height: "100vh"}} ><Result icon={Empty.PRESENTED_IMAGE_DEFAULT} title={<span style={{color: "GrayText"}}>No Escape Rooms</span> } /></Flex> :
                    <Collapse items={escapeRooms()} bordered={false} accordion />
            }
        </>
    );
}
export default VisitedEscapeRooms; 