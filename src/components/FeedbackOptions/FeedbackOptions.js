import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export default function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
        <div>
            {
                options.map((el, index) => (
                    <button
                        key={nanoid()}
                        type="button"
                        value={el}
                        onClick={onLeaveFeedback}
                    >{el}</button>
                ))
            }

        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}