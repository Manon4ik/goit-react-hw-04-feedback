import PropTypes from 'prop-types';

export default function Notification({message}){
    return(
        <>
        {message && <p>{message}</p>}
        </>
    )
}

Notification.propTypes = {
    message : PropTypes.string.isRequired,
};