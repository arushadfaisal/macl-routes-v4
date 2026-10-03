import {useState} from 'react'

class Route {
    forward: string;
    reverse: string;
    forwardTime: string[];
    reverseTime: string[];

}

const route1: Route = {
    forward : "ATC to WaterSupply",
    reverse : "Water Supply to ATC",
    forwardTime : ["01:00","03:00","05:00","06:00","07:00"] ,
    reverseTime : ["02:00","04:00","06:00"] ,
};

interface RouteTimeTableProps {
    route?: Route;
}

const ScheduleTable : React.FC<RouteTimeTableProps> = ({route = route1}) => {

    const totalRows = Math.max(route.forwardTime.length, route.reverseTime.length);

    return (
        <div className='flex flex-col min-w-sm max-w-md items-center justify-center gap-5 mt-10 bg-amber-100'>
            <table className='w-full min-w-max table-auto'>
                <thead className='border-b bg-amber-200 text-center'>
                    <th className="p-2">{route.forward}</th>
                    <th className="p-2">{route.reverse}</th>
                </thead>
                <tbody className='text-center align-center'>
                    {Array.from({ length: totalRows }).map((_, index) => (
                        <tr key={index}>
                            <td className="p-2">{route.forwardTime[index]}</td>
                            <td className="p-2">{route.reverseTime[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable;