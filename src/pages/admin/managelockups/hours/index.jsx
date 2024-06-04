import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function Hours() {
  const universityId = 1;
    const nameOfLU= 'hoursName';
    const property = 'الساعات';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/Hours?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Hours/${id}?updatedHour=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Hours/${id}`}
        apiUriPost={`https://localhost:7095/api/Hours`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

Hours.displayName = "Hours";

Hours.propTypes = {};

export { Hours };