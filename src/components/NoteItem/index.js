import {ListContainer, ListHeading, ListNotes} from './styledComponents'

const NoteItem = props => {
  const {notesList} = props
  const {title, notes} = notesList

  return (
    <ListContainer>
      <ListHeading>{title}</ListHeading>
      <ListNotes>{notes}</ListNotes>
    </ListContainer>
  )
}

export default NoteItem
