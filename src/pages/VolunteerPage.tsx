import '@/styling/pages/VolunteerPage.css'

function VolunteerPage() {
  return (
    <>
    <section className="intro-block">
      <h2>Vrijwilliger worden?</h2>
      <p>
        Heb jij een paar uurtjes per week of maand over en wil je graag een
        steentje bijdragen aan een leuke, sociale en duurzame initiatief? Dan
        zijn wij op zoek naar jou! Bij onze speelotheek zijn we dringend op zoek
        naar <b>vrijwilligers</b> die ons team willen versterken. Ook voor je
        maatschappelijke stage! Jij kunt ons helpen met:
      </p>
      <ul className="volunteer-list">
        <li>
          Werken aan de balie – Ontvang bezoekers, geef advies en verwerk
          uitleningen.
        </li>
        <li>Repareren van speelgoed – Maak kapot speelgoed weer als nieuw!</li>
        <li>
          Uitleenbaar maken van speelgoed – Controleer en maak het speelgoed
          schoon voor de volgende lener.
        </li>
      </ul>
      <h4>Wat bieden wij?</h4>
      <ul className="volunteer-list">
        <li>Een gezellige werkomgeving met leuke collega’s.</li>
        <li>
          Een betekenisvolle bijdrage aan een duurzaam en sociaal project.
        </li>
        <li>
          Vrijwillgers krijgen hun abonnement gratis en mogen speelgoed lenen
          tot een bedrag van 5 euro per keer dat ze dienst hebben.
        </li>
      </ul>
      <h4>Interesse?</h4>
      <p>Laat het ons weten! Stuur een berichtje naar ons emailadres of kom langs tijdens onze openingstijden. We kijken uit naar je reactie!</p>
      <img src="../../assets/vrijwilligers_aanmeld_form.jpg" role="img" aria-label="plaatje van posters voor vrijwillegers" alt="vrijwilligers poster"></img>
      </section>
    </>
  );
}

export default VolunteerPage;
