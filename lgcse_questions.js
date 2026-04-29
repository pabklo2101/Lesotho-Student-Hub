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
      { q: "50% of 80?", opts: ["40","30","50","20"], ans: 0, exp: "Half of 80 is 40." },
      { q: "Write 3/4 as a decimal", opts: ["0.75","0.5","1.25","0.34"], ans: 0, exp: "3 divided by 4 equals 0.75." },
      { q: "What is 10 × 5?", opts: ["50","15","5","2"], ans: 0, exp: "10 multiplied by 5 is 50." },
      { q: "How many sides does a triangle have?", opts: ["3","4","5","6"], ans: 0, exp: "A triangle has 3 sides." },
      { q: "Area of a rectangle length 5 cm width 3 cm?", opts: ["15 cm²","8 cm²","10 cm²","20 cm²"], ans: 0, exp: "Area = l×w = 15." },
      { q: "What is 9²?", opts: ["81","18","72","99"], ans: 0, exp: "9×9 = 81." },
      { q: "2 + 2 × 2 = ?", opts: ["6","8","4","10"], ans: 0, exp: "Multiplication first: 2 + 4 = 6." },
      { q: "Solve for x: 2x = 10", opts: ["x=5","x=2","x=10","x=20"], ans: 0, exp: "Divide both sides by 2." },
      { q: "What is the value of π (pi) approximately?", opts: ["3.14","2.14","1.62","3.00"], ans: 0, exp: "π ≈ 3.14." },
      { q: "How many millimetres in a centimetre?", opts: ["10","100","1000","1"], ans: 0, exp: "1 cm = 10 mm." },
      { q: "What is the perimeter of a rectangle 4 cm by 6 cm?", opts: ["20 cm","24 cm","10 cm","12 cm"], ans: 0, exp: "2(l+w) = 2(4+6) = 20." },
      { q: "Simplify: 5y - 2y + y", opts: ["4y","3y","5y","6y"], ans: 0, exp: "Combine coefficients: 5-2+1 = 4y." },
      { q: "What is 1/4 of 100?", opts: ["25","20","30","50"], ans: 0, exp: "100/4 = 25." },
      { q: "Round 36 to the nearest ten.", opts: ["40","30","35","36"], ans: 0, exp: "36 is closer to 40 than 30." },
      { q: "What is the square root of 144?", opts: ["12","14","16","10"], ans: 0, exp: "12×12=144." },
      { q: "Convert 0.5 to a fraction.", opts: ["1/2","1/4","3/4","1/5"], ans: 0, exp: "0.5 = 1/2." },
      { q: "If a = 2, b = 3, what is a + b?", opts: ["5","6","1","23"], ans: 0, exp: "2+3=5." },
      { q: "What is 100 divided by 4?", opts: ["25","20","30","40"], ans: 0, exp: "100/4 = 25." },
      { q: "How many minutes in an hour?", opts: ["60","30","90","120"], ans: 0, exp: "1 hour = 60 minutes." }
    ],
    medium: [
      { q: "Solve 2x + 6 = 14", opts: ["x=4","x=5","x=8","x=10"], ans: 0, exp: "2x=8 → x=4." },
      { q: "Factor x² - 9", opts: ["(x-3)(x+3)","(x-9)(x+1)","(x-3)²","x(x-9)"], ans: 0, exp: "Difference of squares." },
      { q: "Gradient of line y = 4x + 7", opts: ["4","7","11","1/4"], ans: 0, exp: "Coefficient of x." },
      { q: "If f(x)=3x-2, find f(3)", opts: ["7","9","11","5"], ans: 0, exp: "3(3)-2=7." },
      { q: "Simplify (2x³)²", opts: ["4x⁶","2x⁶","4x⁵","2x⁵"], ans: 0, exp: "Square each part." },
      { q: "Solve 3x + 2 > 11", opts: ["x > 3","x < 3","x > 9","x < 9"], ans: 0, exp: "3x>9 → x>3." },
      { q: "Circumference of circle radius 7 cm (π=22/7)", opts: ["44 cm","22 cm","14 cm","28 cm"], ans: 0, exp: "2πr=44." },
      { q: "Area of triangle base 8 cm height 5 cm?", opts: ["20 cm²","40 cm²","13 cm²","26 cm²"], ans: 0, exp: "1/2×b×h=20." },
      { q: "Solve 5x - 3 = 2x + 9", opts: ["x=4","x=3","x=5","x=6"], ans: 0, exp: "3x=12 → x=4." },
      { q: "Expand (x+2)(x-3)", opts: ["x²-x-6","x²-x+6","x²+x-6","x²-5x-6"], ans: 0, exp: "FOIL: x² -3x +2x -6 = x² -x -6." },
      { q: "Mean of 4, 8, 12, 16", opts: ["10","8","12","14"], ans: 0, exp: "(4+8+12+16)/4 = 10." },
      { q: "Probability of rolling a 3 on a fair 6-sided die?", opts: ["1/6","1/3","1/2","1/4"], ans: 0, exp: "One favourable outcome out of 6." },
      { q: "If 3x = 18, x = ?", opts: ["6","3","9","12"], ans: 0, exp: "Divide both sides by 3." },
      { q: "Simplify 2(3x - 4) + 3(x + 2)", opts: ["9x - 2","9x + 2","9x - 10","6x - 1"], ans: 0, exp: "6x -8 +3x +6 = 9x -2." },
      { q: "Area of a circle with radius 7 cm (π≈3.14)?", opts: ["153.86 cm²","150 cm²","140 cm²","160 cm²"], ans: 0, exp: "πr² = 3.14×49 = 153.86." },
      { q: "Solve the inequality: 4x - 1 ≤ 7", opts: ["x ≤ 2","x ≤ 3","x ≥ 2","x ≥ 3"], ans: 0, exp: "4x ≤ 8 → x ≤ 2." },
      { q: "Factor 6x² - 9x", opts: ["3x(2x - 3)","3(2x² - 3x)","3x(2x + 3)","x(6x - 9)"], ans: 0, exp: "GCF is 3x." },
      { q: "What is the volume of a cube with side 3 cm?", opts: ["27 cm³","9 cm³","18 cm³","36 cm³"], ans: 0, exp: "V = side³ = 27." }
    ],
    hard: [
      { q: "Derivative of x²", opts: ["2x","x","2","x²"], ans: 0, exp: "Power rule." },
      { q: "Probability of rolling sum 7 with two dice", opts: ["1/6","1/12","1/8","1/4"], ans: 0, exp: "6 out of 36." },
      { q: "If log₂(32)=x, x=?", opts: ["5","4","6","3"], ans: 0, exp: "2^5=32." },
      { q: "Solve 2(x+3)=14", opts: ["x=4","x=5","x=3","x=6"], ans: 0, exp: "x+3=7 → x=4." },
      { q: "Sum of interior angles of a hexagon?", opts: ["720°","360°","540°","180°"], ans: 0, exp: "(n-2)×180 = 720." },
      { q: "Solve the inequality: -2x ≤ 8", opts: ["x ≥ -4","x ≤ -4","x ≥ 4","x ≤ 4"], ans: 0, exp: "Divide by -2, flip sign." },
      { q: "Simplify: (2x⁴)³", opts: ["8x¹²","6x⁷","8x⁷","6x¹²"], ans: 0, exp: "2³=8, (x⁴)³ = x¹²." },
      { q: "What is the quadratic formula?", opts: ["x = (-b ± √(b²-4ac))/2a","x = (-b ± √(b²+4ac))/2a","x = (b ± √(b²-4ac))/2a","x = (-b ± √(b²-4ac))/a"], ans: 0, exp: "Standard formula." },
      { q: "If sinθ = 3/5, what is cosθ? (θ acute)", opts: ["4/5","3/4","5/3","2/5"], ans: 0, exp: "Pythagorean identity." },
      { q: "Integrate 3x²", opts: ["x³ + C","3x³ + C","x² + C","6x + C"], ans: 0, exp: "Power rule: x³ + C." }
    ]
  },
  english: {
    easy: [
      { q: "Synonym of 'happy'?", opts: ["Sad","Joyful","Angry","Tired"], ans: 1, exp: "Joyful means happy." },
      { q: "Past tense of 'go'?", opts: ["goed","went","gone","going"], ans: 1, exp: "Went is past tense." },
      { q: "Which sentence is correct?", opts: ["He don't like rice.","He doesn't like rice.","He not like rice.","He no like rice."], ans: 1, exp: "Subject-verb agreement." },
      { q: "Opposite of 'big'?", opts: ["Large","Small","Tall","Huge"], ans: 1, exp: "Small is antonym." },
      { q: "Choose the correctly spelled word:", opts: ["Recieve","Receive","Recive","Receeve"], ans: 1, exp: "I before E except after C." },
      { q: "Which word is a synonym of 'enormous'?", opts: ["Tiny","Huge","Quick","Slow"], ans: 1, exp: "Enormous means very large." },
      { q: "Plural of 'cat'?", opts: ["cats","caties","cat","cates"], ans: 0, exp: "Add 's'." },
      { q: "Identify the noun: The dog barked.", opts: ["dog","barked","the","."], ans: 0, exp: "Dog is a noun." },
      { q: "What is the opposite of 'hot'?", opts: ["Cold","Warm","Cool","Freezing"], ans: 0, exp: "Antonym is cold." }
    ],
    medium: [
      { q: "Identify adverb: She sang beautifully.", opts: ["She","sang","beautifully","the"], ans: 2, exp: "Adverb modifies verb." },
      { q: "Plural of 'child'?", opts: ["Childs","Childes","Children","Childrens"], ans: 2, exp: "Irregular plural." },
      { q: "Correct: Neither the teacher nor the students ___ present.", opts: ["was","were","is","are"], ans: 1, exp: "Plural subject near verb." },
      { q: "The phrase 'a piece of cake' means:", opts: ["A dessert","Something very easy","A puzzle","A difficult task"], ans: 1, exp: "Idiom for easy." },
      { q: "Which sentence is in passive voice?", opts: ["The cat chased the mouse.","The mouse was chased by the cat.","The cat is chasing the mouse.","The cat chases mice."], ans: 1, exp: "Object becomes subject." },
      { q: "What is the past participle of 'write'?", opts: ["wrote","written","writing","writes"], ans: 1, exp: "Written (e.g., has written)." },
      { q: "Correct the sentence: 'He go to school everyday.'", opts: ["He goes to school everyday.","He go to school everyday.","He going to school everyday.","He gone to school everyday."], ans: 0, exp: "Subject-verb agreement." }
    ],
    hard: [
      { q: "Literary device: 'The wind whispered'", opts: ["Simile","Metaphor","Personification","Alliteration"], ans: 2, exp: "Giving human quality." },
      { q: "Change to reported speech: She said, 'I am tired.'", opts: ["She said that she is tired.","She said that she was tired.","She said I am tired.","She said that I was tired."], ans: 1, exp: "Tense shifts back." },
      { q: "Which word is a conjunction?", opts: ["quickly","and","run","blue"], ans: 1, exp: "And joins words." },
      { q: "Identify the error: Each of the students have a book.", opts: ["Each","students","have","book"], ans: 2, exp: "Should be 'has' (each is singular)." }
    ]
  },
  science: {
    easy: [
      { q: "Red planet?", opts: ["Venus","Mars","Jupiter","Saturn"], ans: 1, exp: "Mars appears red." },
      { q: "H2O is?", opts: ["Oxygen","Hydrogen","Water","Salt"], ans: 2, exp: "Water." },
      { q: "Gas plants absorb?", opts: ["Oxygen","Nitrogen","Carbon dioxide","Helium"], ans: 2, exp: "CO2 for photosynthesis." },
      { q: "Which vitamin is produced when skin is exposed to sunlight?", opts: ["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], ans: 3, exp: "Vitamin D." },
      { q: "What is the pH of pure water?", opts: ["7","0","14","1"], ans: 0, exp: "Neutral pH." },
      { q: "Which organ pumps blood around the body?", opts: ["Brain","Liver","Heart","Lungs"], ans: 2, exp: "Heart." },
      { q: "What is the chemical symbol for oxygen?", opts: ["O","Ox","O2","O3"], ans: 0, exp: "O." }
    ],
    medium: [
      { q: "Newton's first law?", opts: ["Gravity","Inertia","Acceleration","Reaction"], ans: 1, exp: "Law of inertia." },
      { q: "Chemical symbol for gold?", opts: ["Ag","Au","Pb","Fe"], ans: 1, exp: "Au from Latin." },
      { q: "What is the powerhouse of the cell?", opts: ["Nucleus","Mitochondria","Ribosome","Cell membrane"], ans: 1, exp: "Produces ATP." },
      { q: "Which gas makes up most of Earth's atmosphere?", opts: ["Oxygen","Nitrogen","Carbon dioxide","Argon"], ans: 1, exp: "About 78% nitrogen." },
      { q: "What is the boiling point of water in Celsius?", opts: ["100°C","0°C","50°C","212°C"], ans: 0, exp: "Water boils at 100°C." }
    ],
    hard: [
      { q: "Mitochondria is the powerhouse of the cell.", opts: ["True","False"], ans: 0, exp: "True." },
      { q: "Type of bond in NaCl?", opts: ["Covalent","Ionic","Metallic","Hydrogen"], ans: 1, exp: "Ionic bond." },
      { q: "What is DNA short for?", opts: ["Deoxyribonucleic acid","Ribonucleic acid","Deoxyribose nuclear acid","Double nitrogen acid"], ans: 0, exp: "Deoxyribonucleic acid." },
      { q: "Which subatomic particle has a positive charge?", opts: ["Electron","Neutron","Proton","Nucleus"], ans: 2, exp: "Proton." }
    ]
  },
  history: {
    easy: [
      { q: "Founder of Basotho nation?", opts: ["Moshoeshoe I","Letsie I","Lerotholi","Seeiso"], ans: 0, exp: "Moshoeshoe I." },
      { q: "Lesotho independence year?", opts: ["1966","1960","1970","1980"], ans: 0, exp: "1966." },
      { q: "Capital of Lesotho?", opts: ["Maseru","Mafeteng","Leribe","Qacha's Nek"], ans: 0, exp: "Maseru." },
      { q: "Which continent is Lesotho in?", opts: ["Africa","Asia","Europe","South America"], ans: 0, exp: "Africa." }
    ],
    medium: [
      { q: "Colonizing power?", opts: ["France","Britain","Portugal","Germany"], ans: 1, exp: "British protectorate." },
      { q: "What traditional title is given to the king of Lesotho?", opts: ["King","Paramount Chief","Morena","Motlotlehi"], ans: 3, exp: "Motlotlehi." },
      { q: "Which war involved the Basotho and Boers (1865-68)?", opts: ["Seqiti War","Mfecane","Basotho Gun War","Anglo-Boer War"], ans: 0, exp: "Seqiti War." }
    ],
    hard: [
      { q: "Who was the first Prime Minister of Lesotho?", opts: ["Leabua Jonathan","Ntsu Mokhehle","Pakalitha Mosisili","Tom Thabane"], ans: 0, exp: "Leabua Jonathan." },
      { q: "What is the name of the mountain kingdom?", opts: ["Lesotho","Swaziland","Botswana","Zimbabwe"], ans: 0, exp: "Lesotho is known as the Kingdom in the Sky." }
    ]
  },
  geography: {
    easy: [
      { q: "Largest continent?", opts: ["Africa","Asia","Europe","America"], ans: 1, exp: "Asia." },
      { q: "Lesotho enclaved by?", opts: ["South Africa","Zimbabwe","Mozambique","Botswana"], ans: 0, exp: "Surrounded by SA." },
      { q: "Longest river?", opts: ["Nile","Amazon","Mississippi","Yangtze"], ans: 0, exp: "Nile." },
      { q: "How many oceans are there?", opts: ["5","4","6","3"], ans: 0, exp: "Pacific, Atlantic, Indian, Southern, Arctic." }
    ],
    medium: [
      { q: "Highest peak in Lesotho?", opts: ["Thabana Ntlenyana","Mount Everest","Kilimanjaro","Drakensberg"], ans: 0, exp: "Thabana Ntlenyana." },
      { q: "Which river forms Lesotho's northern border?", opts: ["Caledon","Orange","Vaal","Tugela"], ans: 0, exp: "Caledon River." },
      { q: "Capital of South Africa?", opts: ["Pretoria","Cape Town","Johannesburg","Durban"], ans: 0, exp: "Pretoria (administrative)." }
    ]
  },
  sesotho: {
    easy: [
      { q: "Lentswe 'phahlo' le bolela eng?", opts: ["Motho","Ntho","Sebaka","Nako"], ans: 1, exp: "Ntho." },
      { q: "Kgatiso e nepahetseng: 'Ke ___ buka'", opts: ["ea","tsa","sa","la"], ans:0, exp:"'ea' e nepahetse."},
      { q: "'Ntate' ke mang?", opts: ["Mme","Rangwane","Papa","Malome"], ans: 2, exp: "Ntate ke papa." }
    ],
    medium: [
      { q: "Polelo e reng 'ho ja monate' e bolela?", opts: ["Ho ja dijo","Ho thaba","Ho tsamaya","Ho bina"], ans:1, exp:"Ho thaba."},
      { q: "Buka e ngotsweng ka puo ya Sesotho ke?", opts: ["English novel","Sesotho novel","French book","Latin text"], ans:1, exp:"Novel ya Sesotho."}
    ]
  },
  business: {
    easy: [
      { q: "Main goal of a business?", opts: ["Maximize profit","Help the poor","Create jobs","Pay taxes"], ans:0, exp:"Profit."},
      { q: "Current asset?", opts: ["Machinery","Cash","Land","Buildings"], ans:1, exp:"Cash."},
      { q: "What is a liability?", opts: ["Something owed","Something owned","Profit","Revenue"], ans:0, exp:"Debt."}
    ],
    medium: [
      { q: "Balance sheet shows?", opts: ["Assets, liabilities & equity","Income & expenses","Cash flow","Profit & loss"], ans:0, exp:"Snapshot of financial position."},
      { q: "Depreciation is?", opts: ["Increase in asset value","Decrease in asset value over time","Revenue","Tax"], ans:1, exp:"Wear and tear."}
    ]
  },
  tech: {
    easy: [
      { q: "CPU stands for?", opts: ["Central Processing Unit","Computer Personal Unit","Central Program Utility","Core Processor"], ans:0, exp:"Central Processing Unit."},
      { q: "HTML is a ___ language.", opts: ["Programming","Markup","Scripting","Styling"], ans:1, exp:"Markup."},
      { q: "What does 'www' stand for?", opts: ["World Wide Web","Wide World Web","Web World Wide","Wide Web World"], ans:0, exp:"World Wide Web."}
    ],
    medium: [
      { q: "DNS stands for?", opts: ["Domain Name System","Digital Network Service","Data Name Server","Dynamic Network System"], ans:0, exp:"Domain Name System."},
      { q: "Which language controls webpage style?", opts: ["HTML","CSS","JavaScript","Python"], ans:1, exp:"Cascading Style Sheets."}
    ]
  },
  agriculture: {
    easy: [
      { q: "Which animal gives us wool?", opts: ["Cow","Sheep","Goat","Chicken"], ans:1, exp:"Sheep."},
      { q: "What is crop rotation?", opts: ["Growing same crop yearly","Alternating crops to preserve soil","Harvesting","Planting trees"], ans:1, exp:"Soil preservation."}
    ],
    medium: [
      { q: "Which nutrient is most needed for leaf growth?", opts: ["Nitrogen","Phosphorus","Potassium","Calcium"], ans:0, exp:"Nitrogen for leafy growth."}
    ]
  },
  devstudies: {
    easy: [
      { q: "What does GDP stand for?", opts: ["Gross Domestic Product","General Development Plan","Government Development Program","None"], ans:0, exp:"Measures economic output."},
      { q: "What is the main goal of development?", opts: ["Improve quality of life","Increase population","Decrease trade","Build more roads"], ans:0, exp:"Human well-being."}
    ]
  },
  re: {
    easy: [
      { q: "Which religion believes in the Quran?", opts: ["Christianity","Islam","Hinduism","Buddhism"], ans:1, exp:"Islam's holy book."},
      { q: "Who is the founder of Christianity?", opts: ["Moses","Jesus Christ","Muhammad","Buddha"], ans:1, exp:"Jesus Christ."}
    ]
  }
};
