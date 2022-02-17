
const DisplayDeaths = ({displayCases}) => {
    return(
      <div className='Deaths'>
        <h3>Deaths</h3>
        <h6>
          {displayCases.All  
          ? displayCases.All.deaths 
          : ''}
        </h6>
      </div>
    )
}

export default DisplayDeaths;