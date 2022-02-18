
const APIPage = () => {
    return(
        <div className="APIPage">
            <div className="APIPageBody">
                <p>This free API was created to keep track of covid cases around the world.
                The API can show varying statistics such as cases of covid, the amount of 
                vaccinations and deaths, population, and elevation to name a few.
                The API nests data by country then province/state/region depending on the
                country, followed by the statistics related to that location.
                </p>
                <p>https://github.com/M-Media-Group/Covid-19-API</p>
            </div>
        </div>
    )
}

export default APIPage;