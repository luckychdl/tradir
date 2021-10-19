import React from "react";
import MaterialTable from "material-table"

const Table = () => {

  return (
    <div style={{ height:"100%" }}>
      <MaterialTable
        columns={[
          { title: 'Avatar', field: 'url' },
          { title: 'Name', field: 'name' },
          { title: 'Abv', field: 'abv' },
          { title: 'Brewed', field: 'brewed' },
          { title: 'Add Basket', field: 'basket' }
        ]}
        data={[{ name: 'Buzz', abv: '4.5', brewed: "09/2007", basket: "add" }]}
        title="Beer List"
      />
    </div>
  )
}

export default Table