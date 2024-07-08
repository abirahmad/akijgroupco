import React from "react";

export default function page() {
  return (
    <div className="bg-gray-100 text-gray-800 w-[90%] mx-auto grid grid-cols-12 gap-2 mt-2  ">
      <div className="container mx-auto p-4 mt-2  col-span-8">
        {/* Main News Article */}
        <article className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img
            src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
            alt="Main News Image"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-2">Main News Title</h2>
          <p className="text-gray-600 mb-4  text-xs ">
            by Author Name on Created Date
          </p>
          <p className="leading-relaxed  mb-4 text-sm ">
            This is the detailed content of the main news article. It can be
            multiple paragraphs long and include any necessary details about the
            news.
          </p>
          <p className="leading-relaxed  text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            veniam, vel amet, ut earum provident, consectetur expedita similique
            modi recusandae quisquam voluptates. Quisquam quasi animi
            consectetur at illo ipsam, dolorem tempora, quas accusantium est,
            corrupti atque doloribus deleniti explicabo officia dolore
            architecto. Unde provident quas accusantium dolorem id quia expedita
            dicta eum sunt nostrum necessitatibus, fugit ut, dolorum tempora
            error voluptate! A veniam nostrum magnam nesciunt voluptate sit et.
            Facere consequatur est ad similique, quod harum esse inventore ea
            rerum maiores adipisci enim sequi deleniti earum unde veritatis
            iusto neque quisquam. Quidem, suscipit eaque. Voluptatum impedit
            enim sed voluptates cupiditate delectus porro facere ducimus eos,
            libero quam hic nisi dolorem eum nam voluptate placeat commodi
            repudiandae voluptas nemo possimus architecto odit corporis
            deleniti. Rerum quod architecto praesentium id. Neque facilis error,
            maxime delectus in nostrum facere ipsum odit porro ratione autem
            corrupti similique tempore ut rerum quis officiis excepturi dicta!
            Ducimus ipsa explicabo odit. Cumque, suscipit. Nulla quod deserunt
            quis impedit ipsa! Repudiandae sint rem possimus cum molestiae nisi,
            dicta voluptatibus est dolores distinctio odio corrupti ab rerum
            molestias ut numquam! Commodi, at soluta? Odio debitis, maxime
            quidem recusandae nulla nihil consequatur neque. Earum, impedit
            voluptas voluptates aliquam magnam ratione, minus quo blanditiis
            maxime asperiores quisquam repellat. Repellat expedita soluta a
            voluptate deleniti eaque, alias veniam labore, voluptas porro
            ratione ut temporibus at in dolore repudiandae magni? Nobis non in
            porro rerum at numquam reiciendis cupiditate aliquam facere, optio
            eaque libero quaerat repellat molestias ad voluptas mollitia
            perferendis sapiente nostrum aut similique quisquam. Cupiditate,
            quos porro ipsa facere qui nostrum consequuntur, distinctio, culpa
            animi minus veniam nam reiciendis dicta mollitia delectus error
            quisquam incidunt natus rerum facilis. Neque ea, earum voluptates
            sint repudiandae numquam fuga quibusdam esse quaerat doloribus eaque
            amet. Rem sed iusto suscipit? Corrupti quia officia necessitatibus
            nisi accusantium dolor veniam architecto, alias, velit soluta
            sapiente totam magni maxime numquam pariatur fugiat mollitia
            corporis ducimus, voluptatibus saepe eos ipsam! Accusantium nam
            voluptatum placeat, facere molestias voluptas excepturi quod
            dignissimos, error repellendus ratione nisi alias soluta blanditiis
            architecto accusamus tempore, sapiente reprehenderit. Placeat
            delectus inventore, expedita aliquid nisi nobis voluptate deleniti
            repellat hic distinctio temporibus sit nulla! Voluptatem placeat,
            nisi perferendis corporis, consequuntur esse corrupti voluptate
            reiciendis enim illum consequatur recusandae illo laboriosam porro
            veritatis libero? Quia mollitia iste at alias labore inventore vero,
            quas molestias esse tempora sunt nostrum excepturi, pariatur totam.
            Enim quae, exercitationem illo corporis voluptas labore ratione sit
            recusandae at, excepturi cumque. Laudantium nihil illo dolor rem,
            magnam ut deleniti exercitationem natus quidem? Aut quisquam est
            assumenda iste fugit necessitatibus totam itaque accusamus. Tempora
            qui distinctio debitis, hic saepe optio ad repudiandae doloribus
            aut, nostrum quam explicabo magnam. Quasi deleniti, rerum itaque in
            officiis sint eaque obcaecati? Molestias nihil, perspiciatis
            architecto ipsum, quod suscipit beatae unde iure veniam aliquam quia
            rem ratione harum aliquid, tempore reiciendis doloremque at dolores.
            Iste quod sint nisi aliquid provident deleniti sunt suscipit tempore
            ipsam rem dolor quam eos, vero voluptate repellendus minima
            laboriosam soluta maiores. Odio quibusdam pariatur doloribus.
          </p>
        </article>
        {/* Other News List */}
      </div>

      <div class="bg-white  p-4 mt-6  rounded-lg shadow-md col-span-4">
        <h3 class="text-2xl font-bold mb-4">Other News</h3>
        <ul>
          <li class="border-b border-gray-200 shadow-md p-2">
            <img
              src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
              alt="Main News Image"
              className="w-full  h-32 object-cover rounded-lg mb-4"
            />
            <a
              href="link-to-news-1"
              class="text-xl font-semibold text-blue-600 hover:underline"
            >
              Other News Title 1
            </a>
            <p class="text-gray-600 text-sm">
              A brief description of other news article 1.
            </p>
          </li>
          <li class="border-b border-gray-200 shadow-md p-2">
            <img
              src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
              alt="Main News Image"
              className="w-full  h-32 object-cover rounded-lg mb-4"
            />
            <a
              href="link-to-news-1"
              class="text-xl font-semibold text-blue-600 hover:underline"
            >
              Other News Title 1
            </a>
            <p class="text-gray-600 text-sm">
              A brief description of other news article 1.
            </p>
          </li>
          <li class="border-b border-gray-200 shadow-md p-2">
            <img
              src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
              alt="Main News Image"
              className="w-full  h-32 object-cover rounded-lg mb-4"
            />
            <a
              href="link-to-news-1"
              class="text-xl font-semibold text-blue-600 hover:underline"
            >
              Other News Title 1
            </a>
            <p class="text-gray-600 text-sm">
              A brief description of other news article 1.
            </p>
          </li>
          <li class="border-b border-gray-200 shadow-md p-2">
            <img
              src="https://today.thefinancialexpress.com.bd/uploads/1510675443.jpg"
              alt="Main News Image"
              className="w-full  h-32 object-cover rounded-lg mb-4"
            />
            <a
              href="link-to-news-1"
              class="text-xl font-semibold text-blue-600 hover:underline"
            >
              Other News Title 1
            </a>
            <p class="text-gray-600 text-sm">
              A brief description of other news article 1.
            </p>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
}
