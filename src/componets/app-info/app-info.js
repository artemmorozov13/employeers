import "./info.css";

const AppInfo = (props) => {
    const {getEmplsNumber,getRiseEmplsNumber} = props;

    return(
        <div className="app-info">
            <h1>Учет сотрудников нашей компании</h1>
            <h2>Общее число сотрудников: {getEmplsNumber()}</h2>
            <h2>Премию получат: {getRiseEmplsNumber()}</h2>
        </div>
    )
}

export default AppInfo;