
const DisplayDeaths = ({displayCases}) => {
    return(
      <div className='Deaths'>
        <h3 className="DisplayDeathsTitle">☠️Deaths</h3>
        <h6 className="DisplayDeaths">
          {displayCases.All  
          ? displayCases.All.deaths 
          : ''}
        </h6>
      </div>
    )
}

export default DisplayDeaths;