


const DisplayCases = ({displayCases}) => {
    return(
        <div className='Cases'>
          <h3>Cases</h3>
          <h6>
            {displayCases.All 
            ? displayCases.All.confirmed 
            : ''}
          </h6>
        </div>
    )
}

export default DisplayCases;