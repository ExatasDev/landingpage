import { useIntl } from "react-intl";

export default ({data}) => {

    const intl = useIntl();

    if(!data) return <></>
    return (
        <div className="modal__detailed">
            <div className="modal__detailed-image">
                {data.imageBackground ? (<img className="background-image" src={data.imageBackground}  />) : <div className="background-image default" />}
                <h1 className="title">
                    {data.title}
                    <br />
                    <span className="hashtags">{data.hashtags}</span>
                </h1>
            </div>
            
            <div className="modal__detailed-content">
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: data.description }) }} />
            </div>
        </div>
    )
}