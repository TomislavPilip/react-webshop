import "./blog.css";

export function Blog() {
  return (
    <main>
      <section>
        <div class="back_blog_color">
          <div class="card">
            <div class="image_card">
              <img
                src="Images/Blog/bikemoutains.jpg"
                alt="pogled na brdski bicikl i planine"
                width=""
                height=""
              />
            </div>
            <div class="card_info">
              <div class="card_text">
                <div class="label luxury">Brdski biciklizam</div>
                <h2>Iskoristite blagu zimu za odlazak u planine</h2>
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

          <div class="card">
            <div class="image_card">
              <img
                src="Images/Blog/cestovnibiciklizam.jpg"
                alt="vožnja cestom na cestovnom biciklu"
              />
            </div>
            <div class="card_info">
              <div class="card_text">
                <div class="label smartwatches">Cestovni biciklizam</div>
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

          <div class="card">
            <div class="image_card">
              <img src="Images/Blog/bikerepair.jpeg" alt="" />
            </div>
            <div class="card_info">
              <div class="card_text">
                <div class="label lifestyle">Održavanje bicikla</div>
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
