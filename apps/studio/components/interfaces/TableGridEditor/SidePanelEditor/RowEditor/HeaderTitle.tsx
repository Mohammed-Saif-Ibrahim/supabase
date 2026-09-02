interface HeaderTitleProps {
  isNewRecord: boolean
  isDuplicating?: boolean
  tableName?: string
}

export const HeaderTitle = ({ isNewRecord, isDuplicating, tableName }: HeaderTitleProps) => {
  const header = isDuplicating
    ? 'Duplicate row in '
    : `${isNewRecord ? 'Add new' : 'Update'} row ${isNewRecord ? 'to' : 'from'} `
  return (
    <span>
      {header}
      {tableName && <code className="text-code-inline text-sm!">{tableName}</code>}
    </span>
  )
}
