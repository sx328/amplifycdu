export default function (props) {
  let altMsg = `${props.name} profile picture`;
  return (
    <div class="col-md-6 col-lg-4 item">
      <div class="card">
        <div class="card-body">
          <img
            alt={altMsg}
            class="rounded-circle card-img-top"
            src={props.imageSrc}
          />
          <h3 class="name">{props.name}</h3>
          <p class="title">{props.title}</p>
          <p className="description">{props.bio}</p>
        </div>
      </div>
    </div>
  );
}
