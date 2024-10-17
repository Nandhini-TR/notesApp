import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  BgContainer,
  Heading,
  TextContainer,
  Title,
  TextArea,
  AddButton,
  NoNotesContainer,
  NoNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  UlListContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const onClickAdd = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }

    setNotesList(prevNotes => [...prevNotes, newNotes])
    setTitle('')
    setNotes('')
  }

  const isEmpty = notesList.length === 0

  return (
    <BgContainer>
      <Heading>Notes</Heading>
      <TextContainer onSubmit={onClickAdd}>
        <Title
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextArea
          rows="6"
          placeholder="Take a Note..."
          onChange={onChangeNotes}
          value={notes}
        />
        <AddButton type="submit">Add</AddButton>
      </TextContainer>
      <NoNotesContainer>
        {isEmpty ? (
          <>
            <NoNotesImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <NoNotesDescription>
              Notes you add will appear here
            </NoNotesDescription>
          </>
        ) : (
          <UlListContainer>
            {notesList.map(eachNotes => (
              <NoteItem key={eachNotes.id} notesList={eachNotes} />
            ))}
          </UlListContainer>
        )}
      </NoNotesContainer>
    </BgContainer>
  )
}

export default Notes
