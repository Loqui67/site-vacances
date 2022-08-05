import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProfilTabsInfoPerso from "./ProfilTabsInfoPerso";
import ProfilTabsOptionsVilla from "./ProfilTabsOptionsVilla";
import "../Styles/styles.css";

function ProfilRightTabsComponent() {
    const [key, setKey] = useState("informationsPerso");
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="mb-3 tabs"
        >
            <Tab eventKey="informationsPerso" title="Informations personnelles">
                <ProfilTabsInfoPerso></ProfilTabsInfoPerso>
            </Tab>
            <Tab eventKey="optionsVilla" title="Options Villa">
                <ProfilTabsOptionsVilla></ProfilTabsOptionsVilla>
            </Tab>
        </Tabs>
    );
}

export default ProfilRightTabsComponent;
