import "./blog.css";
import blogData from "../Database/blogdata";

export function Blog() {
  console.log(blogData);
  console.log(blogData[0].img);
  console.log(blogData[0].title);
  return (
    <main>
      <section>
        <div className="back_blog_color">
          <div className="card">
            <div className="image_card">
              <img
                src={blogData[0].img}
                alt="pogled na brdski bicikl i planine"
                width=""
                height=""
              />
            </div>
            <div className="card_info">
              <div className="card_text">
                <div className="label luxury">Brdski biciklizam</div>
                <h2>{blogData[0].title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas necessitatibus quae enim? Voluptatem dolor quis fugit
                  magnam corrupti ex neque veritatis eos reprehenderit
                  perferendis. Omnis, dolorem tempore? Cumque, quis
                  laboriosam...
                </p>
              </div>
              <a href="#">Read more &rarr;</a>
            </div>
          </div>

          <div className="card">
            <div className="image_card">
              <img
                src="Images/Blog/cestovnibiciklizam.jpg"
                alt="vožnja cestom na cestovnom biciklu"
              />
            </div>
            <div className="card_info">
              <div className="card_text">
                <div className="label smartwatches">Cestovni biciklizam</div>
                <h2>Putevima Tour de Francea</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, voluptatibus nulla. Dolore, eum quo. Ex labore magnam
                  repellendus consectetur cumque obcaecati sunt, voluptas
                  explicabo dolor temporibus reprehenderit sit hic optio...
                </p>
              </div>
              <a href="#">Read more &rarr;</a>
            </div>
          </div>

          <div className="card">
            <div className="image_card">
              <img src="Images/Blog/bikerepair.jpeg" alt="" />
            </div>
            <div className="card_info">
              <div className="card_text">
                <div className="label lifestyle">Održavanje bicikla</div>
                <h2>Predajte vaš bicikl u sigurne ruke</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia voluptas magni harum, saepe totam optio sapiente
                  voluptatum fugiat at. Nesciunt possimus accusamus obcaecati
                  labore minus facere, ipsum aspernatur quae magni...
                </p>
              </div>
              <a href="#">Read more &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
