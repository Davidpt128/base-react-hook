import React from 'react'
import Select from 'react-select';

const Search = (props) => {
    return (
        <Select
            defaultValue={props.valueSearch}
            onChange={props.handleSearchBtn}
            options={props.options}
        />
    )
}

export default Search