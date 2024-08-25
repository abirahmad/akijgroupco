import React from 'react'

export default function AkijMessage() {
  return (
    <div  
    id="content"
    className="py-12 bg-gray-100 shadow-lg bg-gradient-to-r from-blue-200 via-white to-blue-200" 
  >
    <div className="container mx-auto px-4" >
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 md:mb-0 p-2" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-800">
            Founder <strong>Message</strong>
          </h2>
          <p className="mt-4 text-gray-600 text-justify">
            Ei mel semper vocent persequeris, nominavi patrioque vituperata
            id vim, cu eam gloriatur philosophia deterruisset. Meliore
            perfecto repudiare ea nam, ne mea duis temporibus. Id quo
            accusam consequuntur, eum ea debitis urbanitas. Nibh reformidans
            vim ne.
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            Iudico definiebas eos ea, dicat inermis hendrerit vel ei,
            legimus copiosae quo at. Per utinam corrumpit prodesset te,
            liber praesent eos an. An prodesset neglegentur qui, usu
            ancillae posidonium in, mea ex eros animal scribentur. Et simul
            fabellas sit. Populo inimicus ne est.
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            Alii wisi phaedrum quo te, duo cu alia neglegentur. Quo nonumy
            detraxit cu, viderer reformidans ut eos, lobortis euripidis
            posidonium et usu. Sed meis bonorum minimum cu, stet aperiam
            qualisque eu vim, vide luptatum ei nec. Ei nam wisi labitur
            mediocrem. Nam saepe appetere ut, veritus graecis minimum no
            vim. Vidisse impedit id per.
          </p>
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center items-center md:items-start">
          <div className="flex flex-col items-center md:items-end w-full px-2 mb-4">
            <img
              src="/akijuddin.jpg"
              alt="Founders Image"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>  )
}
