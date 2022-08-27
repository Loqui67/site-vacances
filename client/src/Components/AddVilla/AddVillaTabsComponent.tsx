import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddVillaTabsInfo from "./AddVillaTabsInfo";
import AddVillaTabsOptions from "./AddVillaTabsOptions";
import "../Styles/styles.css";

function AddVillaTabsComponent() {
    const [key, setKey] = useState("informationsVilla");
    return (
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="mb-3 tabs"
        >
            <Tab eventKey="informationsVilla" title="Informations sur la villa">
                <AddVillaTabsInfo />
            </Tab>
            <Tab eventKey="optionsVilla" title="Options de la Villa">
                <AddVillaTabsOptions />
            </Tab>
        </Tabs>
    );
}

export default AddVillaTabsComponent;
