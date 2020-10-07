import React from 'react';
import logo from './bla.jpg';

import './App.css';

import { Row, Col, Container } from "react-bootstrap";
class comics {
    constructor(titles, genres, statuses, author, imagePath,summary) {
        this.comictitle = titles
        this.comicgenre = genres
        this.comicstatus = statuses
        this.comicauthor = author
        this.imagePath = imagePath
        this.summary=summary
    }
    changeStatus(statuses) {
        this.comicstatus = statuses
    }
}
function Top10() {
    const comic1 = new comics("#1 Kimetsu no yaiba", "Adventure", "Completed", "Koyoharu Gotouge", "images (44).jpeg",<p>The story takes place in Taishō-era Japan. It follows protagonist Tanjiro Kamado and his sister
    Nezuko Kamado as they seek for a cure to Nezuko's demon curse. Tanjiro and Nezuko become entangled in the
    affairs of a secret society, known as the Demon Slayer Corps, that have been waging a secret war against
    demons for centuries. The demons are humans who sold their humanity in exchange for power, they feed on
    humans and possess super natural abilities such as super strength, magic and regeneration. Demons can
    only be killed if they're decapitated with weapons crafted from an alloy known as Sun Steel, injected with
    the poison of a flower called Wisteria, or exposed to sunlight. The Demon Slayers, on the other hand, are
    entirely human, however, they employ special breathing techniques, known as breaths, which grant them
    superhuman strength and increased resistance.</p>)
    const comic2 = new comics('#2 Boku no Hero Acadamia', 'Fantasy', 'Ongoing', 'Kohei Horikoshi', "images (41).jpeg",<p>The story of My Hero Academia is set in a world where currently most of the human population has
    gained the ability to develop superpowers called "Quirks" (個性, Kosei), which occur in children within the age
    of four: it is estimated that around 80% of the world population has a Quirk. There are infinite types
    of Quirks, and it is extremely unlikely to find two people who have the exact same power, unless they
    are closely related. These particular abilities have allowed the development of a new category of
    people: Heroes, who face the evil-voted individuals who use the Quirks for selfish and criminal
    purposes, commonly known as Villains. In addition, Heroes who choose to exercise heroism at work level
    are recognized as Pro Heroes. Unless the individual is registered as a Pro Hero, the voluntary use of
    his or her Quirk in public places is considered a crime, except in exceptional cases.</p>)
    const comic3 = new comics('#3 Naruto', 'Adventure', 'Completed', 'Masashi Kishimoto', "naruto_1_1.jpg",<p>A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire,
    one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha, the
    Fourth Hokage (with his wife Uzumaki Kushina) seals the fox inside the body of his newborn son, Naruto
    Uzumaki, making Naruto a host of the beast; this costs Naruto's father his life, and the Third Hokage
    returns from retirement to become leader of Konoha again. Naruto is often ridiculed by the Konoha
    villagers for being the host of the Nine-Tails. Because of a decree made by the Third Hokage
    forbidding anyone to mention these events, Naruto knows nothing about the Nine-Tails until 12 years
    later, when Mizuki, a renegade ninja, reveals the truth to Naruto. Naruto then defeats Mizuki in
    combat, earning the respect of his teacher Iruka Umino.</p>)
    const comic4 = new comics('#4 Dr.Stone', 'Science Fiction', 'Ongoing', 'Riichiro Inagaki', "images (38).jpeg",<p>Beginning in April 5738 A.D., it's been over 3,700 years since a mysterious flash of light
    petrified nearly all human life. A 16-year-old genius named Senkū Ishigami is suddenly revived to
    find himself in a world where all traces of human civilization have been eroded by time. Senkū sets
    up a base-camp and begins to study the petrified humans in order to determine the cause of the
    event, as well as a cure.Over the next 6 months, Senkū learns his revival was made possible with
    nitric acid. With this discovery, he develops a compound that will allow him to instantly revive
    others. He begins by reviving his friend Taiju Ōki, their classmate Yuzuriha Ogawa, and a famous
    martial artist named Tsukasa Shishiō, with the goal of rebuilding civilization with a focus on
    science.</p>)
    const comic5 = new comics('#5 One punch man', 'Comedy', 'Ongoing', 'One', "images (49).jpeg",<p>On a supercontinent Earth, powerful monsters and villains have been wreaking havoc in the cities.
    In response, the millionaire Agoni creates the Hero Association, which employs superheroes to
    fight evil. Saitama, an unassociated hero, hails from City Z and peradds heroic deeds for his own
    enjoyment. He has trained himself to the point of being able to defeat any enemy with a single
    punch, but his unmatched strength has left him with an overwhelming sense of boredom.Saitama
    eventually becomes a reluctant mentor to Genos, a cyborg seeking revenge against another cyborg
    who killed his family and destroyed his hometown. Saitama and Genos join the Hero Association, but
    due to scoring low on the written entry exam, Saitama is placed at a low-entry rank, and his feats
    remain unnoticed and unappreciated by the public.</p>)
    const comic6 = new comics('#6 One piece', 'Adventure', 'Ongoing', 'Eiichiro Oda', "images (39).jpeg",<p>The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and
    powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the
    titular treasure and proclaim himself the King of the Pirates. In an effort to organize his own
    crew, the Straw Hat Pirates, Luffy rescues and befriends a swordsman named Roronoa Zoro, and
    they head off in search of the One Piece. They are joined in their journey by Nami, a navigator
    and thief; Usopp, a sniper and a pathological liar; and Vinsmoke Sanji, a womanizing chef. They
    acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the
    East Blue. As Luffy and his crew set out on their adventures, others join the crew later in the
    series, as they sail the seas in pursuit of their dreams.</p>)
    const comic7 = new comics('#7 Tokyo Ghoul', 'Supernatural', 'Ongoing', 'Sui Ishida', "images (34).jpeg",<p>The story follows Ken Kaneki, a college student who barely survives a deadly encounter with
    Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in
    critical condition. After recovering, Kaneki discovers that he underwent a surgery that
    transadded him into a half-ghoul. This was accomplished because some of Rize's organs were
    transferred into his body, and now, like normal ghouls, he must consume human flesh to
    survive. The ghouls who manage the coffee shop "Anteiku" take him in and teach him to deal
    with his new life as a half-ghoul.</p>)
    const comic8 = new comics('#8 Death Note', 'Mystery', 'Completed', 'Tsugumi Ohba', "images (35).jpeg",<p>In Tokyo, an intelligent yet disaffected high-school student named Light Yagami finds the
    "Death Note", a mysterious black notebook which can kill anyone as long as the user knows
    both the target's name and face. After verifying that the notebook works and initially being
    terrified of its god-like abilities, Light begins to consider the possibilities of the Death
    Note's abilities and sets out to create a utopian world without crime, killing numerous
    high-profile Japanese criminals, before eventually targeting international criminals and
    felons around the world.</p>)
    const comic9 = new comics('#9 Attack on Titan', 'Action', 'Ongoing', 'Hajime Isayama', "images (36).jpeg",<p>Eren Yeager (Jaeger in the anime adaptation) lives with Mikasa Ackerman and best friend
    Armin Arlert in the town of Shiganshina adjacent to Wall Maria, outermost of three
    circular walls protecting humanity from man-eating Titans said to have killed all other
    humans one hundred years prior. When Shiganshina and Wall Maria are breached by the
    Colossal (Colossus in the search) and Armoured Titans, invading Titans force humanity to
    retreat behind Wall Rose. After a titan devours his mother and his father disappears, a
    vengeful Eren enlists in the military along with Mikasa and Armin.</p>)
    const comic10 = new comics('#10 Monster', 'Mystery', 'Completed', 'Naoki Urasawa', "images (37).jpeg",<p>Dr. Kenzo Tenma is a young Japanese brain surgeon, working at Eisler Memorial Hospital
    in Düsseldorf, West Germany. Tenma is dissatisfied with the political bias of the
    hospital in treating patients, and seizes the chance to change things after a massacre
    brings fraternal twins Johan and Anna Liebert into the hospital. Johan has a gunshot
    wound to his head, and Anna mutters about killing; Tenma operates on Johan instead of
    the mayor, who arrived later. Johan is saved, but Mayor Roedecker dies; Tenma loses his
    social standing. Director Heinemann and the other doctors in Tenma's way are
    mysteriously murdered, and both children disappear from the hospital. The police suspect
    Tenma, but they have no evidence and can only question him.</p>)

    const comicArray = []
    comicArray.push(comic1)
    comicArray.push(comic2)
     comicArray.push(comic3)
     comicArray.push(comic4)
     comicArray.push(comic5)
     comicArray.push(comic6)
     comicArray.push(comic7)
     comicArray.push(comic8)
     comicArray.push(comic9)
     comicArray.push(comic10)

   /*  const array=[1,2,3]
array.map((num)=>console.log(num))*/

    return (<div>
        {
            comicArray.map((comic) =>
                <Container>
                     <h2>{comic.comictitle}</h2>
                    <Row>

                        <Col >
                            <img src={require("./" + comic.imagePath)} />
                        </Col>
                        <Col>
                            <h5>Genre: {comic.comicgenre}</h5>
                            <h5>Status: {comic.comicstatus}</h5>
                            <h5>Author: {comic.comicauthor}</h5>
                            <p>{comic.summary}</p>
                            <br />
                        </Col>
                    </Row>
                  
                   
                </Container>)
        }
    </div >
    )
}
export default Top10;
