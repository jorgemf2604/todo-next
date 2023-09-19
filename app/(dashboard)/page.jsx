import Image from "next/image";
import Link from "next/link";
import Photo from "@/public/images/notebook.jpg";

const Home = () => {
  return (
    <main className="py-5 px-10 max-w-[1600px] m-auto overflow-y-auto mt-28 sm:mt-20">
      <h2>This is the homepage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
        nesciunt molestiae consectetur reiciendis facere laborum, mollitia
        numquam eum amet ad ullam recusandae, quos aperiam obcaecati cupiditate
        distinctio nostrum assumenda tenetur laudantium nemo alias atque.
        Distinctio reiciendis perferendis aliquid exercitationem sint adipisci
        deleniti sapiente mollitia fugit! Accusantium temporibus dignissimos
        voluptas quidem accusamus! Consequatur, sapiente soluta. Est quis culpa
        tenetur cum unde, voluptate hic nihil exercitationem suscipit quisquam
        commodi modi voluptatibus aspernatur similique numquam sed iste velit!
        Aperiam accusantium totam dolores ratione recusandae voluptates dolorem
        fugiat quo quos magni, tempora enim nostrum mollitia qui iure corporis
        et reiciendis quasi autem maxime magnam.
      </p>
      <div className="mx-auto my-8 rounded shadow-2xl  w-[260px] h-[400px] relative sm:w-[600px]">
        <Image
          src={Photo}
          alt="a notebook"
          fill={true}
          className="object-cover rounded"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure
        eius deserunt nemo atque consequatur! Maiores incidunt recusandae sequi.
        Cum accusamus quo culpa amet. Tenetur, voluptatibus tempora! Ducimus
        ipsa harum unde upiditate! Eius totam eum corporis tenetur magnam
        exercitationem officiis ea velit iure sunt molestias voluptate
        distinctio, eligendi esse praesentium delectus quia autem nam alias
        mollitia, perferendis laborum numquam a! Praesentium nulla
        necessitatibus quo quae! In sapiente rem dolore repellat ad voluptates
        obcaecati, odio fugit et, quasi ea laboriosam ipsum atque nostrum
        quibusdam! Nostrum quam laudantium doloremque, numquam voluptatum maxime
        maiores inventore consequatur laborum voluptate tenetur quod quo aliquid
        praesentium, culpa ea mollitia, at cum pariatur quaerat perferendis
        earum animi odio. Voluptatem dolore omnis illum dolores consectetur vero
        eligendi, cumque ad quos tempore quisquam expedita eos tenetur
        laudantium repudiandae maxime sit tempora nulla rerum. Quibusdam
        repellat modi impedit atque nostrum eveniet, ratione, optio ex
        molestiae, quod deserunt enim beatae. Dolorem quibusdam dicta excepturi
        soluta dolores, possimus voluptas, aperiam laudantium assumenda porro
        odio! Facere minus quas omnis aut debitis ratione, earum tempore optio
        ullam magnam sint nisi molestiae harum enim, vitae dolor illum, quae
        consequuntur distinctio? Provident molestias aperiam eaque a
        consequatur! Veritatis perferendis sed animi delectus minus itaque
        earum, minima consectetur aut, eum doloribus nesciunt. Explicabo
        repellat quaerat vero illo veniam totam maiores eveniet adipisci debitis
        voluptatibus voluptates quis placeat molestiae nobis, autem dolorem
        commodi repellendus! Iusto ipsam dicta modi recusandae cumque porro
        nostrum ex eligendi? Quis quasi quam quidem! In incidunt sunt, iusto
        porro possimus tempora sapiente. Voluptatum quia quod, inventore non
        incidunt iusto corrupti iste? Omnis minus mollitia, neque dolores sequi
        ut ipsa deleniti tempora, quibusdam corrupti explicabo necessitatibus ex
        asperiores doloremque sunt laborum accusamus! Nostrum vel quas ipsum
        impedit, vero nulla eligendi quia error optio quasi consectetur
        provident? Ut fugiat libero quas explicabo blanditiis iusto, consectetur
        obcaecati velit atque voluptates accusamus non rem adipisci quibusdam
        ipsa deserunt labore ratione odit! Necessitatibus fugiat sequi ipsa nam
        tenetur consequatur repudiandae commodi itaque quidem neque cum in aut
        unde aspernatur saepe adipisci, laboriosam cupiditate minus quaerat
        natus consequuntur dignissimos sapiente, quae culpa! Obcaecati
        voluptates dicta maxime provident laudantium, sapiente tempora quo
        explicabo est distinctio beatae dignissimos impedit asperiores
        temporibus. Porro nam dolorum pariatur omnis quos vero reprehenderit
        doloremque et consequuntur, ab saepe dolores perspiciatis. Molestiae,
        exercitationem libero? Error ipsum facilis nostrum, ullam possimus
        dolorum in voluptatem ea maiores corrupti, esse nesciunt dolorem
        cupiditate iure omnis distinctio, libero veniam? Architecto, ipsa.
      </p>
      <br />
      <button className="btn">
        <Link href="todos">Fetch ToDos</Link>
      </button>
      <p className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam
        consectetur, natus quibusdam asperiores blanditiis provident placeat quo
        culpa aperiam recusandae esse ut accusantium officiis tempora quas
        soluta cum ducimus sit, quia dolorem voluptatum, minus debitis facilis!
        Accusantium laboriosam nesciunt amet perferendis, numquam veritatis
        error atque libero obcaecati, culpa nostrum repellat natus nulla magnam
        consequuntur temporibus qui facere earum nemo quis fugiat ducimus odio
        architecto molestias. Animi libero ullam quaerat eaque nobis odit
        laudantium ipsum, quis saepe neque sapiente nemo sed sit iure cum
        consectetur pariatur in eveniet nesciunt ut placeat mollitia doloribus
        voluptas eius. Voluptates obcaecati ex saepe cumque perferendis nobis
        rerum similique accusamus quaerat aliquid placeat ipsam nemo architecto
        tempora neque deleniti maxime ut, vitae, deserunt iusto numquam earum
        totam eveniet? Saepe ratione sunt odit at, illo impedit dolor quaerat
        error ut, quas officia magnam non aliquam obcaecati esse itaque
        provident reprehenderit corporis consequuntur sint aperiam quos deleniti
        earum? Temporibus quo quos esse molestias hic officia, repellat
        consectetur nesciunt aspernatur eaque, laborum vel ullam tempora ipsum
        dicta asperiores voluptates totam vitae. Distinctio, sit quod blanditiis
      </p>
    </main>
  );
};

export default Home;
