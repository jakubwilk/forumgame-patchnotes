import { IMagicDefinition, MagicBadgesEnum } from '../models'

const STANDARD_MAGIC: IMagicDefinition = {
  data: {
    main: {
      id: 'b308c968-16b1-40ce-a007-dc47f2bc7f17',
      name: 'Zmiany ogólne',
      changes: [
        {
          id: 'b52efa81-90c9-4f64-a2c0-5f95b5899e94',
          text: 'Wszystkie magie zwykłe posiadają od teraz te same koszta PW równe 150/300/450',
          badge: {
            type: MagicBadgesEnum.UPDATE,
            text: 'Zaktualizowano',
          },
        },
        {
          id: '215fd44b-20a1-4f06-a46a-89ca4debff5c',
          text: 'Dodano specjalne nagłówki z poziomem oraz nazwą magii',
          badge: {
            type: MagicBadgesEnum.ADD,
            text: 'Dodano',
          },
        },
        {
          id: '61ab72df-a268-4dda-9e27-f20411cb1195',
          text: 'Usunięto opisy na każdy poziom magii',
          badge: {
            type: MagicBadgesEnum.DELETE,
            text: 'Usunięto',
          },
        },
      ],
    },
    magic: [
      {
        id: 'c38a0378-a839-49be-9253-a2d779488e37',
        name: 'Magia Ognia',
        imageUrl: 'https://imgur.com/PWyRmYs.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=235',
        alt: 'Obrazek staruszka z ogniem',
        changes: {
          main: [
            {
              id: 'cc8febdd-ac97-40d9-ad57-bbc50d2d6a16',
              text: 'Zmieniono koszta PU z 150/270/370 na 170/290/450',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'a02f49b1-518f-4d06-a295-b7cb696a5f72',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'ae3e4175-2b77-43c1-a896-050d5c141620',
                  text: 'Możliwość podpalania wszystkiego wokół Maga, została zamieniona na podpalanie po kontakcie bezpośrednim, razem z możliwościami ofensywnymi i uzupełniającymi',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '19154f7c-562d-42c9-b40b-0dd722d3c62a',
                  text: 'Możliwość zwiększania temperatury terenu wokół maga o 5 °C',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'cd372e0a-5e38-4587-9db1-23f37cea71c3',
                  text: 'Zwiększona wytrzymałość na wyższe temperatury o 5 °C w przeciwieństwie do pozostałych istot żywych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '5a1b53a8-6e09-4b42-80af-f17ffb7b95e6',
                  text: 'Możliwość aktywowania zapłonu z dostępnych wokół maga źródeł ciepła',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '59ca9c70-63e8-49c6-b00f-74731bd0959a',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'dad48723-0715-42a2-bd77-086739a8220f',
                  text: 'Możliwość zwiększania temperatury terenu wokół maga o 10 °C',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'bf14c9ba-ec11-4958-81ef-77bd1d52bf96',
                  text: 'Zwiększona wytrzymałość na wyższe temperatury o 10 °C w przeciwieństwie do pozostałych istot żywych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'e18c2900-c664-4417-a792-cbec40671ae1',
                  text: 'Możliwość tworzenia ścian ognia w celach defensywnych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'b8ccdd21-a6b0-403a-9f6a-60370e77a1c1',
                  text: 'Możliwość tworzenia słupów ognia prosto z dłoni, by razić przeciwnika z dystansu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '427e9661-57ac-4b17-9fbd-13b00ffcfbe9',
                  text: 'Możliwość otoczenia płomieniami maksymalnie dwóch kończych, zwiększając tym samym ofensywne zdolności',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '8a8ae6ba-05ae-452a-86cf-c7f71d532a40',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '2fa07952-d611-4287-bc73-136a03fea45f',
                  text: 'Możliwość zwiększania temperatury terenu wokół maga o 15 °C',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '193b3065-2bfc-4fb2-9ab1-560f7625f6c5',
                  text: 'Zwiększona wytrzymałość na wyższe temperatury o 15 °C w przeciwieństwie do pozostałych istot żywych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '12c58645-a672-4c0a-81c3-3060cbd3cda8',
                  text: 'Możlwiość zwiększenia zasięgu zaklęć, po przez wykorzystywanie otaczających maga źródeł ognia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '4a2ea57d-80dc-4525-87b8-8520c3379fff',
                  text: 'Zdolność do zmieniania kształtu, rozmiaru oraz kierunku ognia pochodzenia naturalnego, który znajduje się w zasięgu maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '57042654-9ae8-42bb-9426-42b559a575f3',
                  text: 'Możliwość otoczenia płomieniami całego ciała',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 'fbbcc6cb-de18-44ff-986c-09c9b4670516',
        name: 'Magia Lodu',
        imageUrl: 'https://imgur.com/PV6r1c3.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=234',
        alt: 'Gray na tle magicznej zmarźliny',
        changes: {
          main: [
            {
              id: 'cc8febdd-ac97-40d9-ad57-bbc50d2d6a16',
              text: 'Zmieniono koszta PU z 100/250/340 na 150/290/450',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'a02f49b1-518f-4d06-a295-b7cb696a5f72',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '19154f7c-562d-42c9-b40b-0dd722d3c62a',
                  text: 'Możliwość zmniejszania temperatury terenu wokół maga o -5 °C',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'cd372e0a-5e38-4587-9db1-23f37cea71c3',
                  text: 'Zwiększona wytrzymałość na niższe temperatury o -5 °C w przeciwieństwie do pozostałych istot żywych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '5a1b53a8-6e09-4b42-80af-f17ffb7b95e6',
                  text: 'Możliwość tworzenia lodowych elementów pancerza bądź prostego uzbrojenia do walki wręcz',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '59ca9c70-63e8-49c6-b00f-74731bd0959a',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'dad48723-0715-42a2-bd77-086739a8220f',
                  text: 'Możliwość zmniejszania temperatury terenu wokół maga o -10 °C',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'bf14c9ba-ec11-4958-81ef-77bd1d52bf96',
                  text: 'Zwiększona wytrzymałość na niższe temperatury o -10 °C w przeciwieństwie do pozostałych istot żywych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'e18c2900-c664-4417-a792-cbec40671ae1',
                  text: 'Zdolność do tworzenia dużo większych obiektów z lodu, takich jak meble, drzwi czy inne masywniejsze obiekty, które równie dobrze mogą posłużyć w celach defensywnyc',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'b8ccdd21-a6b0-403a-9f6a-60370e77a1c1',
                  text: 'Możliwość modyfikowania terenu wokół maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '427e9661-57ac-4b17-9fbd-13b00ffcfbe9',
                  text: 'Możliwość otoczenia lodem maksymalnie dwóch kończyn',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '38dcf270-cd28-471d-b148-f839e70bdce2',
                  text: 'Zdolność do tworzenia odstających lodowych elementów z ciała',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '8a8ae6ba-05ae-452a-86cf-c7f71d532a40',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '2fa07952-d611-4287-bc73-136a03fea45f',
                  text: 'Możliwość zmniejszania temperatury terenu wokół maga o -15 °C',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '193b3065-2bfc-4fb2-9ab1-560f7625f6c5',
                  text: 'Zwiększona wytrzymałość na niższe temperatury o -15 °C w przeciwieństwie do pozostałych istot żywych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '12c58645-a672-4c0a-81c3-3060cbd3cda8',
                  text: 'Możliwość pokrycia całego ciała cienką warstwą lodu zapewniającą perfekcyjną obronę',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '4a2ea57d-80dc-4525-87b8-8520c3379fff',
                  text: 'Zdolność do zwiększenia zasięgu swoich zaklęć po przez wykorzystanie lodu z otoczenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '57042654-9ae8-42bb-9426-42b559a575f3',
                  text: 'Możliwość tworzenia lodowych, statycznych tworów wykorzystując wodę z otoczenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a5599673-4013-47c4-a858-f357296ec430',
                  text: 'Możliwość odtworzenia kończyny z lodu',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '8a3c754e-a700-465a-9946-2321a014fe2c',
        name: 'Magia Wody',
        imageUrl: 'https://imgur.com/x8iHXkk.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=241',
        alt: 'Juvia wokół wodnych bąbelków',
        changes: {
          main: [
            {
              id: 'cc8febdd-ac97-40d9-ad57-bbc50d2d6a16',
              text: 'Zmieniono koszta PU z 170/270/380 na 160/270/460',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '873926cb-c2a2-47ca-9c12-38e9e0261d5e',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '83c6deca-c2cc-4f88-befd-efc093bdf56d',
                  text: 'Możliwość tworzenia określonych wodnych tworów w celach defensywnych',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '00e52ce7-ab5b-4c8a-ad65-0535ce183b79',
                  text: 'Możliwość oddychania pod wodą na głębokość do 5 metrów i określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'f99117b5-b5a4-439f-b314-6355c7ceaed8',
                  text: 'Możliwość otoczenia dłoni wodą do neutralizowania ciepła, magii oraz bezpośedniej ofensywny',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '948d23b1-6117-4f8c-8b14-572585cc70d7',
                  text: 'Możliwość stworzenia pocisku wodnego',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '771284e0-9d4d-45ed-9a42-11cd9c759394',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '6a027e69-90a6-42c5-8d02-bc0340517478',
                  text: 'Możliwość oddychania pod wodą na głębokość do 10 metrów i określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '16feb30e-8683-4ff8-a925-e3803d3bc4c8',
                  text: 'Zdolność do manipulowania wody pochodzenia naturalnego w celach ofensywnych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'cbdd47ff-d9cc-4af5-bb7a-09e36933c8ba',
                  text: 'Możliwość tworzenia sztucznej wody jako katalizator do zaklęć lub w celach ofensywnych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'e74420ec-c49f-481e-ab35-3e76c5e540df',
                  text: 'Możliwość zmiany maksymalnie dwóch kończyn w wodę',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
              ],
            },
            {
              id: '301e5c5c-ef79-414f-8909-572414412939',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '86a32dee-8cf9-48d3-8098-e0080ab2d086',
                  text: 'Możliwość oddychania pod wodą na głębokość do 15 metrów i określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'b1bf95b0-f497-4ee3-97ce-0c530e3bb1d9',
                  text: 'Możliwość stworzenia sztucznego deszczu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '4a6ca2ef-75e6-438c-b4d1-2401dfc3e2a3',
                  text: 'Zdolność do tworzenia wodnych struktur i modyfikowania terenu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7b2286ac-48bf-4655-b79b-5b3d3e95cc59',
                  text: 'Możliwość stworzenia ostrych pocisków z kropel deszczu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '317521ec-8e14-4a47-b397-def6326f9063',
                  text: 'Możliwosć kontrolowania wody znajdującej się w ludzkim ciele',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'ca9e33b0-b76f-412f-af12-cf77ee97e5d8',
                  text: 'Zdolność do zamiany dwóch kończyn w wodę',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
                {
                  id: '02b7043c-5a85-4a88-a94b-5a0b89d88aab',
                  text: 'Zdolność do zamiany całego ciała w wodę',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '7a7353de-9159-46ca-910f-b0ffc5253ae4',
        name: 'Magia Ziemi',
        imageUrl: 'https://imgur.com/iDhmkd6.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=236',
        alt: 'Jura otoczony magiczną poświatą wskazujący prosto na Ciebie',
        changes: {
          main: [
            {
              id: '67adc82e-e14e-45e3-9436-b46d2e2f4f51',
              text: 'Zmieniono koszta PU z 170/270/370 na 150/280/430',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'b3b84467-5c8a-4bc3-9572-35e28f1be8b5',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'c5304bfa-0bea-4321-9b5e-56a39ddf213b',
                  text: 'Zdolność kontrolowania niewielkich kamyczków i elementów żelaza w ziemi',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '7897f964-5337-4e5a-ba7a-88f52cc5840a',
                  text: 'Możliwosć formowania niewielkich, kamiennych pocisków',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a57464d2-6d12-4603-90ad-d148df4b87d5',
                  text: 'Możliwość stworzenia kamiennej ściany',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '2aefe1a5-6076-410e-b2ce-3eb9475c38e2',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '22d22db2-0f2e-43f0-ac5b-85193fa833a2',
                  text: 'Możliwość manipulowania większymi kawałkami skalnymi i fragmentami żelaza z ziemi',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '544c5a36-fbd3-4c92-a497-3efaa673cfab',
                  text: 'Możliwośóć kontrolowania terenu po przez tworzenie ścian i kopuł',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '46dd0c4f-7a96-4e8a-8984-5c6247087f75',
                  text: 'Zdolność do wywołania trzęsienia ziemi w celu zneutralizowania zakleć, dezorientacji przeciwników bądź zniszczeniu zabudowy miejskiej',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'eed37acc-b0d6-4114-9c9c-b86c8e69015b',
                  text: 'Możliwość otoczenia maksymalnie dwóch kończych kamienną warstwą ochronną',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: 'aa37b525-e08d-4d49-94c7-1d87195c5b50',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '9ab6c010-9ba4-4e0f-8fb2-17a01872e529',
                  text: 'Możliwość kontrolowania głazów i fragmenty ścian skalnych, a także żelaza znajdującego się w nich',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'a77c0143-cd80-4ca3-9486-5bbe7962189c',
                  text: 'Zdolność do całkowitej manipulacji terenu i tworzenia zamkniętych struktur',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '04924e39-bbf7-4a5c-8342-9461260da2de',
                  text: 'Możliwość wykrywania przeciwników bądź innych osób, po przez wyczuwanie drgań ziemi',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '79219f0a-97a2-4dd7-b72c-cfd8c9369147',
                  text: 'Możliwość stworzenia kamiennej zbroi pokrywającej całe ciało',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '7a8ab9ad-223f-4340-b206-fabc5970e335',
        name: 'Magia Wiatru',
        imageUrl: 'https://imgur.com/JO7jcmB.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=237',
        alt: 'Złowrogo śmiejąca się postać otoczona wiatrem',
        changes: {
          main: [
            {
              id: 'f5c0344a-ba4a-4e0c-a1c0-4e42b7b70a91',
              text: 'Zmieniono koszta PU z 180/280/380 na 160/260/420',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'dacf2035-ea41-4814-be1d-090e0a31c195',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'c0dfe285-bed0-4a70-ad02-2a6c4cea112a',
                  text: 'Możliwość latania za pomocą magii na wyokość 5 metrów przez określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '4f18a263-e610-432e-a453-c041901dde4f',
                  text: 'Możliwosć stworzenia niewielkiej tarczy wiatru',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '54a086e7-28be-4acc-9932-2f0b79474aff',
                  text: 'Możliwość wykonania wietrznych cięć',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '729d0c6a-8508-49e8-928b-6ed992dc0817',
                  text: 'Możliwość posłania fali wiatru do neutralizowania magii oraz wpływania na otoczenie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '4e4cc547-593c-4199-b9ed-8d45215ae73a',
                  text: 'Możliwość otoczenia wiatrem kończyn i odbijanie zaklęć magicznych',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: 'd37482d4-fb17-4d48-9a65-a0c113be232e',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'ca2ffe89-6c54-48d5-b777-854e9186c7fe',
                  text: 'Możliwość latania za pomocą magii na wyokość 10 metrów przez określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '4ad0f26b-ed3d-4570-948f-65bb3da8378a',
                  text: 'Możliwość zamiany dwóch kończyn w wiatr w celu uniknięcia krytycznych obrażeń',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'b782c9ef-7429-4965-b75c-7db50078e925',
                  text: 'Możliwość utworzenia ogromnej, wytrzymałem kopuły w celach defensywnych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'ff0a0c7c-7c68-4135-a709-5ac98b0b657e',
                  text: 'Zdolnosć do stworzenia ostrzy wiatru, które wyrastają z ramienia maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '35644e58-4584-426b-92f6-6766585c5310',
                  text: 'Możliwość wykorzystania wiatru jako nośnika informacji i komunikacji',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'cfc5bbc3-7501-4327-ab12-129eb525f9db',
                  text: 'Możliwość otoczenia kończyn sojuszników wiatrem',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '0a99d740-e979-4c4e-a546-b39f479c5577',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: 'a08b8641-309a-419b-9241-b8970ff93991',
                  text: 'Możliwość latania za pomocą magii na wyokość 15 metrów przez określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '0bd7456d-4802-45e5-9b33-440f9617946d',
                  text: 'Możliwość stworzenia większej ilości ścian wiatru',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '69740694-7089-459a-a654-0ee9d7a9f9bc',
                  text: 'Możliwość stworzenia specjalnej strefy otoczonej wiatrem, która jest w stanie zamknąć przeciwników wewnątrz odcinając ich od świata zewnętrznego',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'fc213a91-69f3-41ef-94a0-fcf36994008f',
                  text: 'Możliwość otoczenia całego ciała wiatrem',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a3a5bd93-3d42-48f6-9446-adb3e81b8dcd',
                  text: 'Zdolność do zamiany połowy ciała w wiatr',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '6213a8d2-1211-4aa8-a297-916c22fce26d',
        name: 'Magia Śniegu',
        imageUrl: 'https://imgur.com/eGp6V9C.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=268',
        alt: 'Blondwłosa postać za okręgiem magicznym',
        changes: {
          main: [
            {
              id: '3af66f3f-a4f4-46ef-ab86-8d4c1addb125',
              text: 'Zmieniono koszta PU z 180/290/390 na 170/270/450',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'dacf2035-ea41-4814-be1d-090e0a31c195',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'c0dfe285-bed0-4a70-ad02-2a6c4cea112a',
                  text: 'Możliwość schłodzenia ciała pojedynczego przeciwnika o -5 °C na określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'dc122a50-635c-45be-a76b-3d5d4cb15829',
                  text: 'Zdolność do tworzenia kilku ścian śnieżnych w celach defensywnych',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '4145c46c-ea7c-4427-8444-4eec8b515b40',
                  text: 'Zdolność do wystrzeliwania śnieżnych kul z dłoni',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '40322067-79e4-4d98-b57f-7e8a04781f6c',
                  text: 'Możliwość do niewielkiego modyfikowania terenu wokół maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: 'fa3371c0-0852-46f5-9bff-f05d1617d15f',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'c95c67a8-391a-41b9-9026-7ab9244066b4',
                  text: 'Możliwość schłodzenia ciała maksymalnie dwóch przeciwników o -10 °C na określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '0ca39907-558b-4b11-80ee-454eebdf623a',
                  text: 'Zdolność do stworzenia śnieżnej sfery mającej za zadanie więzić większą ilość przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '0a6e6755-270b-4378-b6f9-b143cc1bb331',
                  text: 'Możliwość tworzenia śnieżnych włóczni ciskanych bezpośrednio z dłoni',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7a7e16c2-0655-4d17-8cde-f0c6711fccef',
                  text: 'Możliwość tworzenia większych obiektów ze śniegu z otoczenia',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
                {
                  id: '440a1299-ea76-4b50-b21b-176252891bda',
                  text: 'Możliwość zamiany kończyny w śnieg',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '8a6e6ba9-2d56-4a4b-96be-1a7abd8a3d69',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: 'f7dac079-4d82-4f9a-8c88-6f1cf4fc1973',
                  text: 'Możliwość schłodzenia ciała maksymalnie trzech przeciwników o -15 °C na określoną ilość tur',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '7abe2383-bdea-4d15-bc54-dd4a741f8dc1',
                  text: 'Możliwość stworzenia ogromnej ilości śnieżnych kolców wokół maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '22d7e231-1a6c-4852-942a-b992b2235fae',
                  text: 'Możliwość stworzenia ogromnej śnieżnej ściany blokującej zaklęcia i ataki fizyczne',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '5a10127d-7ba5-4bfe-a284-5dd9f7155848',
                  text: 'Zdolność do uformowania śnieżnej areny wykorzystując śnieg z otoczenia, która więzi przeciwników wewnątrz',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'b3e5b46b-4a9c-4798-9c96-546a101a36ad',
                  text: 'Możliwość zmiany połowy ciała w śnieg',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 'f3549f6c-d497-453e-914a-a94aeecc22bb',
        name: 'Magia Światła',
        imageUrl: 'https://imgur.com/tKEz4HE.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=240',
        alt: 'Wieża niszczona energią światła od środka',
        changes: {
          main: [
            {
              id: '4aacbf49-dc15-4d5f-9919-e8c82b997ac3',
              text: 'Zmieniono koszta PU z 180/270/390 na 170/260/430',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '80d309ec-f33d-40af-9ab4-28adc2f44418',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '648ffeea-9b4f-43d3-b147-667a7d588e00',
                  text: 'Możliwość stworzenia kuli światła, do oświetlenia terenu wokół maga',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '657ac0a2-3ce3-422a-b8b7-61f8945b9ae1',
                  text: 'Zdolność do tworzenia błysków światła oślepiających przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7c6af865-52dd-4106-8630-a2ddd0639495',
                  text: 'Możliwość wystrzelenia świetlistych pocisków',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '5a0d4383-dee5-4933-8011-19fe9a31d7b4',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '09d18ccf-2080-4142-b5d9-3d891f64fdcf',
                  text: 'Możliwość stworzenia kuli światła, do oświetlenia terenu wokół maga',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'b2b1fceb-526c-42ed-9cfd-bd7e220df28e',
                  text: 'Możliwość tworzenia świetlistego klona, do dezorientacji przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'c80eaf4d-415d-4893-b420-6b82e1826047',
                  text: 'Zdolność do stworzenia ogromnego snopu światła w celach ofensywnych',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '57022d38-88a9-4ae1-9f28-c28ff9006af9',
                  text: 'Możliwość stworzenia kuli światła w dowolnym miejscu na ciele sojusznika',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: 'bacf4311-bd90-4f17-a251-99723e6532a2',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '90e0efb0-5a75-4e79-8e42-d4a057e33d84',
                  text: 'Możliwość stworzenia kuli światła, do oświetlenia terenu wokół maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '02c824d4-4faa-4ce6-bd33-5ec4872b96fa',
                  text: 'Możliwość wystrzelenia wiązek światła z lamp bądź innych źródeł, znajdujących się dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '5faeffa8-bc42-4a2c-b168-9a1e64cf3639',
                  text: 'Możliwość zamknięcia przeciwnika w niewielkiej klatce w kształcie piramidy',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '963be28a-5f6e-4f1c-942f-7a4b3b0e3fbf',
                  text: 'Zdolność do stworzenia kilku tarcz światła, które idealnie blokują nadchodzące ataki fizyczne i magiczne',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '49fdbf23-864b-4fcf-97f0-2b8662d6c416',
                  text: 'Możliwość do całkowitej zamiany ciała w światło',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '541d84e4-4e75-45af-b0bc-ac347013c0ea',
        name: 'Magia Ciemności',
        imageUrl: 'https://imgur.com/RDQXAUb.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=242',
        alt: 'Postać w wojskowym mundurze z rąk której ulatuje zielona magia',
        changes: {
          main: [
            {
              id: 'cdaa424d-c461-4fc1-92c3-d1f882e4cc56',
              text: 'Zmieniono koszta PU z 160/280/370 na 150/270/420',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '91dd51f7-e4fc-487b-ab3a-619ad89ae525',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'c14c3435-3b33-48af-b90a-8d5507112e1f',
                  text: 'Możliwość tworzenia ramion ciemności wydłużając zasięg chwytu maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'f7ff6e32-c087-4146-976b-33e47f42b5fb',
                  text: 'Możliwość wypuszczenia z dłoni fali ciemności',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a19f7aab-b579-41a1-bc7b-184070b2a0a8',
                  text: 'Zdolność do tworzenia magicznej ściany, która nie tylko blokuje zaklęcia i ataki, ale również wizje',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '4b90bb23-dbd5-49b7-902e-674bcea1d2e5',
                  text: 'Zdolność do rozpraszania ciemności wokół maga',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: 'af0d83d0-6aef-4325-8b00-9ab49b166c44',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '3cb68b0d-ff49-45f0-9ba4-f37d2e62a17a',
                  text: 'Możliwość zamiany maksymalnie dwóch kończyn w ciemność',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'c230d62d-cb72-4849-9cb2-3148119c721d',
                  text: 'Zdolność do stworzenia plamy ciemności, która wchłania przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'c2bed7a9-f202-4a7d-843e-2353a77c3054',
                  text: 'Możliwość stworzenia szponów ciemności do walki na bliskim dystansie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3df4cb11-506c-4fee-b138-58fb003d44d6',
                  text: 'Możliwość stworzenia niewielkich kolców ciemności wyrastających z ziemi dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'edd96f9e-d139-43c4-beb5-1275394b9b23',
                  text: 'Zdolnosć do pokrycia terenu ciemnością wokół maga',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '9e6cfc4e-b2df-40d9-934a-d65d6aed8caf',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: 'a60a3246-4464-48e2-9f3a-dbbf014dac14',
                  text: 'Możliwość zjednoczenia się z ciemnością  z otoczenia, powodując że mag całkowicie znika z pola widzenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3c91a720-125e-4db9-91e3-e24601b575f8',
                  text: 'Możliwość stworzenia ogromnej areny ciemności do zamkniecia kilku przeciwników jednocześnie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3a5cce43-4e26-48e5-8bcd-cd3e15daa705',
                  text: 'Zdolnośc do wystrzelania kul ciemności',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '6a1e71c7-2bc3-4646-99a3-72713a9599b1',
                  text: 'Zdolność do manipulowania ciemnością po przez zamianę swoich bądź kończyn sojuszników',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
                {
                  id: 'e45b226a-6618-4a6a-aea8-7752486cfded',
                  text: 'Możliwość całkowitej zamiany ciała w ciemność',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 'eb5e4101-41a8-4345-b7a9-90df84c7c58d',
        name: 'Magia Błyskawicy',
        imageUrl: 'https://imgur.com/B4dSWgt.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=238',
        alt: 'Laxus na tle żółtej poświaty jego magii',
        changes: {
          main: [
            {
              id: '41f05480-62b2-4d9a-a29c-95f1060cfedf',
              text: 'Zmieniono koszta PU z 180/280/380 na 140/260/430',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '43b2cdb2-720e-4981-be6c-111cd149ce65',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '7a797946-6ccf-47ef-83b7-91064d3686e2',
                  text: 'Zdolność do otoczenia całego ciała błyskawicami',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'ffa582d5-cdfe-4e5e-9433-b07af8361bfe',
                  text: 'Możliwosć ciskania błyskawicami w kierunku przeciwnika',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '9d86d144-6d9f-431c-abf3-e1ed8f5a7bcb',
                  text: 'Możliwość stworzenia kuli błyskawic, która służy jako źródło światła',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: 'fc0cef38-2a70-47b2-b021-fb3a0798fa5d',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '3a8fb13f-8a73-4d55-bd5c-45bd55178a26',
                  text: 'Możliwość pokrycia błyskawicami jedno z ramion',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '8d9d09d7-7da2-420d-96c4-c59cd38ff11a',
                  text: 'Możliwość stworzenia ogromnej, zamkniętej sfery otoczonej błyskawicami',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '1bb25203-45e5-49c6-8853-4d71bf3a41ef',
                  text: 'Zdolność do wykorzystania błyskawicy, po przez wycelowanie jej w jeden punkt',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '156c5ae2-8bda-4a88-9af4-96a2416b93ab',
                  text: 'Możliwość zamknięcia przeciwnika w klatkę złożoną z błyskawic',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'ee315788-0b9c-466c-97d3-69dbb4239d45',
                  text: 'Zdolnosć stworzenia zbroi błyskawic',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: 'b4218d4e-0115-4ed7-ac03-9a6c9d95c998',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: 'e9030099-074b-4bd9-af4e-7bc3357b1236',
                  text: 'Możliwosć stworzenia ostrza błyskawicy do walki na bliskim dystansie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'b437447c-ccf0-4423-b304-d22cdf33106e',
                  text: 'Zdolność do kierowania błyskawic w ziemie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7819f8cb-3ff4-4693-a4e4-bce7a7eb687c',
                  text: 'Możliwość stworzenia magicznych kul błyskawic, które ściągają na siebie nadchodzące zaklęcia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '0b70902d-c3a1-481e-9821-eee02d8b13b9',
                  text: 'Możliwość stworzenia włóczni błyskawicy',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '5ca787ea-d6d3-4496-b885-faebfaa34672',
                  text: 'Możliwość całkowitej zamiany w błyskawice',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '24e8125b-58ff-4371-8fbc-48cf6c1a435b',
        name: 'Magia Piasku',
        imageUrl: 'https://imgur.com/ZN9af2d.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=239',
        alt: 'Wybuch piachu na czubku góry',
        changes: {
          main: [
            {
              id: '537a3762-4e3f-4696-83fc-2752a95d9cc1',
              text: 'Zmieniono koszta PU z 170/280/380 na 140/280/430',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '0710d252-dd63-4062-ae8b-46d1ce4cf2ef',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '4423c5cc-87c5-4d37-8210-95d2ec0b970e',
                  text: 'Możliwość manipulowania pobliskiego terenu po przez tworzenie wzniesien i dolin w celach defensywnych',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'c518a908-176c-47f8-b7f6-ba675b5108f7',
                  text: 'Możliwość stworzenia ściany piasku wykorzystując go z otoczenia maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '44b30241-0dd2-4820-a5c5-ba6e24bf2001',
                  text: 'Zdolność do wystrzelenia pocisków piasku prosto z dłoni',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '33c12f70-c1ec-4821-9538-7d13c49a530e',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '314f389b-fdfe-4e24-b4b0-b2dea992d596',
                  text: 'Możliwość pokrycia ramion piaskiem w celu uniknięcia krytycznych obrażeń',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '9d2ce938-14b7-4d3b-9b1b-281913661546',
                  text: 'Możliwosć tworzenia piaskowych filarów w celach defensywnych bądź kontrolowania otoczenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '301795c1-1281-41fe-aeb9-c9f2aa4b73e2',
                  text: 'Zdolność do stworzenia piaskowej fali skierowaną w kilku przeciwników jednocześnie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '13e8d117-2260-40e2-bae7-1c377d858df5',
                  text: 'Zdolnosć do zamkniecia przeciwnika w niewielkiej piaskowej klatce',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: 'bfa009a0-8119-41af-8ee9-49af2f8e4593',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '5ec265b3-4020-4d71-a03b-5017df36054d',
                  text: 'Zdolność do pokrycia całego ciała piaskiem',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '6b7a1646-c5de-4ce4-aaa6-2c1cdf3f27ad',
                  text: 'Możliwosć tworzenia dwóch ogromnych dłoni zbudowanych z piasku, którymi można sterować na dystans',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '228a4ac7-f88e-4a09-82a1-3faeac9cdceb',
                  text: 'Zdolność do stworzenia ogromnej piaskowej klatki wykorzystując piasek z otoczenia maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'f7969bd3-4367-4b03-94da-67c37b1d6d66',
                  text: 'Możliwość stworzenia piaskowych włóczni, którymi można strzelać w kierunku przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '8b400e0d-fa41-453e-9c2b-b95878105c01',
                  text: 'Zdolność do stworzenia kilku piaskowych tarcz',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 'dd2472db-2483-4333-8542-50eb516269e0',
        name: 'Magia Papieru',
        imageUrl: 'https://i.imgur.com/9j7Q3PQ.jpg',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=243',
        alt: 'Postać, którą otaczają zielone kawałki papieru',
        changes: {
          main: [
            {
              id: 'e888e5ab-9fd2-4ad4-8db1-357d122470f0',
              text: 'Zmieniono koszta PU z 160/260/380 na 150/240/410',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '5e0d6284-3170-463d-9dc0-a6aaf9c778b6',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '6e4eeb4a-317c-4c2c-94f5-78deda8cfb10',
                  text: 'Możliwość stworzenia ogromnej tarczy wykorzystując papier z otoczenia maga',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '732a7f24-511b-4cf0-ba72-2c730a9fa2ca',
                  text: 'Możliwość stworzenia niewielkich papierowych pocisków możliwych do wystrzelenia w kierunku pojedynczego przeciwnika',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '33cee24f-4468-4e28-ad79-f3abb6e5ee4d',
                  text: 'Zdolność do wykorzystania kartek papieru jako miny wybuchowej mogącej zranić kilku przeciwników jednocześnie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '87aa3745-da7b-4564-aad0-6352bd13a5a0',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '74930cf0-a4b3-45f7-87e0-f87bba525ad9',
                  text: 'Możliwość pokrycia maksymalnie dwóch kończyn papierem',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '9fcb2125-559b-4c02-87f1-5483dbe7e35c',
                  text: 'Zdolność do stworzenia papierowych ostrzy idealnie sprawdzających się w walce na bliskim dystansie',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '155603a7-90b2-4307-b9c3-343edbea844e',
                  text: 'Możliwosć kontrolowania treści zapisanej na wszelkiego rodzaju papierze, książek czy gazet',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a9a6a3a0-fb64-4124-bf65-70eaea246f52',
                  text: 'Możliwość stworzenia papierowych skrzydeł pozwalających wznieść się w powietrze',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '36ce6688-017a-4516-89e9-802dbd1021a6',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '5c246be4-1114-4865-86df-93995c25d492',
                  text: 'Możliwość zamiany całego ciała w papier, który chroni przed krytycznymi obrażeniami',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'c7f37d5d-1396-4bd6-87e7-e76c5982cd9e',
                  text: 'Możliwość przesyłania informacji wykorzystując do tego papier z otoczenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '88bd3dcf-28be-4ffe-b2fe-1064d5d49408',
                  text: 'Zdolność do stworzenia ogromnych papierowych pocisków, którymi można miotać w wielu przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '2cd81bab-d280-40bd-a5e5-3fe0d094c2d6',
                  text: 'Możliwość stworzenia zamknietej areny, blokując całkowicie wizję na świat zewnętrzny',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3447e1a4-602f-4fd8-b6df-31bf0c7b4e5e',
                  text: 'Możliwośóć stworzenia papierowej broni',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '2f4b535d-51ce-477b-bc92-c73d059200f4',
        name: 'Magia Roślin',
        imageUrl: 'https://imgur.com/wpqc4V7.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=252',
        alt: 'Postać rzucająca ziarenka ku ziemi',
        changes: {
          main: [
            {
              id: '811dff61-7516-4202-b6cf-79086d6a7876',
              text: 'Zmieniono koszta PU z 150/270/380 na 150/270/410',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'f5f707c1-aad5-48fd-872f-3eac8489cd9f',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '8bec3bf8-2af1-416a-b0a6-d225ee4d4f02',
                  text: 'Możliwość przyspieszenia wzrostu trawy dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '7563daed-029d-4d2a-9bf4-7d86040320d4',
                  text: 'Zdolność do kontrolowania trawy dookoła maga, by wykorzystać ją do zatrzymania przeciwnika',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '808a69d9-6ab8-44ca-bd11-f2144640c1c8',
                  text: 'Możliwość stworzenia ogromnego kwiatu, który może posłużyć jako tarcza',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '16b55105-c200-4730-bc96-0eaf51646009',
                  text: 'Zdolność do stworzenia malutkich kwiatków, z których możliwe jest wystrzelenie pyłkowych pocisków',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '8914f53f-d86c-4f37-8a36-2e8676393a71',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '365f05d1-2087-44ec-bfd7-074367ccf827',
                  text: 'Zdolność do manipulowania większymi krzewami oraz małymi drzewami w celu zatrzymania na dłużej przeciwników',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '3051edf9-471b-48b6-895b-53f780e27677',
                  text: 'Możliwośc manipulowania drzewami znajdującymi się w otoczeniu maga, po przez z modyfikowanie długości kory w celu tworzenia defensywnych osłon',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7cc3b7d6-25fd-47e7-ae2a-8deb6b0c877b',
                  text: 'Zdolność do wystrzeliwania drewnianych pocisków',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'dbe5f16d-3d0f-4a2e-a4b3-bc8ea0064327',
                  text: 'Możliwość stworzenia roślinnych klatek do zamykania przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: 'bf324226-d675-48f5-8427-3540874edbaa',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '2c155af6-1ca4-416d-87df-2fd72913d60c',
                  text: 'Zdolność do pokrycia drewnem całego ciała, tworząc tym samym bardzo wytrzymają zbroję',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '2d23fc46-eb96-401c-ad75-57cde00744aa',
                  text: 'Możliwość wzmocnienia otaczającej maga zieleni, tworząc tym samym solidny i sporych rozmiarów mur',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '46598c8b-19a7-4c49-b711-cff318569d28',
                  text: 'Możliwość stworzenia roślinnych min eksplodujących na określonym obszarze',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '6f09b00a-2c23-47f4-9b2a-243d9827b633',
                  text: 'Zdolność do stworzenia wytrzymałego roślinnego miecza, który jest w stanie ułatwić walkę w zwarciu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3706a5c2-db39-4266-ae1f-b04b08bccd9b',
                  text: 'Możliwośóć manipulowania roślinami, po przez stworzenie niewielkiej tarczy',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '2e09a28f-d179-4fdc-b67c-8801bc77f109',
        name: 'Magia Cienia',
        imageUrl: 'https://imgur.com/MDIW2dd.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=270',
        alt: 'Wijące się cienie uderzające w drewniane skrzynki',
        changes: {
          main: [
            {
              id: 'a3a3ec44-3d39-4c3d-8d7a-78323ee7e3be',
              text: 'Zmieniono koszta PU z 180/280/390 na 150/270/420',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '9710a96a-e56e-4d6d-b8c5-58e8d8cdd593',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'ab9d198d-05f1-4fcf-8c42-dcfdd5444cf7',
                  text: 'Możliwość manipulowania cieniem i przekształcenia go w niewielką tarczę',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '243fe392-4a62-4454-9698-4d1b28d5ace6',
                  text: 'Możliwość kontrolowania ruchów innej osoby',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '53c8a833-3024-4799-bf8b-40e669aeb275',
                  text: 'Zdolność do rozszerzania i zwężąnia cienia w celu wyprowadzania ataków z dystansu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '59a75949-613b-4660-a178-663862deadca',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'f80329cc-8676-4b7a-9b29-d52add5dd081',
                  text: 'Możliwość kontrolowania ruchów innej osoby',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '52ac7f1a-3942-45ea-ad7a-03ef006449a1',
                  text: 'Możliwość wystrzelenia niewielkich pocisków z własnego cienia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '51b01219-0c04-4351-897c-b484b0899a42',
                  text: 'Możliwość stworzenia zasłony w celu uniknięcia poważnych obrażeń',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'ac348d2e-896e-4189-8c8a-1e37b393913a',
                  text: 'Zdolność do zanurzenia własnego ciała w cieniu, pod warunkiem że w pobliżu brakuje źródeł światła',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '668e74b6-4cee-4940-8212-a5bda4b562de',
                  text: 'Zdolność do przemiany jednej ze swoich kończyn w cień',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '07305f77-f1ec-4f86-bf64-55bb600b39fb',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: 'f2b0ee41-d0be-4b0c-a2f3-286694bd54b0',
                  text: 'Możliwość kontrolowania ruchów innej osoby',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '96f072ba-d860-41fc-ab0e-14f0c0150b32',
                  text: 'Zdolność do błyskawicznego przemieszczania się między różnymi obiektami, które rzucają cień',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'a7e53201-1a69-45a7-94e0-f21bde73b2cd',
                  text: 'Możliwość wystrzelenia cienistych kolców prosto z dłoni',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '24a374e0-a2b6-4482-a5ba-6c1f97d8e628',
                  text: 'Możliwość stworzenia ogromnej kopuły cienia w celach defensywnych, ale również ofensywnych do odseparowania mniejszej grupy przeciwników',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 'd321c0de-9380-403b-a28f-fcf11b6d5c88',
        name: 'Magia Dźwięku',
        imageUrl: 'https://imgur.com/GKUmjjb.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=315',
        alt: 'Fala dźwięku w kształcie okręgu zmierzająca niszcząca wszystko na swojej drodze',
        changes: {
          main: [
            {
              id: 'a8f91d21-c1f1-4c36-9600-8b1d3f26ed83',
              text: 'Zmieniono koszta PU z 180/270/380 na 160/280/420',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '6d36faec-66d9-4a70-9afd-b39a6dd91a8a',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: '779223e5-82df-4c55-8c07-fb3ffd008b0e',
                  text: 'Zdolność do przechwytywania cichych rozmów i szeptów dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '74fe02f9-b34e-4a87-a15c-aa82dece91cf',
                  text: 'Możliwość wystrzeliwania niewielkich pocisków dźwięku',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '79583164-4989-4539-9e79-ae244642153a',
                  text: 'Zdolność do stworzenia niewielkiej, wibrującej kuli z dźwięków zbieranych z otoczenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '70e30fdf-3147-4808-98c3-f0e9103a6082',
                  text: 'Możliwość do dezorientacji przeciwnika po przez wypuszczenie impulsu dźwięku',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '3cd64db3-7a87-447d-8817-cffb83985edc',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'fa5d43ae-0542-490a-b7b1-5297269ed50e',
                  text: 'Zdolność do przechwytywania cichych rozmów i szeptów na większym obszarze dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'd99934f5-bbcd-49b6-bfd5-b13e4fbdcf1e',
                  text: 'Możliwość wystrzelenia potężnego impulsu dźwięku, który jest w stanie nie tylko zdekoncentrować przeciwników, ale również ograniczyć ich możliwości bojowe na krótki czas',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'cf5001ed-25e1-488f-9821-dc0ad215c47e',
                  text: 'Możliwość stworzenia niewielkiej tarczy złożonej z dźwięków z otoczenia',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3a7c42d4-8f46-4d8c-b1d5-b1b82cbf50be',
                  text: 'Możliwość stworzenia głuchego obszaru, który pozbawia przeciwników słuchu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'aa9f299b-3788-43bd-989f-5064eac42c98',
                  text: 'Zdolność do uszkadzania bębenków na niedługi okres czasu',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: 'c8100154-03ad-4e2e-b791-89bf6f5b559d',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '0430a607-9e29-478f-9565-d6e5ac1cc7c2',
                  text: 'Zdolność do przechwytywania cichych rozmów i szeptów na jeszcze większym obszarze dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7ead791f-9198-43c8-a4d9-f4367ae24652',
                  text: 'Możliwość spowodowania niewielkiego wybuchu ze wszystkich źródeł dźwięku znajdujących się dookoła maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'be5e0997-a3bd-4865-9cbd-e94145240ea9',
                  text: 'Możliwość stworzenia ogromnej włóczni dźwięku, która w zetknięciu z celem wybucha',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'bb9d00e1-8ce3-43ea-aa34-2807a103d1c6',
                  text: 'Zdolność do rozproszenia ogromnego impulsu uszkadzającego nie tylko bębenki, ale również neutralizującego działania magicznych zdolności',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: 'b6696b6d-a4a4-40db-9eaf-126e3a620742',
        name: 'Figurowe Oczy',
        imageUrl: 'https://imgur.com/i9lBpJF.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=314',
        alt: 'Postać maga z językiem na wierzchu i oczami świecącymi na zielono',
        changes: {
          main: [
            {
              id: '7fd94702-0d3b-4ade-b0e5-a2af3029e44d',
              text: 'Zmieniono koszta PU z 180/280/390 na 140/270/410',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: 'de25fa01-df5b-48b5-a193-a863419b0fc3',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'ff3d7037-e25c-475f-95d2-6ad0c961579b',
                  text: 'Zmieniono koszty transferu duszy ze zwierzęcia i kontroli co turę z 10.000/5.000 na 5.000/2.000',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '2dafb28a-3b8f-42e6-bf4a-869ba8f363e6',
                  text: 'Możliwość kontrolowania maksymalnie jednej pustej lalki',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '88065cbc-243a-4a88-92f9-00239e07dc31',
                  text: 'Zdolność do wystrzelenia pojedynczego lasera z dowolnej lalki',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '39af18e7-73ca-410d-8688-a2d50d56f464',
                  text: 'Możliwość wykorzystania lalki, do zwiększenia zasięgu widoczności maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '992208fb-f4e2-4db2-b6b8-a3bf7d845c8d',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '158af12a-1f09-4a57-bc1e-5bc44771ee3d',
                  text: 'Możliwość kontrolowania maksymalnie dwóch pustych lalek',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a1f213ec-46a4-4396-870f-bce28781c7e4',
                  text: 'Zdolność do manipulowania magią z otoczenia, po przez naprowadzanie wrogich zaklęć na laleczki, które jako pierwsze przyjmują nadchodzący atak magiczny',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a1f213ec-46a4-4396-870f-bce28781c7e5',
                  text: 'Możliwość stworzenia niewielkiego, eterycznego ostrza wystającego z lalki, co pozwala na walkę w zwarciu, sterując lalką na odległość',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '0e322a31-db9c-483e-8127-38befbc755bd',
                  text: 'Możliwość wykorzystania lalki jako miny, która eksploduje na niewielkim obszarze',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
            {
              id: '6dec1ef3-ffb3-4eda-8124-538309b4e7ce',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: 'efc424fe-e37b-4b1b-ab0d-1fbdb003081a',
                  text: 'Zmieniono koszty transferu duszy z ciała maga i kontroli co turę z 20.000/15.000 na 15.000/8.000',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '83d3b6fb-556d-4acb-be69-72c53ca83d5d',
                  text: 'Możliwość kontrolowania maksymalnie trzech pustych lalek',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'e8a80f87-7c7d-42e0-8767-6820f0be8faa',
                  text: 'Zdolność do wykorzystania lalki jako urządzenia do komunikacji na odległość',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '997802d1-37d5-469f-af34-a52ad8c05e41',
                  text: 'Zdolność do stworzenia wokół laklki niewielkiej, eterycznej zasłony, która może posłużyć jakko tarcza przed nadchodzącymi atakami magicznymi i fizycznymi',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '6cb9be18-99be-406b-94a8-090eaade9177',
                  text: 'Możliwość wystrzelenia pocisków w kształcie sierpów z pojedynczej lalki',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '974e7092-2f42-43c7-8e16-4df2fcae6215',
        name: 'Drewniane tworzenie',
        imageUrl: 'https://imgur.com/rJoWREI.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=269',
        alt: 'Postać fioletowowłosej dziewczyny, która przywołuje drewno z ziemi',
        changes: {
          main: [
            {
              id: '1da53548-ba9d-4ea9-95bb-ea114870877f',
              text: 'Zmieniono koszta PU z 190/280/390 na 140/270/410',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '0d4891ce-addb-4c78-8d0a-46cfe6391076',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'a58eb857-3f78-45dd-84a0-651ac719fcdb',
                  text: 'Możliwość tworzenia prostych drewnianych przedmiotów, takich jak klucze, kubki, sztuće, mniejsze pojemniki i tym podobne',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '3037a449-7d6e-4af0-aa35-a38651dfe9d3',
                  text: 'Możliwość tworzenia drewnianych, statycznych menekinów, które mają za zadanie odwzorowywać sylwetki ludzi w celu odwrócenia uwagi',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '576be835-f260-448b-8eec-339c410ef605',
                  text: 'Zdolność do tworzenia drewnianej tarczy przymocowanej do ręki maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '70f4e348-edcf-4d88-a870-ca85a00807bd',
                  text: 'Możliwość wystrzelenia drewnianych kolców z dłoni',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '37fd0fb1-e371-41cd-8e35-c3202b622017',
                  text: 'Zdolność do tworzenia drewnianych elementów wystających z ciała maga',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: '301b1ed7-424e-485a-bfd5-b1b781e207bb',
              text: 'Poziom drugi',
              changes: [
                {
                  id: 'd5bf6a1d-9319-4f0e-bdee-642bc8f3de05',
                  text: 'Możliwość stworzenia niewielkich drewnianych elementów drewna wystających z ziemi, które potrafią zablokować ruchy przeciwnika',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'eb9372e0-a1c9-4acd-9d9a-80809246ff10',
                  text: 'Możliwosć wystrzelenia z dłoni drewnianych bali zmierzających w kierunku jakim wskazuje mag, które wiją się między sobą zwiększając swoją średnice',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '77fa55e8-cf30-4a57-a79c-46b087a9fc96',
                  text: 'Zdolność do stworzenia drewnianej bariery',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '4b48d700-80e0-49a2-88da-c877c51f635b',
                  text: 'Zdolność do przyzwania drewnianyah ckolców wyrastających z ziemii wokół maga',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: 'a25d5800-90d1-4098-bda7-26305da32c46',
                  text: 'Możliwość tworzenia drewnianych elementów wystających z ciał sojuszników',
                  badge: {
                    type: MagicBadgesEnum.DELETE,
                    text: 'Usunięto',
                  },
                },
              ],
            },
            {
              id: 'f3717640-ae1d-49c3-8374-6f1da195ae04',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '342278ef-ee4d-4d30-8b3d-6c93b6aa55cf',
                  text: 'Możliwość tworzenia drewnianych elementów uzbrojenia, które można zarówno aplikować na ciało maga jak i sojuszników',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'd00fd238-12f8-487d-90e1-edb4579eb41d',
                  text: 'Możliwość stworzenia drewnianej, ale bardzo wytrzymałej zbroi pokrywającej całe ciało',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '353a1691-8684-4bfb-b01d-49baee10e4f6',
                  text: 'Zdolność do stworzenia ogromnej, drewnianej ściany',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7f369309-c61d-4b7f-9bef-3f79a1bf4e96',
                  text: 'Możliwość tworzenia specjalnych kokonów, które zamykają przeciwników wewnątrz odcinając im dopływ tlenu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '7c4f2f8b-4636-4807-a572-a1813921a9e0',
                  text: 'Zdolność do stworzenia specjalnej drewnianej włóczni, którą można wystrzelić w kierunku przeciwnika powodując eksplozję',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        id: '9868c5ea-1634-4af7-ab46-5069d1248d3b',
        name: 'Magia podmiany',
        imageUrl: 'https://imgur.com/j2lonII.png',
        pageUrl: 'https://mageguildwars.pl/showthread.php?tid=101',
        alt: 'Postać Erzy wykorzystująca swoją magię do podmiany',
        changes: {
          main: [
            {
              id: '62e01804-6257-47ab-a890-686e016a5094',
              text: 'Zmieniono koszta PU z 200/300/400 na 100/200/350',
              badge: {
                type: MagicBadgesEnum.UPDATE,
                text: 'Zaktualizowano',
              },
            },
          ],
          levels: [
            {
              id: '118522e9-af89-42a9-a19d-532f8cbb6f38',
              text: 'Poziom pierwszy',
              changes: [
                {
                  id: 'ca4919da-efcf-4fae-bb70-f7a573081210',
                  text: 'Zmieniono koszt energii magicznej do przywołania zwykłego przedmiotu z 10.000 na 5.000',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
              ],
            },
            {
              id: 'cc7ef25b-2af5-4f23-9f67-f0783465688d',
              text: 'Poziom drugi',
              changes: [
                {
                  id: '03ffbbc0-8e6a-4ecb-b64e-dcc82d365184',
                  text: 'Zmieniono koszt energii magicznej do przywołania zwykłego przedmiotu z 5.000 na 3.000',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '574410e8-c9b2-400d-9a58-0d8af01ad552',
                  text: 'Koszt przyzwania magicznego przedmiotu jest teraz zależny od samego przedmiotu',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
              ],
            },
            {
              id: '5195b234-d896-499f-a23a-9a397bb0469f',
              text: 'Poziom trzeci',
              changes: [
                {
                  id: '0eb84871-a5a3-467b-9188-17e17015cc2d',
                  text: 'Koszt przyzwania magicznego przedmiotu jest teraz zależny od samego przedmiotu',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: '21aada9d-71a3-496e-9e83-9fe9203f668d',
                  text: 'Koszt podmiany artefaktu zależny jest od samego przedmiotu',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
              ],
            },
            {
              id: '84c105bd-2a1b-4dd2-9e64-b15ba92c3cb0',
              text: 'Inne',
              changes: [
                {
                  id: '61aceef4-186a-483b-a5dc-5e2cb12393f2',
                  text: 'Uwzględniono jakie dokładnie przedmioty mag może przechowywać w swoim specjalnym wymiarze',
                  badge: {
                    type: MagicBadgesEnum.UPDATE,
                    text: 'Zaktualizowano',
                  },
                },
                {
                  id: 'bf7b2fce-b507-4654-be3e-e165886536c9',
                  text: 'Uwzględniono informację o kosztach przywołania i odesłania przedmiotu',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
                {
                  id: '0a050221-ab1f-4da4-a0fa-d0777e8bd34b',
                  text: 'Możliwość ukradnięcia przedmiotu, który należy do innej osoby',
                  badge: {
                    type: MagicBadgesEnum.ADD,
                    text: 'Dodano',
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
}

export default STANDARD_MAGIC
