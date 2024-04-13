import React from "react";
import Chronologicallogic from "../../Tools.logic/ChronologicalAge.logic/page";
import fonts from "../../Tools.logic/Style/fonts.css";

const page = () => {
  return (
    <section>
      <div
        style={{
          maxWidth: "screen",
          minWidth: "auto",
          fontFamily: "Montserrat, sans-serif",
        }}
        className=" pr-3 md:flex "
      >
        {/* calc & article */}
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
          className=" lg:px-12 md:px-6 sm:px-3 py-3 "
        >
             <h1 className="text-3xl font-bold mb-4 text-center">
             Chronological Age Calculator
             </h1>
          {/* <h1 className="font-bold text-xl lg:text-xl xl:text-2xl pb-3 text-blue-900">
            Love Calculator
          </h1> */}
          <p className="font-medium text-base lg:text-base xl:text-lg pb-2">
            Calculate your due date and the number of weeks you are pregnant.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            maxime optio quo nostrum.
          </p>
          {/* start */}
          <Chronologicallogic/>
          {/* related */}
          <div className="related bg-gray-200 rounded-sm p-2 md:p-3 shadow-md mt-6 mb-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 md:text-base">
              Related:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="bg-sky-700 text-white font-medium px-2 py-2 rounded-sm hover:bg-sky-600">
                Period Calculator
              </button>
              <button className="bg-sky-700 text-white font-medium px-2 py-2 rounded-sm hover:bg-sky-600">
                Due Date Calculator
              </button>
            </div>
          </div>

          {/* Article */}

          <article className=" mx-auto px-2 md:px-0 shadow-lg lg:p-3">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-900 text-center">
              Due Date Calculator
            </h2>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  Calculate your due date and the number of weeks you are
                  pregnant.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Subheading
                </h3>
                <p className="text-base leading-relaxed mb-6 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore similique laudantium vero. Quia doloribus odio
                  assumenda exercitationem accusamus sed fugit animi, fuga
                  cupiditate optio provident nisi consequuntur eos rem dolor
                  hic, praesentium sit commodi vel possimus beatae cumque ullam
                  perferendis veniam! Inventore repellat laborum aut praesentium
                  illo minus obcaecati cum dolores necessitatibus reiciendis,
                  ipsam repellendus impedit totam. Eveniet ut nihil obcaecati
                  quas accusantium iusto quasi quo cum laudantium vel minima
                  ducimus aliquid, debitis repudiandae, asperiores similique
                  modi eligendi corrupti nulla culpa? Ipsum placeat dolorem
                  dicta minima suscipit est doloribus modi quod, iusto
                  consequatur provident? Natus quibusdam dolores culpa odio?
                  Facilis sed temporibus veritatis necessitatibus nulla fuga id
                  vero. Eius ullam temporibus sed, sequi perspiciatis debitis
                  numquam error molestiae placeat porro.
                </p>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">
                  Another Subheading
                </h4>
                <p className="text-base leading-relaxed mb-6 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  adipisci culpa sunt fugiat consequatur quas architecto,
                  dignissimos ea cumque obcaecati dolorem ad molestias, quidem
                  sit necessitatibus ut odio quis ipsam libero et eaque illum
                  labore facilis. Repellendus ipsam eos, eius non alias dolorem
                  ducimus aspernatur adipisci accusamus neque animi ex magnam,
                  eum quae necessitatibus dicta molestiae. Corrupti sapiente,
                  aliquam enim excepturi at aspernatur voluptatum qui provident
                  vero nemo quam est ut obcaecati odit rem. Ex est, quaerat
                  dicta, labore ea porro incidunt corrupti, eligendi
                  consequuntur fugiat animi libero quos maiores perspiciatis
                  ipsam tempore! Hic eveniet ducimus ea beatae itaque blanditiis
                  corrupti nemo error? Delectus, voluptas vitae! Atque
                  consectetur aperiam aliquid!
                </p>
                <h5 className="text-lg font-semibold mb-3 text-blue-600">
                  Yet Another Subheading
                </h5>
                <p className="text-base leading-relaxed mb-6 text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque maxime iste quos magni cupiditate illum blanditiis
                  possimus voluptas voluptatum dolor dicta debitis, dignissimos
                  rem. Dicta quod sapiente, maiores id pariatur neque incidunt
                  ab vel aliquam quae architecto repellendus magni molestias.
                  Ipsum facilis aut consectetur deserunt ratione. Dolores harum,
                  porro quo enim eaque obcaecati repudiandae voluptatum non
                  voluptates labore in laboriosam ut et tempora sunt repellat,
                  perferendis veniam sed. Dolorum assumenda sapiente earum
                  labore voluptates quasi dolorem, repellat quia, officia
                  quaerat aspernatur quae explicabo magni eligendi?
                  Reprehenderit fugit distinctio, similique consequuntur quas
                  perspiciatis necessitatibus dolor, molestiae adipisci vitae
                  sit nam architecto possimus dolores magni. Minus qui
                  distinctio officia laborum unde voluptatem voluptates dolor
                  harum totam quas. Perspiciatis tenetur temporibus culpa
                  praesentium, quod fugiat quaerat omnis sunt blanditiis
                  excepturi ipsum facere nobis ea porro facilis corporis.
                  Blanditiis pariatur tempore hic, dignissimos accusantium
                  exercitationem magni, perferendis impedit dolorem voluptatem
                  veritatis soluta saepe. Facilis, cupiditate ipsum. Recusandae
                  in quis, commodi minima, voluptatem doloribus quae quisquam ut
                  sequi magnam reiciendis illo repudiandae sed? Quis,
                  repellendus.
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* Relevant calculators side */}
        {/* <div className="bg-blue-100 rounded-lg p-4 shadow-lg flex flex-col items-center mt-5 mb-5 sm:ml-4 md:ml-0 lg:ml-0 xl:ml-0 h-80">
          <div className="mb-4">
            <input
              type="search"
              className="lg:w-48 sm:w-36 rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
            <button className="bg-sky-600 text-white font-medium px-4 py-2 rounded-md ml-2 hover:bg-sky-500">
              Search
            </button>
          </div>

          <div className="text-center">
            <h2 className="bg-sky-600 text-white px-4 py-2 text-lg font-semibold rounded-md mb-3">
              Explore More Calculators
            </h2>
            <div className="flex flex-wrap justify-center items-center mt-2">
              <button className="bg-sky-700 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-600 text-sm md:text-base lg:text-base mr-2 mb-2">
                BMI Calculator
              </button>
              <button className="bg-sky-700 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-600 text-sm md:text-base lg:text-base mr-2 mb-2">
                Pregnancy Calculator
              </button>
              <button className="bg-sky-700 text-white font-medium px-4 py-2 rounded-md hover:bg-sky-600 text-sm md:text-base lg:text-base mb-2">
                Period Calculator
              </button>
            </div>
          </div>
        </div> */}

        {/* relevant end */}
      </div>
    </section>
  );
};

export default page;

