import React from 'react';
import logo from './bla.jpg';
import kny from './images (44).jpeg'
//import './App.css';
import {Row,Col, Container} from "react-bootstrap";
function App() {

  return (<div>

   

    <div className="App">
      <header className="App-header">
      
          <div className="app">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
      
      </header>

      <h3>Latest Release</h3>

      <ul>
        <li>Bakuman</li>
        <li>Fullmetal Alchemist</li>
        <li>Bungo Stray Dogs</li>
        <li>Bleach</li>
        <li>Shield Hero</li>
        <li>The Promised Neverland</li>
        <li>Haikyuu</li>
        <li>Noragami</li>
      </ul>
      <div className="col">
        <div id="Album" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={require('./images (60).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (62).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (68).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (67).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (65).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (64).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (61).jpeg')} />
            </div>

            <div className="carousel-item">
              <img src={require('./images (66).jpeg')} />
            </div>

          </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#Album" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#Album" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div >

<div className="javascript">

</div>
    <div className="content">

      <h2>#1 Kimetsu no Yaiba</h2>
      <Container>
    <Row>
        <Col xs={4}>
          <img src={kny} />
        </Col>
       <Col xs={8}>
          <h5>Status:Completed</h5>
          <h5>Genre:Adventure</h5>
          <h5>Author:Koyoharu Gotouge</h5>
          <p>The story takes place in Taishō-era Japan. It follows protagonist Tanjiro Kamado and his sister
          Nezuko
          Kamado as they seek for a cure to Nezuko's demon curse. Tanjiro and Nezuko become entangled in the
          affairs
          of a secret society, known as the Demon Slayer Corps, that have been waging a secret war against
          demons
          for centuries. The demons are adder humans who sold their humanity in exchange for power, they feed on
          humans and possess super natural abilities such as super strength, magic and regeneration. Demons can
          only
          be killed if they're decapitated with weapons crafted from an alloy known as Sun Steel, injected with
          the
          poison of a flower called Wisteria, or exposed to sunlight. The Demon Slayers, on the other hand, are
          entirely human, however, they employ special breathing techniques, known as breaths, which grant them
                  syuperhuman strength and increased resistance.</p>
          <br />
          </Col>
        </Row>
        </Container>
  





    <h2>#2 Boku no Hero Acadamia</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (41).jpeg')} />
        <div className="col">
          <h5>Status:Ongoing</h5>
          <h5>Genre:Fantasy</h5>
          <h5>Author:Kohei Horikoshi</h5>
          <p>The story of My Hero Academia is set in a world where currently most of the human population has
          gained
          the ability to develop superpowers called "Quirks" (個性, Kosei), which occur in children within the age
          of four: it is estimated that around 80% of the world population has a Quirk. There are infinite types
          of Quirks, and it is extremely unlikely to find two people who have the exact same power, unless they
          are closely related. These particular abilities have allowed the development of a new category of
          people: Heroes, who face the evil-voted individuals who use the Quirks for selfish and criminal
          purposes, commonly known as Villains. In addition, Heroes who choose to exercise heroism at work level
          are recognized as Pro Heroes. Unless the individual is registered as a Pro Hero, the voluntary use of
                  his or her Quirk in public places is considered a crime, except in exceptional cases</p>
          <br />
        </div>
      </div>
    </div>

    <h2>#3 Naruto</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./naruto_1_1.jpg')} />
        <div className="col">
          <h5>Status:Completed</h5>
          <h5>Genre:Adventure</h5>
          <h5>Author:Masashi Kishimoto</h5>
          <p>A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire,
          one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha, the
          Fourth Hokage (with his wife Uzumaki Kushina) seals the fox inside the body of his newborn son, Naruto
          Uzumaki, making Naruto a host of the beast; this costs Naruto's father his life, and the Third Hokage
          returns from retirement to become leader of Konoha again. Naruto is often ridiculed by the Konoha
          villagers for being the host of the Nine-Tails. Because of a decree made by the Third Hokage
          forbidding anyone to mention these events, Naruto knows nothing about the Nine-Tails until 12 years
          later, when Mizuki, a renegade ninja, reveals the truth to Naruto. Naruto then defeats Mizuki in
                  combat, earning the respect of his teacher Iruka Umino</p>
          <br />
        </div>
      </div>
    </div>



    <h2>#4 Dr.Stone</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (38).jpeg')} />
        <div className="col">
          <h5>Status:Ongoing</h5>
          <h5>Genre:Science Fiction</h5>
          <h5>Author:Riichiro Inagaki</h5>
          <p>Beginning in April 5738 A.D., it's been over 3,700 years since a mysterious flash of light
          petrified nearly all human life. A 16-year-old genius named Senkū Ishigami is suddenly revived to
          find himself in a world where all traces of human civilization have been eroded by time. Senkū sets
          up a base-camp and begins to study the petrified humans in order to determine the cause of the
          event, as well as a cure.Over the next 6 months, Senkū learns his revival was made possible with
          nitric acid. With this discovery, he develops a compound that will allow him to instantly revive
          others. He begins by reviving his friend Taiju Ōki, their classNamemate Yuzuriha Ogawa, and a famous
          martial artist named Tsukasa Shishiō, with the goal of rebuilding civilization with a focus on
                  science.</p>
          <br />
        </div>
      </div>
    </div>


    <h2>#5 One punch man</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (49).jpeg')} />
        <div className="col">
          <h5>Status:Ongoing</h5>
          <h5>Genre:Comedy</h5>
          <h5>Author:One</h5>
          <p>On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities.
          In response, the millionaire Agoni creates the Hero Association, which employs superheroes to
          fight evil. Saitama, an unassociated hero, hails from City Z and peradds heroic deeds for his own
          enjoyment. He has trained himself to the point of being able to defeat any enemy with a single
          punch, but his unmatched strength has left him with an overwhelming sense of boredom.Saitama
          eventually becomes a reluctant mentor to Genos, a cyborg seeking revenge against another cyborg
          who killed his family and destroyed his hometown. Saitama and Genos join the Hero Association, but
          due to scoring low on the written entry exam, Saitama is placed at a low-entry rank, and his feats
                  remain unnoticed and unappreciated by the public</p>
          <br />
        </div>
      </div>
    </div>
    <h2>#6 One piece</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (39).jpeg')} />
        <div className="col">
          <h5>Status:Ongoing</h5>
          <h5>Genre:Adventure</h5>
          <h5>Author:Eiichio Oda</h5>
          <p>The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and
          powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the
          titular treasure and proclaim himself the King of the Pirates. In an effort to organize his own
          crew, the Straw Hat Pirates, Luffy rescues and befriends a swordsman named Roronoa Zoro, and
          they head off in search of the One Piece. They are joined in their journey by Nami, a navigator
          and thief; Usopp, a sniper and a pathological liar; and Vinsmoke Sanji, a womanizing chef. They
          acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the
          East Blue. As Luffy and his crew set out on their adventures, others join the crew later in the
                  series, as they sail the seas in pursuit of their dreams.</p>
          <br />
        </div>
      </div>
    </div>
    <h2>#7 Tokyo Ghoul</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (34).jpeg')} />

        <div className="col">
          <h5>Status:Ongoing</h5>
          <h5>Genre:Supernatural</h5>
          <h5>Author:Sui Ishida</h5>
          <p>The story follows Ken Kaneki, a college student who barely survives a deadly encounter with
          Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in
          critical condition. After recovering, Kaneki discovers that he underwent a surgery that
          transadded him into a half-ghoul. This was accomplished because some of Rize's organs were
          transferred into his body, and now, like normal ghouls, he must consume human flesh to
          survive. The ghouls who manage the coffee shop "Anteiku" take him in and teach him to deal
                  with his new life as a half-ghoul</p>
          <br />
        </div>
      </div>
    </div>

    <h2>#8 Death Note</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (35).jpeg')} />
        <div className="col">
          <h5>Status:Completed</h5>
          <h5>Genre:Mystery</h5>
          <h5>Author:Tsugumi Ohba</h5>
          <p>In Tokyo, an intelligent yet disaffected high-school student named Light Yagami finds the
          "Death Note", a mysterious black notebook which can kill anyone as long as the user knows
          both the target's name and face. After verifying that the notebook works and initially being
          terrified of its god-like abilities, Light begins to consider the possibilities of the Death
          Note's abilities and sets out to create a utopian world without crime, killing numerous
          high-profile Japanese criminals, before eventually targeting international criminals and
                  felons around the world. </p>
          <br />
        </div>
      </div>
    </div>

    <h2>#9 Attack on Titan</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (36).jpeg')} />
        <div className="col">
          <h5>Status:Ongoing</h5>
          <h5>Genre:Action</h5>
          <h5>Author:Hajime Isayama</h5>
          <p>Eren Yeager (Jaeger in the anime adaptation) lives with Mikasa Ackerman and best friend
          Armin Arlert in the town of Shiganshina adjacent to Wall Maria, outermost of three
          circular walls protecting humanity from man-eating Titans said to have killed all other
          humans one hundred years prior. When Shiganshina and Wall Maria are breached by the
          Colossal (Colossus in the search) and Armoured Titans, invading Titans force humanity to
          retreat behind Wall Rose. After a titan devours his mother and his father disappears, a
                  vengeful Eren enlists in the military along with Mikasa and Armin.</p>
          <br />
        </div>
      </div>
    </div>
    <h2>#10 Monster</h2>
    <div className="row">
      <div className="col-auto">
        <img src={require('./images (37).jpeg')} />
        <div className="col">
          <h5>Status:Completed</h5>
          <h5>Genre:Mystery</h5>
          <h5>Author:Naoki Urasawa</h5>
          <p>Dr. Kenzo Tenma is a young Japanese brain surgeon, working at Eisler Memorial Hospital
          in Düsseldorf, West Germany. Tenma is dissatisfied with the political bias of the
          hospital in treating patients, and seizes the chance to change things after a massacre
          brings fraternal twins Johan and Anna Liebert into the hospital. Johan has a gunshot
          wound to his head, and Anna mutters about killing; Tenma operates on Johan instead of
          the mayor, who arrived later. Johan is saved, but Mayor Roedecker dies; Tenma loses his
          social standing. Director Heinemann and the other doctors in Tenma's way are
          mysteriously murdered, and both children disappear from the hospital. The police suspect
                  Tenma, but they have no evidence and can only question him.</p>
          <br />
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h2 className="text-light">Jump Collection:</h2>

          <div id="Album" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={require('./images (50).jpeg')} />
              </div>

              <div className="carousel-item">
                <img src={require('./images (51).jpeg')} />
              </div>

              <div className="carousel-item">
                <img src={require('./images (52).jpeg')} />
              </div>

              <div className="carousel-item">
                <img src={require('./images (43).jpeg')} />
              </div>

            </div>
          </div>
          <a className="carousel-control-prev" href="#Album" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#Album" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
          <script src="hideviewbtn.js"></script>

        </div>
      </div>
    </div >
  </div>
  </div >
  )
}
export default App;
