import { MantineProvider } from '@mantine/core'
import { Greetings } from './greetings/components'
import { Header } from './header/components'
import { TutorialsList } from './updates/tutorials/components'
import { MagicList } from './updates/magic/components'

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: 'Poppins, sans-serif', headings: { fontFamily: 'Merriweather, serif' } }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className={'container mx-auto max-w-5xl'}>
        <Header
          title={'Aktualizacja 1.4'}
          description={'Zmiany w poradnikach, a także modyfikacja magii pod kątem zdolności wbudowanych'}
        />
        <Greetings
          text={
            'Celem zmian stały się poradniki, które będąc podstawą rozgrywki na forum, były dosyć niejasne i niekiedy przestarzałe do obecnych realiów forum. Zmiany domagały się również magie, które są niezbędne do tego, by prowadzić rozgrywkę na najwyższym poziomie. Korzystając z okazji, poprawie uległy mniejsze aspekty rozgrywki, które choć nie mają tak dużego impaktu jeżeli chodzi o rozgrywkę, to nie mniej stanowią jej część.'
          }
          authors={'– Vincent'}
        />
        <TutorialsList />
      </div>
      <MagicList />
    </MantineProvider>
  )
}

export default App
