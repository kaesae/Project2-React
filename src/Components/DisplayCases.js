
const DisplayCases = ({displayCases}) => {
    return(
        <div className='Cases'>
          <h3 className="DisplayCasesTitle">📈Cases</h3>
          <h6 className="DisplayCases">
            {displayCases.All 
            ? displayCases.All.confirmed 
            : ''}
          </h6>
        </div>
    )
}

export default DisplayCases;