import Head from 'next/head'

const host = '⨏'

const functions = [
  {
    name: 'Words',
    items: [
      { symbol: '■', name: 'Noun' },
      { symbol: '●', name: 'Verb' },
      { symbol: '◧', name: 'Adjective' },
      { symbol: '◐', name: 'Adverb' },
      { symbol: '■', name: 'Preposition' },
      { symbol: '⊡', name: 'Pronoun' },
      { symbol: '□', name: 'Name' },
      { symbol: '○', name: 'Predicate' },
      { symbol: '⨳', name: 'Number' },
    ]
  }
]


const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]


export default function Home() {
  return (
    <div className="flex flex-col items-stretch justify-center min-h-screen py-2 font-sans">
      <Head>
        <title>{host}.to - Cloud-Native Functional Programming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center w-full flex-1 px-20 text-center">
        <header className="flex items- w-full flex-1 mt-5">
          <h1 className="text-left">
            <a href={`https://${host}.to`}>
              <span className="text-6xl font-thin">⨏</span>
            </a>
          </h1>
        </header>
        

        {/* <p className="mt-3 text-2xl">
          Cloud-Native Functional Programming
        </p> */}

        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            { functions.map(({name, items}) => (
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Words</h2>

                <div className="mt-20 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {functions[0].items.map(({name, symbol}) => (
                    <a key={name} href={`https://${symbol}.to`} className="group relative hover:text-gray-600 focus:text-gray-600">
                      <h2 className="text-6xl">
                        {symbol}
                      </h2>
                      <div className="mt-4">
                        <div>
                          <h3 className="text-sm text-gray-700">
                              {name}
                          </h3>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))

            }
          </div>
        </div>
      </main>

      <footer className="flex justify-center w-full h-24 border-t">
      { functions[0].items.map(({name, symbol}) => (
        <a className="flex px-5 items-center" href={`https://${symbol}.to`}> {symbol} </a>
      ))}
      </footer>
    </div>
  )
}
