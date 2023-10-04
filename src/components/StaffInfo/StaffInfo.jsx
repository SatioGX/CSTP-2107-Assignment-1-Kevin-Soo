import React from 'react'
import PropTypes from 'prop-types'
import StaffCard from '../StaffCard/StaffCard'
import './StaffInfo.css';

const StaffInfo = ({ data }) => {
  return (
    <div className='staff-container'>
        {
            data.map((staff, index) => {
                return <StaffCard staff={staff} key={index} />
            })
        }
    </div>
  )
}

StaffInfo.propTypes = {
    data: PropTypes.any
}

export default StaffInfo