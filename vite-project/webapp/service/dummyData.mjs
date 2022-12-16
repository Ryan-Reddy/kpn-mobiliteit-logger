const initializeDummyData = () => {
  return {
    'TICT-V1PROG-20' : {
      name: 'Programming',
      ECTS: 5,
      year: 1,
      periode: 'A',
      completed: true,
      description: `
      <p><strong>Inhoud</strong></p>
      <p>Studenten krijgen inzicht in de basisconcepten en denkwijze van programmeren. De programmeertaal die hiervoor 
      wordt gebruikt is Python. Op een hands-on manier maakt de student kennis met de syntax van Python, zoals het
      gebruik van variabelen, condities, loops, input en output en algoritmes. Tegelijkertijd worden er vaardigheden 
      aangeleerd die ten grondslag liggen aan programmeren en denken en handelen als HBO-ICT’er, zoals 
      gestructureerd problemen oplossen en algoritmisch denken.</p>
      <br>
      <p><strong>Leerdoelen:</strong></p>
      <p>De student kan:</p>
      <ul>
        <li>veelvoorkomende datatypes (number, string, list) op correcte wijze kunnen gebruiken en daar 
        bewerkingen op kunnen toepassen met behulp van operators.</li>
        <li>de flow van een programma controleren door expressies correct te gebruiken in beslispunten (selection) 
        of loops (iteration).</li>
        <li>>een vooraf gegeven taak vertalen in een ontwerp (inclusief functionele decompositie) van een 
        programma (algoritme).</li>
        <li>een ontworpen programmastructuur vertalen in Python-code.</li>
        <li>basic input- en output-functies (I/O) toepassen in een script (tenminste screen en keyboard).</li>
        <li>een programma testen op correcte en logische werking.</li>
        <li>in een functionele decompositie de werking van een programma toelichten door het gebruik van 
        duidelijke en taalkundig juiste Python docstrings.</li>
      </ul>
      `,
    },
    'TICT-V1MOD-20' : {
      name: 'Modelling',
      ECTS: 5,
      year: 1,
      periode: 'A',
      completed: false,
      description: `
        <p>Een model is een schematische weergave van de werkelijkheid die meestal één of enkele aspecten van de 
        werkelijkheid benadrukt. ICT’ers gebruiken modellen om de werking van informatiesystemen, applicaties, netwerken 
        en apparaten te beschrijven. Bij modelleren gaat het om het maken van modellen.</p>

        <p>Net zoals een architect maquettes en tekeningen maakt om met de gebruikers van een gebouw en aannemers te 
        communiceren over een ontwerp, maakt een ICT’er modellen om te communiceren over zijn ontwerp. Behalve om te 
        communiceren, zijn modellen ook nuttig om grip te krijgen op het probleem van de gebruiker. Ze bieden structuur, 
        maken het vergelijken van verschillende opties eenvoudiger en leggen afspraken eenduidig vast.</p>

        <p>Er zijn verschillende soorten modellen maar voor ICT’ers zijn met name twee soorten belangrijk: structuur- en 
        gedragsmodellen. Structuurmodellen zijn statisch. Ze beschrijven de samenhang tussen onderdelen en geven inzicht 
        in de structuur van een systeem. Gedragsmodellen zijn dynamisch. Ze beschrijven gedrag en geven inzicht in hoe 
        iets werkt.</p>

        <p>Veel ICT-modellen worden weergegeven met een diagram. Ieder diagram heeft een eigen syntax (welke symbolen in 
        het diagram worden gebruikt) en een eigen semantiek (wat de betekenis van de symbolen is). Om goed te 
        modelleren is het belangrijk om de syntax en semantiek van een model goed te kennen en te kunnen toepassen.</p>
      `,
    },
    'TICT-V1PROJA-20' : {
      name: 'Project blok A',
      ECTS: 5,
      year: 1,
      periode: 'A',
      completed: true,
      description: `
        <p>Gedurende het project wordt een samengesteld systeem ontworpen en gerealiseerd in Python. Het project wordt 
        individueel uitgevoerd en ook als zodanig beoordeeld. De casus wordt vanuit de opleiding aangeleverd. De 
        geleverde projectresultaten volgen voor een groot deel uit de kennis en vaardigheden die in de cursussen Modelling 
        en Programming worden opgedaan. De student zal ook zelfstandig op zoek gaan naar informatie en benodigde 
        kennis en daar op vaardigheden ontwikkelen.</p>
      `,
    },
    'TICT-V1OICT-20' : {
      name: 'Oriëntatie op ICT',
      ECTS: 10,
      year: 1,
      periode: 'B',
      completed: true,
      description: `
        <p>In deze cursus maak je kennis met een breed palet aan onderwerpen van het ICT-vakgebied. Het doel is om je een 
        brede blik te geven op het vakgebied, zodat je alle aspecten van ICT (her)kent. Daarnaast kun je je oriënteren op de 
        verschillende specialismen binnen het vakgebied, zodat je een weloverwogen keuze kunt maken voor een 
        afstudeerrichting.</p>
        <p>Onderwerpen die aan bod komen in deze cursus zijn:</p>
        <ul>
          <li>de invloed van organisaties en de maatschappij op ICT en vice versa;</li>
          <li>ICT-infrastructuren en computernetwerken;</li>
          <li>algoritmes en data-analyse;</li>
          <li>de interactie tussen hardware en software.</li>
        </ul>
      `,
    },
    'TICT-V1PROJB-20' : {
      name: 'Project blok B',
      ECTS: 5,
      year: 1,
      periode: 'B',
      completed: true,
      description: `
        <p>De vaardigheden die in het vak ‘Oriëntatie op ICT’ zijn aangeleerd wordt in dit project direct toegepast in een 
        groepsproject. In dit project moet je een aangeleverde casus analyseren, ICT-oplossingen bedenken en een 
        technisch product realiseren. Daarnaast leer je samenwerken in de context van een ICT-project en werk je aan je 
        persoonlijke vaardigheden, zoals initiatief en verantwoordelijkheid nemen.</p>
      `,
    },
    'TCIF-V1OOP-19' : {
      name: 'OO Programming 1',
      ECTS: 5,
      year: 1,
      periode: 'C',
      completed: true,
      description: `
      <p><strong>Inhoud:</strong></p>
      <p>Het doel van deze cursus is enerzijds het leren realiseren van OO-domeinmodellen. Deze modellen moeten voldoen 
      aan de regels die binnen objectgeoriënteerde wereld bestaan (encapsulation, inheritance). Anderzijds en tegelijkertijd 
      zullen ook basale onderwerpen (o.a. Collecties, Strings, Exceptions & Statics) de revue passeren. Als 
      programmeertaal daarvoor wordt Java gebruikt, maar het doel is om concepten te leren die later ook in andere talen 
      toegepast kunnen worden. De applicaties blijven tijdens dit blok standalone (niet webgebaseerd).</p>
      <p>Verder zal er in de cursus aandacht zijn voor het testen van de gerealiseerde modellen, en wordt een eenvoudige 
      lagenstructuur (eerste aanzet tot MVC) geïntroduceerd. MVC zal toegepast worden met behulp van een Java GUI-techniek.</p>
      <p>Aangezien de meeste softwareprojecten in teams worden uitgevoerd, is het ook belangrijk dat studenten in staat zijn 
      om tooling, gericht op samenwerking, te kunnen hanteren. Hiervoor zal onder andere het versiebeheersysteem Git 
      worden gebruikt. Tijdens de cursus leert de student het project beheersen middels commits, branches, tags etc.</p>
      <br/>
      <p><strong>Leerdoelen:</strong></p>
      <p>De student kan: </p>
      <ul>
        <li>OO-principes (bijv. encapsulation, inheritance) begrijpen en toepassen in Java-code</li>
        <li>Exceptions, Strings, Statics & Interfaces correct toepassen in een Java-applicatie</li>
        <li>Test-driven ontwikkelproces (TDD) toepassen mbt Junit</li>
        <li>Programmacode structureren via een lagenmodel / MVC</li>
        <li>Een project beheersen middels methodieken en tools (bijv. Git)</li>
      </ul>
      `,
    },
    'TCIF-V1OOAD1-19' : {
      name: 'OO Analysis & Design 1',
      ECTS: 5,
      year: 1,
      periode: 'C',
      completed: false,
      description: `
        <p>De cursus Object Oriented Analysis & Design richt zich op:</p>
        <ul>
          <li>het analyseren en vastleggen van requirements van de gebruikers van informatiesysteem;</li>
          <li>het ontwerpen van de software volgens een object georiënteerde aanpak, waarbij je gedetaillerde bouwtekeningen leert maken;</li>
          <li>de samenhang tussen diagram en code, waardoor je leert dat concreet te ontwerpen;</li>
          <li>het ontwerpen en realiseren van user interfaces met JavaFX;</li>
          <li>het ontwerpen van tests.</li>
        </ul>
        <p>Na afloop van deze cursus kan de student: </p>
        <ul>
          <li>Requirements vertalen naar use cases, user stories en/of business rules</li>
          <li>Op basis van requirements een OO-ontwerp opstellen (o.a. klassendiagram en object-interactiediagram)</li>
          <li>OO-modellen (klassendiagram, sequencediagram) vertalen naar Java-code</li>
          <li>Op basis van requirements een UI-ontwerp opstellen en dit ontwerp realiseren met behulp van JavaFX</li>
          <li>Basisbegrippen en -technieken met betrekking tot testen uitleggen en toepassen</li>
        </ul>
      `,
    },
    'SD Group Project' : {
      name: 'TCIF-V1GP-19',
      ECTS: 5,
      year: 1,
      periode: 'C',
      completed: false,
      description: `
        <p>In het groepsproject ga je op een agile manier met scrum samenwerken om een stand alone applicatie te 
        ontwikkelen. Om dit SD product te maken ga je met name de kennis en vaardigheden van de cursussen OO Analysis 
        & Design en Object Oriented Programming van dit blok toepassen maar daarbij neem je natuurlijk alle ICT kennis 
        van semester 1 mee. De leerdoelen op het gebied van professional skills draaien om samenwerken en richten zich 
        op de skills doelgericht interacteren en toekomstgericht organiseren. In de landelijke HBO-i competentiematrix past 
        de projectopdracht in de architectuurlaag software en heeft daarin het taakniveau(1). Hieronder zijn de leerdoelen 
        nader beschreven:</p>
        <br>
        <p>Leerdoelen gericht op software development: </p>
        <ul>
          <li>De student is in staat om user stories op te stellen op basis van een gegeven complexe casus.</li>
          <li>De student kan in groepsverband een OO-Java applicatie & UI ontwerpen volgens het MVC model</li>
          <li>De student kan in groepsverband TDD toepassen op het project</li>
          <li>De student kan In groepsverband basis versiebeheer toepassen o.b.v. Git</li>
        </ul>
        <br>
        <p>Leerdoelen gericht op de professional skills:</p>
        <p>Doelgericht Interacteren:</p>
        <ul>
          <li>Samenwerken: de student laat zien aandacht te hebben voor de eigen rol in de context van de ICT opdracht, kan daarbij taken herkennen en oppakken, anderen aanspreken, verrijking zoeken en vertrouwen opbouwen in een interdisciplinaire en interculturele context</li>
          <li>Partner gerichtheid: de student laat zien aandacht te hebben voor de diverse groepen samenwerkingspartners zoals stakeholders, belangengroepen, eigen teamleden</li>
          <li>Communiceren: de student laat zien aandacht te hebben voor wat men wil communiceren met welke impact, de daarbij meest geschikte vorm en de daadwerkelijke uitvoering hiervan</li>
        </ul>
        <br/>
        <p>Toekomstgericht Organiseren:</p>
        <ul>
          <li>Werkzaamheden managen: de student inventariseert deeltaken, plant en bewaakt tijd, geld, kwaliteit en ethiek van de uitvoering van de werkzaamheden, herkent kansen en risico’s en zorgt voor een toekomstgerichte inbedding van de oplossing in de organisatie.</li>
          <li>Organisatorische context: de student identificeert kenmerken en rollen van de omgeving van de opdracht en kent de zakelijke legitimering.</li>
        </ul>
      `,
    },

    'TICT-SV1FEP1-20': {
      name: 'Front End Programming 1',
      ECTS: 5,
      year: 1,
      periode: 'D',
      completed: false,
      description:
        `<p>In deze cursus zullen we aandacht besteden aan de competenties gebruikersinteractie realiseren (niveau 1) en software realiseren (niveau 1). 
        Dit doen we door je de beginselen te leren van het programmeren met HTML, CSS en JavaScript (JS), 
        waarbij we de basis kennis van programmeren zoals die eerder al in andere cursussen aan bod is gekomen als voorkennis veronderstellen. 
        Dit vak is opgezet volgens het zogenaamde 'flipping the classroom' concept. 
        Dus buiten de les om wordt je geacht de les voor te bereiden door de theorie te bestuderen, en in de les gaan we met name aan de opdrachten werken. 
        De opdrachten zijn gebaserd op een Test Driven Design (TDD) methodiek, waardoor je zelfstandig aan opdrachten kunt werken. 
        Deze techniek geeft echter geen feedback op het kwaliteitsaspect van je code. 
        Hier besteden we aandacht aan door in de les in geregeld in groepjes een code review te houden. Aan het einde van de cursus... 
        </p>
        <ul>
          <li>kun je een simpele front-end met HTML, CSS en JavaScript realiseren</li>
          <li>kun je kwaliteitsaspecten van je code benoemen en toepassen.</li>
          <li>weet je hoe je Accessible Rich Internet Applications (ARIA) attributen in je HTML moet toepassen om je site toegankelijk te houden voor mensen met beperkingen.</li>
          <li>kun je een web front-end structureren en opmaken met HTML en CSS</li>
          <li>ben je in staat om een website met JavaScript dynamisch te maken (DOM manipulatie)</li>
          <li>weet je hoe jij je code volgens het MV* model zou moeten structureren</li>
          <li>ben je in staat om je Front-End met het REST interface van de Back-End te laten communiceren.</li>
        </ul>
        `,
    },
    'TCIF-V1BEP1-19': {
      name: 'Back End Programming 1',
      ECTS: 5,
      year: 1,
      periode: 'D',
      completed: false,
      description:
        `
        <p>Inhoud In deze cursus worden de volgende HBO-i beroepstaken aangetoond: </p>
        <ul>
          <li>Software realiseren niveau 1 en</li>
          <li>Software manage en control niveau 1 Leerdoelen</li>
          <li>De student kan en Java back-end service programmeren volgens OO-principes</li>
          <li>De student kan een Java back-end systematisch testen met unit tests</li>
          <li>De student kan een koppeling maken tussen back-end en front-end.</li>
          <li>De student kan een front-end en back-end deployen</li>
          <li>De student kan een secure back-end programmeren, die beschermt tegen security-issues zoals code-injection</li>
        </ul>`,
    },
    'TCIF-V1IPASS-19': {
      name: 'Individueel Project Assessment',
      ECTS: 5,
      year: 1,
      periode: 'D',
      completed: false,
      description:
        `<p>De student werkt individueel aan een beroepsproduct, passend binnen de afstudeerrichting. 
        Met het resultaat laat de student zien dat hij de opgedane kennis uit het 1e en met name 2e semester adequaat op de opdracht kan toepassen. 
        De student kan:</p>
        <ul>
          <li>een eigen keuze maken voor een onderwerp in een individueel ICT-project.</li>
          <li>een realistische planning voor het ICT project maken en bewaken volgens een binnen de ICT gebruikelijke techniek</li>
          <li>bestaande en door anderen ontwikkelde technieken inzetten binnen het eigen ICT-project, rekening houdend met rechten en licenties op deze technieken.</li>
          <li>onderbouwen waarom de gekozen technieken en aanpak geschikt zijn voor het eigen project.</li>
          <li>het resultaat van het eigen ICT-project presenteren aan een bij het project passende doelgroep.</li>
          <li>reflecteren op de ontwikkeling in het afgelopen semester en op de persoonlijke ontwikkeling komend semester.</li>
        </ul>`,
    },
  };
}

export default initializeDummyData;