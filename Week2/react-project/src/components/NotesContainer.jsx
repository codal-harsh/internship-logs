import Notes from "./Notes";

const NotesContainer = ({notes}) => {
  return (
    <div className="container-fluid p-0 m-0 w-100 mt-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-auto gap-3">
        {notes?.map((_, index) => (
          <div className="col" key={index}>            
            <Notes title={_.title} description={_.description} date={_.date} favorite={_.favorite} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
