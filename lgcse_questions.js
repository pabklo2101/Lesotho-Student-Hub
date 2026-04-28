const QUESTION_BANK = {
  math: {
    easy: [
      { q: "What is 12 + 15?", opts: ["27","26","28","25"], ans: 0, exp: "12+15=27." },
      { q: "Simplify 3x + 5x - 2x", opts: ["6x","8x","4x","x"], ans: 0, exp: "Combine like terms." },
      { q: "What is 20% of 150?", opts: ["30","25","35","20"], ans: 0, exp: "10% of 150 is 15, so 20% is 30." },
      { q: "Solve x - 5 = 10", opts: ["15","10","5","20"], ans: 0, exp: "Add 5 to both sides." },
      { q: "√64 = ?", opts: ["8","6","4","10"], ans: 0, exp: "8×8=64." },
      { q: "Perimeter of a square with side 6 cm?", opts: ["24 cm","12 cm","36 cm","18 cm"], ans: 0, exp: "P=4×side." },
      { q: "If x+3=7, find x", opts: ["4","3","5","10"], ans: 0, exp: "x=7-3." },
      { q: "What is 15 × 4?", opts: ["60","45","65","55"], ans: 0, exp: "15×4=60." },
      { q: "What is the next prime after 7?", opts: ["11","9","13","17"], ans: 0, exp: "11 is the next prime." },
      { q: "50% of 80?", opts: ["40","30","50","20"], ans: 0, exp: "Half of 80 is 40." }
    ],
    medium: [
      { q: "Solve 2x + 6 = 14", opts: ["x=4","x=5","x=8","x=10"], ans: 0, exp: "2x=8 → x=4." },
      { q: "Factor x² - 9", opts: ["(x-3)(x+3)","(x-9)(x+1)","(x-3)²","x(x-9)"], ans: 0, exp: "Difference of squares." },
      { q: "Gradient of line y = 4x + 7", opts: ["4","7","11","1/4"], ans: 0, exp: "Coefficient of x." },
      { q: "If f(x)=3x-2, find f(3)", opts: ["7","9","11","5"], ans: 0, exp: "3(3)-2=7." },
      { q: "Simplify (2x³)²", opts: ["4x⁶","2x⁶","4x⁵","2x⁵"], ans: 0, exp: "Square each part." },
      { q: "Solve 3x + 2 > 11", opts: ["x > 3","x < 3","x > 9","x < 9"], ans: 0, exp: "3x>9 → x>3." },
      { q: "Circumference of circle radius 7 cm (π=22/7)", opts: ["44 cm","22 cm","14 cm","28 cm"], ans: 0, exp: "2πr=44." },
      { q: "Area of triangle base 8 cm height 5 cm?", opts: ["20 cm²","40 cm²","13 cm²","26 cm²"], ans: 0, exp: "1/2×b×h=20." }
    ],
    hard: [
      { q: "Derivative of x²", opts: ["2x","x","2","x²"], ans: 0, exp: "Power rule." },
      { q: "Probability of rolling sum 7 with two dice", opts: ["1/6","1/12","1/8","1/4"], ans: 0, exp: "6 out of 36." },
      { q: "If log₂(32)=x, x=?", opts: ["5","4","6","3"], ans: 0, exp: "2^5=32." },
      { q: "Solve 2(x+3)=14", opts: ["x=4","x=5","x=3","x=6"], ans: 0, exp: "x+3=7 → x=4." }
    ]
  },
  english: {
    easy: [
      { q: "Synonym of 'happy'?", opts: ["Sad","Joyful","Angry","Tired"], ans: 1, exp: "Joyful means happy." },
      { q: "Past tense of 'go'?", opts: ["goed","went","gone","going"], ans: 1, exp: "Went is past tense." },
      { q: "Which sentence is correct?", opts: ["He don't like rice.","He doesn't like rice.","He not like rice.","He no like rice."], ans: 1, exp: "Subject-verb agreement." }
    ],
    medium: [
      { q: "Identify adverb: She sang beautifully.", opts: ["She","sang","beautifully","the"], ans: 2, exp: "Adverb modifies verb." },
      { q: "Plural of 'child'?", opts: ["Childs","Childes","Children","Childrens"], ans: 2, exp: "Irregular plural." },
      { q: "Correct: Neither the teacher nor the students ___ present.", opts: ["was","were","is","are"], ans: 1, exp: "Plural subject near verb." }
    ],
    hard: [
      { q: "Literary device: 'The wind whispered'", opts: ["Simile","Metaphor","Personification","Alliteration"], ans: 2, exp: "Giving human quality." }
    ]
  },
  science: {
    easy: [
      { q: "Red planet?", opts: ["Venus","Mars","Jupiter","Saturn"], ans: 1, exp: "Mars appears red." },
      { q: "H2O is?", opts: ["Oxygen","Hydrogen","Water","Salt"], ans: 2, exp: "Water." },
      { q: "Gas plants absorb?", opts: ["Oxygen","Nitrogen","Carbon dioxide","Helium"], ans: 2, exp: "CO2 for photosynthesis." }
    ],
    medium: [
      { q: "Newton's first law?", opts: ["Gravity","Inertia","Acceleration","Reaction"], ans: 1, exp: "Law of inertia." },
      { q: "Chemical symbol for gold?", opts: ["Ag","Au","Pb","Fe"], ans: 1, exp: "Au from Latin." },
      { q: "Which organ pumps blood around the body?", opts: ["Brain","Liver","Heart","Lungs"], ans: 2, exp: "Heart." }
    ],
    hard: [
      { q: "Mitochondria is the powerhouse of the cell.", opts: ["True","False"], ans: 0, exp: "True." }
    ]
  },
  history: {
    easy: [
      { q: "Founder of Basotho nation?", opts: ["Moshoeshoe I","Letsie I","Lerotholi","Seeiso"], ans: 0, exp: "Moshoeshoe I." },
      { q: "Lesotho independence year?", opts: ["1966","1960","1970","1980"], ans: 0, exp: "1966." }
    ],
    medium: [
      { q: "Capital of Lesotho?", opts: ["Maseru","Mafeteng","Leribe","Qacha's Nek"], ans: 0, exp: "Maseru." },
      { q: "Colonizing power?", opts: ["France","Britain","Portugal","Germany"], ans: 1, exp: "British protectorate." }
    ],
    hard: [
      { q: "War between Basotho and Boers (1865-68)?", opts: ["Seqiti War","Mfecane","Basotho Gun War","Anglo-Boer War"], ans: 0, exp: "Seqiti War." }
    ]
  },
  geography: {
    easy: [
      { q: "Largest continent?", opts: ["Africa","Asia","Europe","America"], ans: 1, exp: "Asia." },
      { q: "Lesotho enclaved by?", opts: ["South Africa","Zimbabwe","Mozambique","Botswana"], ans: 0, exp: "Surrounded by SA." }
    ],
    medium: [
      { q: "Longest river?", opts: ["Nile","Amazon","Mississippi","Yangtze"], ans: 0, exp: "Nile." },
      { q: "Highest peak in Lesotho?", opts: ["Thabana Ntlenyana","Mount Everest","Kilimanjaro","Drakensberg"], ans: 0, exp: "Thabana Ntlenyana." }
    ]
  },
  sesotho: {
    easy: [
      { q: "Lentswe 'phahlo' le bolela eng?", opts: ["Motho","Ntho","Sebaka","Nako"], ans: 1, exp: "Ntho." },
      { q: "Kgatiso e nepahetseng: 'Ke ___ buka'", opts: ["ea","tsa","sa","la"], ans:0, exp:"'ea' e nepahetse."}
    ],
    medium: [
      { q: "Polelo e reng 'ho ja monate' e bolela?", opts: ["Ho ja dijo","Ho thaba","Ho tsamaya","Ho bina"], ans:1, exp:"Ho thaba."}
    ]
  },
  business: {
    easy: [
      { q: "Main goal of a business?", opts: ["Maximize profit","Help the poor","Create jobs","Pay taxes"], ans:0, exp:"Profit."},
      { q: "Current asset?", opts: ["Machinery","Cash","Land","Buildings"], ans:1, exp:"Cash."}
    ],
    medium: [
      { q: "Liability is?", opts: ["Something owed","Something owned","Profit","Revenue"], ans:0, exp:"Debt."}
    ]
  },
  tech: {
    easy: [
      { q: "CPU stands for?", opts: ["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processor"], ans:0, exp:"Central Processing Unit."},
      { q: "HTML is a ___ language.", opts: ["Programming","Markup","Scripting","Styling"], ans:1, exp:"Markup."}
    ],
    medium: [
      { q: "DNS stands for?", opts: ["Domain Name System","Digital Network Service","Data Name Server","Dynamic Network System"], ans:0, exp:"Domain Name System."}
    ]
  }
};
