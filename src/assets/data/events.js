export let events = [
   {
      id: 1,
      name: "Infant Musicality",
      series: "Bach, The Universe & Everything",
      time: "11.30",
      date: "12-12-21",
      location: "King's Place, London",
      imageSrc: "images/placeholder.png",
      imageAlt: "Event Poster",
      uniqueURL: "",
      featuredEvent: true,
      intro: {
         heading:
            "If this is your first Bach, the Universe & Everything (BAE), welcome!",
         content:
            "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
         quote: "A note from our Principal Keyboard, Steven Devine, about today's programme:",
         quoteCaption: null,
      },
      schedule: [
         {
            name: "Welcome",
            title: null,
            author: null,
            description: null,
            alternateDescription: null,
         },
         {
            name: "Cantata",
            title: "Ach wie fluchtig, ach wie nichtig BWV 26",
            author: "JS Bach",
            description: "",
            alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
         },
      ],
      orchestra: [{}],
      theme: {
         templateTheme: "Modern", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
         primaryColor: "#899EE2", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
         textColor: "#3C3C3C", // Accent Colour is used to style the call-to-action buttons.
      },
   },
   {
      id: 2,
      name: "Can You Hear The Shape of a Drum?",
      series: "Bach, The Universe & Everything",
      time: "11.30",
      date: "21-11-21",
      location: "King's Place, London",
      imageSrc: "images/placeholder.png",
      imageAlt: "Event Poster",
      uniqueURL: "", // This will be the URL that the QR code will redirect to
      featuredEvent: false,
      intro: {
         heading:
            "If this is your first Bach, the Universe & Everything (BAE), welcome!",
         content:
            "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
         quote: "A note from our Principal Keyboard, Steven Devine, about today's programme:",
         quoteCaption: null,
      },
      schedule: [
         {
            name: "Welcome",
            title: null,
            author: null,
            description: null,
            alternateDescription: null,
         },
         {
            name: "Prelude",
            title: "Ach wie fluchtig, ach wie nichtig",
            author: "Georg Bohm",
            description: null,
            alternateDescription: null,
         },
         {
            name: "Polyphony",
            title: "Haec Dies",
            author: "William Byrd",
            description: null,
            alternateDescription: null,
         },
         {
            name: "Reading",
            title: "Beat! Beat! Drums!",
            author: "Walt Whitman",
            description: null,
            alternateDescription: null,
         },
         {
            name: "Cantata",
            title: "Ach wie fluchtig, ach wie nichtig BWV 26",
            author: "JS Bach",
            description: "",
            alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
         },
         {
            name: "Science",
            title: "Can You Hear The Shape of a Drum?",
            author: "Professor John Chapman",
            description: null,
            alternateDescription: null,
         },
         {
            name: "Closing",
            title: null,
            author: null,
            description: null,
            alternateDescription: null,
         },
         {
            name: "Postlude",
            title: "Darmstadt Ouverture TWV55:g4 'Gasconnade'",
            author: "Telemann",
            description: null,
            alternateDescription: null,
         },
      ],
      eventMembers: [],
      theme: {
         templateTheme: "Modern", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
         primaryColor: "#F2774C", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
         textColor: "#3C3C3C", // Accent Colour is used to style the call-to-action buttons.
      },
   },
];

export default events;