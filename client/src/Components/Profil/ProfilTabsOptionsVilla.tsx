import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Form from "react-bootstrap/Form";
import "../Styles/styles.css";
import {
    BlockTitle,
    List,
    ListItem,
    ListItemCell,
    Icon,
    Range,
    Block,
} from "framework7-react";
function ProfilTabsOptionsVilla() {
    const [value, setValue] = useState(200);

    return (
        //<Form>
        //    <Form.Group>
        //        <Form.Label>Price</Form.Label>
        //        <RangeSlider
        //            value={value}
        //            onChange={(e) => setValue(parseInt(e.target.value))}
        //            tooltipPlacement="top"
        //            tooltip="on"
        //            min={50}
        //            max={1000}
        //            variant="info"
        //            tooltipLabel={(currentValue) => `${currentValue}€`}
        //        />
        //    </Form.Group>
        //</Form>
        <>
            <BlockTitle>Brightness</BlockTitle>
            <List simpleList>
                <ListItem>
                    <ListItemCell className="width-auto flex-shrink-0">
                        <Icon
                            ios="f7:circle"
                            aurora="f7:circle"
                            md="material:brightness_low"
                        ></Icon>
                    </ListItemCell>
                    <ListItemCell className="flex-shrink-3">
                        <Range
                            min={0}
                            max={100}
                            step={1}
                            value={50}
                            label={true}
                            color="orange"
                        ></Range>
                    </ListItemCell>
                    <ListItemCell className="width-auto flex-shrink-0">
                        <Icon
                            ios="f7:circle_half"
                            aurora="f7:circle_half"
                            md="material:brightness_high"
                        ></Icon>
                    </ListItemCell>
                </ListItem>
            </List>
        </>
    );
}

export default ProfilTabsOptionsVilla;
