export default (props) => {
  return (
    <>
      <div className="container text-center">
        <h4 className="text-center">{props.title}</h4>
        <iframe
          allowFullScreen=""
          frameBorder="0"
          src={props.src}
          width="650"
          height="350"
        ></iframe>
      </div>
      <div className="container text-center">
        <a className="btn btn-success" role="button" href={props.notes}>
          Download Lecture Notes&nbsp;&nbsp;
          <i className="fa fa-cloud-download"></i>
        </a>
      </div>
    </>
  );
};
