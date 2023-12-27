interface IProps {
  version: string
}

export function PatchNotesPage({ version }: IProps) {
  return <p>{`Aktualizacja do wersji ${version}`}</p>
}
