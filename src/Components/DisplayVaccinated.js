
const DisplayVaccinated = ({displayVaccinated}) => {
    return(
        <div className='Vaccinated'>
          <h3 className="DisplayVaccinatedTitle">💉Vaccinated</h3>
          <h6 className="DisplayVaccinated">
            {displayVaccinated.All 
            ? displayVaccinated.All.administered 
            : ''}
          </h6>
        </div>
    )
}

export default DisplayVaccinated;