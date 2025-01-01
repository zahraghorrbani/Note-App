import PropTypes from "prop-types";

function NoteList({ notes }) {
    return (
        <div>NoteList
            {
                notes.map((item) => {
                    return <h1 key={item.id}>{item.title}</h1>
                })
            }
        </div>

    )
}

export default NoteList

NoteList.propTypes  = {
    notes: PropTypes.array
};