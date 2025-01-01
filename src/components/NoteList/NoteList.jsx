import PropTypes from "prop-types";

function NoteList({ notes, onDeleteNote, onCompletedNote }) {
    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} onCompletedNote={onCompletedNote} />
                ))
            }
        </div>
    )
}

export default NoteList

function NoteItem({ note, onDeleteNote, onCompletedNote }) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return <div className={`note-item ${note.completed ? "completed" : ""}`}>
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button onClick={() => onDeleteNote(note.id)}>❌</button>
                <input type="checkbox" checked={note.completed} id={note.id} name={note.title} value={note.id} onChange={onCompletedNote} />
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </div>
    </div>
}

NoteItem.propTypes = {
    note: PropTypes.object,
    onDeleteNote: PropTypes.func,
    onCompletedNote: PropTypes.func,
};
NoteList.propTypes = {
    notes: PropTypes.array,
    onDeleteNote: PropTypes.func,
    onCompletedNote: PropTypes.func,
};
