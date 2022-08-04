import ProfilLeft from "./ProfilLeft";
import ProfilRight from "./ProfilRight";

function ProfilPage() {
    return (
        <div className="row">
            <div className="col-md-auto">
                <ProfilLeft></ProfilLeft>
            </div>
            <div className="col col-lg-2">
                <ProfilRight></ProfilRight>
            </div>
        </div>
    );
}

export default ProfilPage;
