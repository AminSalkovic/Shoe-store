import React from 'react'

const PostOffice = () => {
  return (
    <div style={{minHeight:'540px',display:'flex',
    flexDirection:'column',justifyContent:'center',marginLeft:'50px'}}>
        <h1>Dostava</h1>
        <h3>Cena dostave</h3>
        <p>Dostava za sve porudžbine vrednosti preko 6.000 rsd je besplatna! Za porudžbine vrednosti ispod 6.000 rsd, dostava se naplaćuje 300 rsd.</p>
         <h3>Rok dostave</h3>
         <p>Nakon uspešno kreirane porudžbine, na tvoju e-mail adresu će stići potvrda. Uobičajeno vreme za isporuku je 5 radnih dana, a maksimalno 7 radnih dana.</p>
         <h3>Preuzimanje pošiljaka</h3>
         <p>Kuriri pošiljke dostavljaju u periodu od 8-16 h. Neophodno je da u tom periodu, na adresi bude osoba koja može preuzeti pošiljku. Prilikom preuzimanja pošiljke, potrebno je da se vizuelno pregleda, kako bi se utvrdilo da li ima spoljna oštećenja. Ukoliko nešto primetiš i posumnjaš da je sam artikal možda oštećen, preporučujemo da odbiješ prijem pošiljke i odmah nas obavestiš. Kurir svaku pošiljku pokušava da uruči dva puta, različitim danima.
         Uobičajena praksa je da, ukoliko prva isporuka ne bude uspešna, kurir pozove na telefon koji je ostavljen kao kontakt prilikom kreiranja porudžbine i ugovori novi termin dostave. Ukoliko i drugi pokušaj bude neuspešan, pošiljka će nam biti vraćena.</p>
         <h3>Dostava se vrši na teritoriji Republike Srbije, isključivo radnim danima.</h3>
    </div>
  )
}

export default PostOffice