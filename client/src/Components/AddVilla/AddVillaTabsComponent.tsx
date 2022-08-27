import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddVillaTabsInfo from "./AddVillaInfo";
import AddVillaTabsOptionsVilla from "./AddVillaTabsOptions";
import "../Styles/styles.css";

function AddVillaTabsComponent() {
    const [key, setKey] = useState("informationsPerso");
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="mb-3 tabs"
        >
            <Tab eventKey="informationsVilla" title="Informations sur la villa">
                <AddVillaTabsInfo></AddVillaTabsInfo>
            </Tab>
            <Tab eventKey="optionsVilla" title="Options de la Villa">
                <AddVillaTabsOptionsVilla></AddVillaTabsOptionsVilla>
            </Tab>
        </Tabs>
    );
}

export default AddVillaTabsComponent;
