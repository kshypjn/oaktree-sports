
import PropTypes from 'prop-types';

const ModalContent = ({ heading, videoSrc }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  heading: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
};

export default ModalContent;