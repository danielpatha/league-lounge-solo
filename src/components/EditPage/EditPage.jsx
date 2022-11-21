import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditPage(){
    const dispatch = useDispatch();
    const params = useParams();
    const specificLeague = useSelector((store) => store.editPageReducer);

 

    return(
        <>

        </>

    )
}






export default EditPage;