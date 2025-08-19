'use client';

import dynamic from "next/dynamic";

const WorkedLearnDialog = dynamic(
    () => import("../sub/WorkedLearnDialog"),
    { ssr: false }
);

const ClientWorkedLearnDialog: React.FC = () => {
    return <WorkedLearnDialog />;
};

export default ClientWorkedLearnDialog;