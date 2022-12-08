import PropTypes from 'prop-types'

function Item({brand,release_year}){
    return(
        <>
            <li>
                {brand} - {release_year}
            </li>
        </>
    )
}

Item.propType={
    brand: PropTypes.string.isRequired,
    release_year: PropTypes.number,
}

Item.defaultProps={
    brand: 'The brand was not specified',
    release_year: 0,
}
export default Item