import { useIntl } from "react-intl";

export default ({data}) => {

    const intl = useIntl();

    if(!data) return <></>
    return (
        <div className="modal__basic">
            <div className="modal__basic-image">
                {data.image ? (<img className="background-image" src={data.image}  />) : <div className="background-image default" />}
            </div>
            
            <div className="modal__basic-content">
                <h1 className="title">
                    {data.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: data.description }) }} />
            </div>
        </div>
    )
}