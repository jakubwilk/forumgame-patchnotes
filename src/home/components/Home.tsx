import { Header } from '@app/header'
import { Greetings } from '@app/greetings'

function Home() {
  return (
    <div className={'container mx-auto max-w-5xl'}>
      <Header
        title={'Aktualizacja 1.4'}
        description={
          'Zmiany w poradnikach, aktualizacja magii zwykłych i dodatkowych, dodanie magii specjalnych oraz ogólne poprawki na forum'
        }
      />
      <Greetings
        text={
          'Celem zmian stały się poradniki, które będąc podstawą rozgrywki na forum, były dosyć niejasne i niekiedy przestarzałe do obecnych realiów forum. Zmiany domagały się również magie, które są niezbędne do tego, by prowadzić rozgrywkę na najwyższym poziomie. Korzystając z okazji, poprawie uległy mniejsze aspekty rozgrywki, które choć nie mają tak dużego impaktu jeżeli chodzi o rozgrywkę, to nie mniej stanowią jej część. Zaktualiowano również motyw forum, by spełniał najnowsze wymogi aplikacji internetowych pod kątem dostępu do treści na urządzeniach mobilnych, a także wprowadzono szereg usprawnień i nowości.'
        }
        authors={'– Vincent'}
      />
    </div>
  )
}

export default Home
