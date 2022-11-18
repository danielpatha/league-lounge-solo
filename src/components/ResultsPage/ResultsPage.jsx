function ResultsPage (){
    useEffect(() => {
        dispatch({ type: "FETCH_RESULTS" });
      }, []);

    return(
        <>
        <h1>Results:</h1>   
        </>
    )
}

export default ResultsPage;