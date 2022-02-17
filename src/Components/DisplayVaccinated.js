
const DisplayVaccinated = ({displayVaccinated}) => {
    return(
        <div className='Vaccinated'>
          <h3>💉Vaccinated</h3>
          <h6>
            {displayVaccinated.All 
            ? displayVaccinated.All.administered 
            : ''}
          </h6>
        </div>
    )
}

export default DisplayVaccinated;