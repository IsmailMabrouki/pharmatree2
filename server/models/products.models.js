const products = [
  [
    {
      "id": 1,
      "name": "Paracetamol",
      "description": "Paracetamol is a pain reliever and fever reducer.",
      "image": "https://www.example.com/paracetamol.jpg",
      "dosage": "1-2 tablets every 4-6 hours as needed.",
      "sideEffects": ["Drowsiness, nausea, vomiting, stomach pain."],
      "interactions": ["May interact with other medications, such as warfarin and blood thinners."]
    },
    {
      "id": 2,
      "name": "Ibuprofen",
      "description": "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that is used to treat pain, inflammation, and fever.",
      "image": "https://www.example.com/ibuprofen.jpg",
      "dosage": "400-800 mg every 4-6 hours as needed.",
      "sideEffects": ["Upset stomach, nausea, vomiting, dizziness, heartburn."],
      "interactions": ["May interact with other medications, such as warfarin and blood thinners."]
    },
    {
      "id": 3,
      "name": "Aspirin",
      "description": "Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) that is used to treat pain, inflammation, and fever. It can also be used to prevent blood clots and to reduce the risk of heart attack and stroke.",
      "image": "https://www.example.com/aspirin.jpg",
      "dosage": "325-650 mg every 4-6 hours as needed.",
      "sideEffects": ["Upset stomach, nausea, vomiting, dizziness, heartburn."],
      "interactions": ["May interact with other medications, such as warfarin and blood thinners."]
    },
    {
      "id": 4,
      "name": "Naproxen",
      "description": "Naproxen is a nonsteroidal anti-inflammatory drug (NSAID) that is used to treat pain, inflammation, and fever. It can also be used to treat arthritis and gout.",
      "image": "https://www.example.com/naproxen.jpg",
      "dosage": "200-400 mg every 6-8 hours as needed.",
      "sideEffects": ["Upset stomach, nausea, vomiting, dizziness, heartburn."],
      "interactions": ["May interact with other medications, such as warfarin and blood thinners."]
    },
    {
      "id": 5,
      "name": "Diphenhydramine",
      "description": "Diphenhydramine is an antihistamine that is used to treat allergy symptoms, such as hay fever, hives, and insect bites. It can also be used to treat insomnia.",
      "image": "https://www.example.com/diphenhydramine.jpg",
      "dosage": "25-50 mg every 4-6 hours as needed.",
      "sideEffects": ["Drowsiness, dry mouth, blurred vision, dizziness."],
      "interactions": ["May interact with other medications, such as sedatives and antidepressants."]
    }
  ]
  
  ];
  
  exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
  }
  
  exports.findById = (id) => {
    return new Promise((resolve, reject) =>
      resolve(JSON.parse(JSON.stringify(products)).find(product =>
        product._id == id)
      )
    );
  }
  