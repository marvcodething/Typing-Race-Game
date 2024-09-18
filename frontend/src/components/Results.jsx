import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
const Results = ({ accuracyPercentage, errors, total, className = '' }) => {
    const initial = { opacity: 0}
    const animate = { opacity: 1 }
    const duration = { duration: 0.3 }
    return (
        <motion.ul className={`flex flex-col items-center hero-content space-y-3 ${className}`}>
            <motion.li initial={initial} animate={animate} className="text-xl font-semibold" transition={{...duration,delay:0}}>Results</motion.li>
            <motion.li initial={initial} animate={animate} transition={{...duration,delay:0.5}}>Accuracy: {accuracyPercentage}</motion.li>
            <motion.li initial={initial} animate={animate} className="text-red-500" transition={{...duration,delay:1}}>Errors: {errors}</motion.li>
            <motion.li initial={initial} animate={animate} transition={{...duration,delay:1.4}}>Typed: {total}</motion.li>
        </motion.ul>
    );
};

Results.propTypes = {
    accuracyPercentage: PropTypes.number.isRequired,
    errors: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default Results;