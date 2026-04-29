// ============================================================
// LGCSE STUDY GUIDES – COMPLETE DETAILED NOTES
// ============================================================
const STUDY_GUIDES = {
  math: {
    title: "📐 Mathematics Study Notes",
    sections: [
      {
        heading: "1. Algebra",
        content: [
          "Simplify expressions by collecting like terms.",
          "Example: 3x + 5x – 2x = 6x.",
          "Expand brackets using the distributive law: a(b + c) = ab + ac.",
          "Example: 3(2x + 4) = 6x + 12.",
          "Expand two brackets: (x + a)(x + b) = x² + (a+b)x + ab.",
          "Example: (x + 2)(x – 3) = x² – x – 6.",
          "Factorise by taking out the highest common factor (HCF).",
          "Example: 6x² – 9x = 3x(2x – 3).",
          "Factorise quadratic expressions: x² + bx + c = (x + p)(x + q) where p+q = b and pq = c.",
          "Example: x² + 5x + 6 = (x + 2)(x + 3).",
          "Factorise difference of two squares: a² – b² = (a – b)(a + b).",
          "Example: x² – 9 = (x – 3)(x + 3).",
          "Solve linear equations by isolating the variable.",
          "Example: 2x + 6 = 14 → 2x = 8 → x = 4.",
          "Solve equations with unknowns on both sides.",
          "Example: 5x – 3 = 2x + 9 → 3x = 12 → x = 4.",
          "Solve quadratic equations by factorising.",
          "Example: x² – x – 6 = 0 → (x – 3)(x + 2) = 0 → x = 3 or x = –2.",
          "Solve quadratic equations using the quadratic formula.",
          "Quadratic formula: x = [–b ± √(b² – 4ac)] / 2a.",
          "Example: Solve x² – 5x + 6 = 0.",
          "Here a=1, b=–5, c=6.",
          "x = [5 ± √(25 – 24)] / 2 = [5 ± √1] / 2 = (5 ± 1) / 2.",
          "x = 3 or x = 2.",
          "Change the subject of a formula.",
          "Example: Make x the subject of y = 2x + 3.",
          "y – 3 = 2x → x = (y – 3)/2.",
          "Solve simultaneous linear equations.",
          "Method 1: Elimination – add or subtract equations to eliminate one variable.",
          "Example: 2x + y = 7 and x – y = 2.",
          "Add: 3x = 9 → x = 3, substitute: 3 – y = 2 → y = 1.",
          "Method 2: Substitution – solve one equation for a variable and substitute into the other.",
          "Solve linear inequalities and represent on a number line.",
          "Example: 3x + 2 > 11 → 3x > 9 → x > 3.",
          "Open circle at 3, shaded to the right.",
          "Remember: multiplying or dividing by a negative flips the inequality sign.",
          "Example: –2x ≤ 8 → x ≥ –4.",
          "Understand and use index laws.",
          "aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ.",
          "a⁰ = 1 (a ≠ 0), a⁻ⁿ = 1/aⁿ.",
          "Example: (2x³)² = 4x⁶.",
          "Understand sequences: arithmetic, geometric, and Fibonacci.",
          "nth term of an arithmetic sequence: a + (n–1)d.",
          "Example: 2, 5, 8, 11, … nth term = 2 + (n–1)3 = 3n – 1.",
          "Find the sum of an arithmetic series.",
          "Understand functions and function notation.",
          "f(x) = 2x + 3, find f(4) = 2(4) + 3 = 11.",
          "Inverse functions: if f(x) = 2x + 3, write y = 2x + 3, swap x and y: x = 2y + 3 → y = (x – 3)/2.",
          "Composite functions: fg(x) = f(g(x)).",
          "Graphs of linear, quadratic, cubic, and reciprocal functions.",
          "Gradient of a straight line = (y₂ – y₁)/(x₂ – x₁).",
          "Equation of a straight line: y = mx + c.",
          "Parallel lines have equal gradients; perpendicular lines: m₁ × m₂ = –1."
        ]
      },
      {
        heading: "2. Geometry and Mensuration",
        content: [
          "Angles on a straight line add to 180°.",
          "Angles at a point add to 360°.",
          "Vertically opposite angles are equal.",
          "Corresponding angles on parallel lines are equal.",
          "Alternate angles on parallel lines are equal.",
          "Co‑interior (allied) angles on parallel lines sum to 180°.",
          "Sum of interior angles of a triangle = 180°.",
          "Exterior angle of a triangle = sum of the two opposite interior angles.",
          "Sum of interior angles of an n‑sided polygon = (n – 2) × 180°.",
          "Example: Hexagon (n=6) → (6–2)×180 = 720°.",
          "Pythagoras' theorem: a² + b² = c² (for right‑angled triangles).",
          "Example: Find the hypotenuse for legs 3 and 4.",
          "c² = 3² + 4² = 9 + 16 = 25 → c = 5.",
          "Trigonometry ratios:",
          "sin θ = opposite / hypotenuse",
          "cos θ = adjacent / hypotenuse",
          "tan θ = opposite / adjacent",
          "SOH CAH TOA – a way to remember the ratios.",
          "Use trigonometry to find missing sides and angles.",
          "Example: In a right triangle, opposite = 3, hypotenuse = 6.",
          "sin θ = 3/6 = 0.5 → θ = 30°.",
          "Area of basic shapes:",
          "Rectangle: A = length × width",
          "Triangle: A = ½ × base × height",
          "Parallelogram: A = base × perpendicular height",
          "Trapezium: A = ½(a + b)h",
          "Circle: A = πr², Circumference = 2πr (or πd)",
          "Sector area = (θ/360) × πr², Arc length = (θ/360) × 2πr",
          "Volume of prisms: V = area of cross‑section × length",
          "Volume of a cylinder: V = πr²h",
          "Volume of a pyramid: V = ⅓ × base area × height",
          "Volume of a cone: V = ⅓πr²h",
          "Volume of a sphere: V = ⁴⁄₃πr³",
          "Surface area:",
          "Cylinder: SA = 2πrh + 2πr²",
          "Cone (including base): SA = πrl + πr² (l = slant height)",
          "Sphere: SA = 4πr²",
          "Similarity: corresponding lengths, areas, volumes scale by linear factor k, k², k³.",
          "Congruence: SSS, SAS, ASA, AAS, RHS conditions.",
          "Transformations: translation, reflection, rotation, enlargement.",
          "Vectors: addition, subtraction, scalar multiplication, magnitude."
        ]
      },
      {
        heading: "3. Number and Arithmetic",
        content: [
          "Types of numbers: natural, whole, integers, rational, irrational, real.",
          "Prime numbers: numbers > 1 with exactly two factors.",
          "Prime factorisation: express a number as a product of primes.",
          "Example: 60 = 2² × 3 × 5.",
          "Highest Common Factor (HCF) and Lowest Common Multiple (LCM).",
          "Fractions: addition, subtraction, multiplication, division.",
          "Example: 2/3 + 1/4 = (8+3)/12 = 11/12.",
          "Decimals: convert fractions to decimals by division.",
          "Percentages: convert to/from fractions and decimals.",
          "Percentage increase and decrease: new = original × (1 ± %/100).",
          "Example: Increase 200 by 15% → 200 × 1.15 = 230.",
          "Reverse percentages: find original amount before increase/decrease.",
          "Ratio: compare quantities; simplify ratios.",
          "Example: Share M500 in ratio 2:3 → 2 parts = M200, 3 parts = M300.",
          "Proportion: direct (y = kx) and inverse (y = k/x).",
          "Standard form: a × 10ⁿ where 1 ≤ a < 10.",
          "Example: 0.00038 = 3.8 × 10⁻⁴.",
          "Rounding to decimal places (d.p.) and significant figures (s.f.).",
          "Estimating: round numbers to 1 s.f. to approximate calculations.",
          "Example: 198 ÷ 4.95 ≈ 200 ÷ 5 = 40.",
          "Upper and lower bounds: finding maximum and minimum possible values.",
          "Compound interest: A = P(1 + r/100)ⁿ.",
          "Simple interest: I = PRT / 100.",
          "Powers and roots: square, cube, higher powers; square root, cube root.",
          "Surds: irrational roots; simplify √48 = √(16×3) = 4√3.",
          "Set notation: union (∪), intersection (∩), complement (A′).",
          "Venn diagrams: represent sets and calculate probabilities.",
          "Number sequences: square numbers, cube numbers, triangular numbers.",
          "Recurring decimals: convert recurring decimals to fractions.",
          "Example: 0.333... = 1/3."
        ]
      },
      {
        heading: "4. Statistics and Probability",
        content: [
          "Mean = sum of values / number of values.",
          "Example: Mean of 4, 8, 12, 16 = (4+8+12+16)/4 = 10.",
          "Median = middle value when ordered.",
          "Example: 2, 5, 8, 11, 14 → median = 8.",
          "Mode = most frequent value.",
          "Range = maximum – minimum.",
          "Frequency tables: calculate mean, median, mode, and range.",
          "Grouped frequency: estimate mean using midpoints.",
          "Bar charts, pie charts, histograms, and scatter graphs.",
          "Histograms: area of bar proportional to frequency; frequency density = frequency / class width.",
          "Cumulative frequency: cumulative frequency diagram (ogive); find median, quartiles.",
          "Box‑and‑whisker plots: show minimum, Q1, median, Q3, maximum.",
          "Interquartile range (IQR) = Q3 – Q1.",
          "Standard deviation (for advanced study).",
          "Probability scale: 0 (impossible) to 1 (certain).",
          "P(event) = number of favourable outcomes / total number of outcomes.",
          "Example: Rolling a 3 on a fair die → P(3) = 1/6.",
          "Mutually exclusive events: P(A or B) = P(A) + P(B).",
          "Independent events: P(A and B) = P(A) × P(B).",
          "Example: Tossing a coin twice: P(T,T) = ½ × ½ = ¼.",
          "Probability tree diagrams: multiply along branches.",
          "Conditional probability: P(A|B) = P(A and B) / P(B)."
        ]
      },
      {
        heading: "5. Calculus and Advanced Topics",
        content: [
          "Differentiation: gradient of a curve.",
          "Power rule: d/dx (xⁿ) = n xⁿ⁻¹.",
          "Example: Derivative of x² = 2x.",
          "Tangents and normals to curves.",
          "Stationary points: set derivative = 0; determine maximum/minimum.",
          "Integration: reverse of differentiation.",
          "Power rule: ∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C.",
          "Example: ∫ 3x² dx = x³ + C.",
          "Definite integrals: area between curve and x‑axis.",
          "Vectors in 2D and 3D: position vectors, magnitude, unit vectors.",
          "Complex numbers (basic introduction): i² = –1; operations with a + bi.",
          "Logarithms: logₐ(b) = c means aᶜ = b.",
          "Example: log₂(32) = 5 because 2⁵ = 32.",
          "Exponential growth and decay: y = a·bˣ.",
          "Trigonometric graphs: sin, cos, tan; amplitude, period, phase shift.",
          "Trigonometric identities: sin²θ + cos²θ = 1.",
          "Solving trigonometric equations within a given range."
        ]
      }
    ]
  },

  english: {
    title: "📖 English Language Study Notes",
    sections: [
      {
        heading: "1. Parts of Speech",
        content: [
          "Noun: names a person, place, thing, or idea (e.g., Lesotho, book, freedom).",
          "Pronoun: replaces a noun (I, you, he, she, it, we, they).",
          "Verb: shows action or state (run, is, become).",
          "Adjective: describes a noun (beautiful, tall, blue).",
          "Adverb: describes a verb, adjective, or other adverb (quickly, very, well).",
          "Preposition: shows relationship (in, on, at, by, for, with).",
          "Conjunction: joins words or phrases (and, but, or, because, although).",
          "Interjection: expresses emotion (Oh! Wow! Alas!).",
          "Articles: definite 'the', indefinite 'a'/'an'."
        ]
      },
      {
        heading: "2. Tenses",
        content: [
          "Present Simple: I go / She goes (habit or fact).",
          "Present Continuous: I am going (action happening now).",
          "Present Perfect: I have gone (past action with present relevance).",
          "Past Simple: I went (completed action in the past).",
          "Past Continuous: I was going (ongoing past action).",
          "Past Perfect: I had gone (action completed before another past action).",
          "Future: I will go / I am going to go.",
          "Future Continuous: I will be going.",
          "Future Perfect: I will have gone.",
          "Correct tense usage in conditional sentences (if‑clauses)."
        ]
      },
      {
        heading: "3. Sentence Structure",
        content: [
          "Simple sentence: one main clause (The dog barked).",
          "Compound sentence: two main clauses joined by conjunction (The dog barked and the cat ran).",
          "Complex sentence: main clause + subordinate clause (Although it was late, he studied).",
          "Subject-verb agreement: singular subject → singular verb.",
          "Correct: He goes; They go. Neither the teacher nor the students were present.",
          "Active voice: subject performs action (The cat chased the mouse).",
          "Passive voice: subject receives action (The mouse was chased by the cat).",
          "Direct speech: She said, 'I am tired.'",
          "Reported (indirect) speech: She said that she was tired.",
          "Question forms: Yes/No questions, Wh‑ questions.",
          "Tag questions: You are coming, aren't you?"
        ]
      },
      {
        heading: "4. Punctuation and Mechanics",
        content: [
          "Full stop (.) ends a declarative sentence.",
          "Comma (,) separates items in a list, clauses, or after introductory phrases.",
          "Question mark (?) ends a direct question.",
          "Exclamation mark (!) expresses strong emotion.",
          "Apostrophe (') for possession (Lesotho's mountains) and contractions (don't).",
          "Quotation marks (' ' or \" \") enclose direct speech or titles.",
          "Colon (:) introduces a list or explanation.",
          "Semicolon (;) joins two related independent clauses.",
          "Dash (—) shows a break in thought or emphasis.",
          "Hyphen (‑) joins words (well‑known, part‑time).",
          "Capital letters for proper nouns, start of sentences, and 'I'."
        ]
      },
      {
        heading: "5. Vocabulary and Spelling",
        content: [
          "Synonyms: words with similar meanings (happy/joyful, big/large).",
          "Antonyms: words with opposite meanings (hot/cold, love/hate).",
          "Homophones: words that sound alike but have different spellings/meanings (there/their/they're).",
          "Commonly misspelled words: accommodation, receive (i before e except after c), necessary, separate.",
          "Prefixes: un‑, re‑, pre‑, dis‑, mis‑ change meaning.",
          "Suffixes: ‑ful, ‑less, ‑able, ‑tion, ‑ly change word class.",
          "Idioms: phrases with non‑literal meaning (a piece of cake = easy).",
          "Figurative language: simile (like/as), metaphor (is), personification.",
          "Word roots from Greek and Latin help deduce meaning.",
          "Context clues: use surrounding text to determine meaning of unfamiliar words."
        ]
      },
      {
        heading: "6. Reading Comprehension",
        content: [
          "Skimming: reading quickly for the main idea.",
          "Scanning: looking for specific information (dates, names, numbers).",
          "Inference: reading between the lines to understand implied meaning.",
          "Identify author's purpose: to inform, entertain, persuade, or describe.",
          "Summarising: condensing a passage to its essential points.",
          "Identifying themes and main ideas in fiction and non‑fiction.",
          "Understanding tone (e.g., formal, humorous, sarcastic) and mood.",
          "Literary devices: simile, metaphor, alliteration, onomatopoeia, hyperbole."
        ]
      },
      {
        heading: "7. Writing Skills",
        content: [
          "Essay structure: introduction (hook + thesis), body paragraphs (topic sentence + evidence), conclusion (summary + final thought).",
          "Paragraph development: unity (one main idea), coherence (logical flow), supporting details.",
          "Types of essays: narrative (story), descriptive (details), expository (explain), argumentative (persuade).",
          "Formal writing: no contractions, objective tone, precise vocabulary.",
          "Informal writing: personal, conversational, may use contractions.",
          "Letter writing: friendly letter (informal) vs business letter (formal layout).",
          "Report writing: title, introduction, findings, conclusion, recommendations.",
          "Speech writing: salutation, engaging opening, clear points, memorable ending.",
          "Editing: check grammar, spelling, punctuation, and clarity.",
          "Proofreading: read aloud, check for omitted words, correct formatting."
        ]
      }
    ]
  },

  science: {
    title: "⚛️ Integrated Science Study Notes",
    sections: [
      {
        heading: "Biology Section",
        content: [
          "Characteristics of living things (MRS GREN): Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.",
          "Cell structure: nucleus (controls cell), cytoplasm (chemical reactions), cell membrane (controls what enters/leaves), mitochondria (respiration), ribosomes (protein synthesis).",
          "Plant cells also have: cell wall (cellulose), large permanent vacuole, chloroplasts (photosynthesis).",
          "Photosynthesis equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy and chlorophyll required).",
          "Factors affecting photosynthesis: light intensity, carbon dioxide concentration, temperature.",
          "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP).",
          "Anaerobic respiration in humans: glucose → lactic acid + energy.",
          "Anaerobic respiration in yeast (fermentation): glucose → ethanol + carbon dioxide + energy.",
          "Digestive system: mouth (mechanical & chemical), oesophagus, stomach (acid & enzymes), small intestine (digestion & absorption), large intestine (water absorption).",
          "Enzymes: biological catalysts; specific to substrate; affected by temperature and pH.",
          "Circulatory system: heart (4 chambers), arteries (away from heart), veins (to heart), capillaries (exchange).",
          "Blood components: red blood cells (oxygen), white blood cells (defence), platelets (clotting), plasma (transport).",
          "Nervous system: central nervous system (brain, spinal cord), peripheral nerves.",
          "Reflex arc: stimulus → receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector → response.",
          "Reproduction: sexual (fusion of gametes) vs asexual (one parent).",
          "Human reproductive organs: male (testes, sperm duct), female (ovaries, uterus, oviduct).",
          "DNA structure: double helix, bases A‑T, C‑G.",
          "Genetics: dominant and recessive alleles; homozygous and heterozygous.",
          "Ecology: food chains, food webs, trophic levels; energy transfer (about 10% between levels).",
          "Carbon cycle, nitrogen cycle, water cycle.",
          "Human impact: deforestation, pollution, global warming, conservation."
        ]
      },
      {
        heading: "Chemistry Section",
        content: [
          "States of matter: solid (fixed shape/volume), liquid (fixed volume, takes shape), gas (no fixed shape/volume).",
          "Changes of state: melting, boiling, condensing, freezing, sublimation.",
          "Particle theory: particles move more at higher temperatures.",
          "Atoms, elements, compounds, mixtures.",
          "Periodic table: rows (periods), columns (groups); Group 1 (alkali metals), Group 7 (halogens), Group 0 (noble gases).",
          "Atomic structure: protons (+), neutrons (neutral), electrons (–).",
          "Atomic number = number of protons. Mass number = protons + neutrons.",
          "Electron configuration: 2,8,8,... rule.",
          "Isotopes: atoms of the same element with different numbers of neutrons.",
          "Ionic bonding: transfer of electrons; forms between metal and non‑metal (e.g., NaCl).",
          "Covalent bonding: sharing of electrons; forms between non‑metals (e.g., H₂O, CO₂).",
          "Chemical formulae and equations: balanced equations conserve atoms.",
          "Types of reactions: combustion, neutralisation, oxidation, reduction, displacement, decomposition.",
          "Acids and bases: acids have pH < 7, bases have pH > 7, neutral pH = 7.",
          "Common acids: HCl, H₂SO₄, HNO₃. Common bases: NaOH, KOH, Ca(OH)₂.",
          "Neutralisation: acid + base → salt + water.",
          "Reactivity series: K, Na, Ca, Mg, Al, Zn, Fe, Pb, Cu, Ag, Au.",
          "Displacement reactions: a more reactive metal displaces a less reactive metal from its compound.",
          "Extraction of metals: reduction with carbon for metals below carbon; electrolysis for metals above.",
          "Air composition: 78% nitrogen, 21% oxygen, 1% other gases.",
          "Water treatment: filtration, sedimentation, chlorination.",
          "Organic chemistry: alkanes (CₙH₂ₙ₊₂), alkenes (CₙH₂ₙ), alcohols (CₙH₂ₙ₊₁OH)."
        ]
      },
      {
        heading: "Physics Section",
        content: [
          "Speed = distance / time. Average speed = total distance / total time.",
          "Acceleration = change in velocity / time.",
          "Distance‑time graphs: gradient = speed.",
          "Velocity‑time graphs: gradient = acceleration, area = distance.",
          "Forces: measured in Newtons (N).",
          "Newton's 1st Law: object stays at rest or moves at constant velocity unless acted on by a resultant force.",
          "Newton's 2nd Law: F = ma (resultant force = mass × acceleration).",
          "Newton's 3rd Law: for every action there is an equal and opposite reaction.",
          "Weight = mass × gravitational field strength (W = mg). g on Earth ≈ 9.8 m/s².",
          "Friction: opposes motion; produces heat.",
          "Hooke's Law: extension is directly proportional to force, up to the limit of proportionality (F = kx).",
          "Moments: moment = force × perpendicular distance from pivot.",
          "Principle of moments: clockwise moments = anticlockwise moments for equilibrium.",
          "Energy: kinetic energy = ½mv², gravitational potential energy = mgh.",
          "Conservation of energy: energy cannot be created or destroyed, only transferred/transformed.",
          "Work done = force × distance moved in direction of force.",
          "Power = work done / time (or energy transferred / time).",
          "Waves: transverse (light, water) and longitudinal (sound).",
          "Wave speed = frequency × wavelength (v = fλ).",
          "Reflection: angle of incidence = angle of reflection.",
          "Refraction: light bends when entering a different medium; Snell's law n = sin i / sin r.",
          "Total internal reflection: occurs when angle of incidence > critical angle.",
          "Sound: produced by vibrations; cannot travel in a vacuum.",
          "Electricity: current (I, amps), voltage (V, volts), resistance (R, ohms).",
          "Ohm's law: V = IR. Series circuit: current same, voltage splits. Parallel circuit: current splits, voltage same.",
          "Electrical power: P = IV = I²R = V²/R.",
          "Magnetism: like poles repel, unlike attract; magnetic field lines.",
          "Electromagnetism: current‑carrying wire creates magnetic field; electric motor effect.",
          "Electromagnetic induction: moving a wire through a magnetic field induces voltage (generator).",
          "Radioactivity: alpha (α) particles, beta (β) particles, gamma (γ) rays.",
          "Half‑life: time taken for half of radioactive nuclei to decay.",
          "Uses of radioisotopes: medical tracers, carbon dating, smoke detectors.",
          "Space: Solar System – Sun, planets, moons, asteroids, comets.",
          "Gravity keeps planets in orbit; geostationary and polar satellites."
        ]
      }
    ]
  },

  history: {
    title: "🏛 History of Lesotho & Southern Africa",
    sections: [
      {
        heading: "1. Pre‑Colonial Basotho Nation",
        content: [
          "Moshoeshoe I (c. 1786–1870): founder and first king of the Basotho nation.",
          "He united scattered Sotho‑Tswana clans during the Lifaqane (Mfecane) wars.",
          "Strategically settled on Thaba Bosiu (Mountain of Night), a natural fortress.",
          "Used diplomacy and military skill to defend against Zulu, Ndebele, and Boer attacks.",
          "Established powerful alliances, including inviting French missionaries (Casalis, Arbousset).",
          "The Basotho nation grew from a small clan to a kingdom under Moshoeshoe I.",
          "Lifaqane / Difaqane: period of forced migration and widespread conflict in southern Africa (early 19th century).",
          "Caused by expansion of the Zulu kingdom under Shaka, drought, and competition for resources.",
          "Impact on the Basotho: displacement, but also consolidation under Moshoeshoe I.",
          "The Basotho–Boer conflicts (1858–1868) over land in the Caledon River valley.",
          "Seqiti War (1865–1868): Basotho vs Orange Free State; Moshoeshoe sought British protection."
        ]
      },
      {
        heading: "2. Colonial Period (1868–1966)",
        content: [
          "1868: Basutoland became a British protectorate at Moshoeshoe I's request.",
          "Colonial administration: indirect rule through traditional chiefs (the Basotho chieftaincy).",
          "Land and economic policies: limited land for Basotho; many became migrant labourers in South African mines.",
          "Introduction of Christianity and Western education by missionaries.",
          "Rise of political consciousness: early nationalist movements.",
          "1952: Basutoland African Congress (later Basutoland Congress Party, BCP) formed.",
          "1959: Basutoland National Party (BNP) founded by Chief Leabua Jonathan.",
          "1960s: constitutional conferences leading to self‑government and then independence.",
          "4 October 1966: Basutoland gained independence, becoming the Kingdom of Lesotho.",
          "King Moshoeshoe II became the constitutional monarch; Chief Leabua Jonathan first Prime Minister."
        ]
      },
      {
        heading: "3. Independent Lesotho",
        content: [
          "Post‑independence politics: BNP rule (1966–1986) with periods of political instability.",
          "1986: military coup led by General Justin Lekhanya; King Moshoeshoe II exiled briefly.",
          "1993: return to civilian rule; BCP wins elections under Ntsu Mokhehle.",
          "1998: political crisis, disputed elections, military intervention by SADC (South Africa and Botswana).",
          "2002 onwards: political reforms, introduction of Mixed Member Proportional (MMP) electoral system.",
          "King Letsie III (current monarch, succeeding his father Moshoeshoe II).",
          "Economic challenges: reliance on South Africa, remittances, textile industry, water (LHWP).",
          "Lesotho Highlands Water Project (LHWP): major infrastructure project providing water to South Africa and hydroelectric power.",
          "HIV/AIDS epidemic and its social and economic impact.",
          "Cultural identity: Sesotho language, blanket (Seanamarena), Basotho hat (Mokorotlo), Morija Arts Festival."
        ]
      },
      {
        heading: "4. Key Figures",
        content: [
          "Moshoeshoe I: founder of Basotho nation, diplomat, warrior.",
          "Letsie I: successor to Moshoeshoe I.",
          "Leabua Jonathan: first Prime Minister, leader of BNP.",
          "Ntsu Mokhehle: leader of BCP, Prime Minister.",
          "Pakalitha Mosisili: long‑serving Prime Minister.",
          "Tom Thabane: multiple‑term Prime Minister.",
          "King Moshoeshoe II: first king of independent Lesotho.",
          "King Letsie III: current king."
        ]
      }
    ]
  },

  geography: {
    title: "🌍 Geography Study Notes",
    sections: [
      {
        heading: "1. Physical Geography",
        content: [
          "Structure of the Earth: inner core (solid), outer core (liquid), mantle (semi‑solid), crust (solid).",
          "Plate tectonics: Earth's crust divided into plates that move due to convection currents in mantle.",
          "Plate boundaries: convergent (collision), divergent (spreading), transform (sliding).",
          "Earthquakes: sudden release of energy; focus, epicentre, Richter and Mercalli scales.",
          "Volcanoes: formed at plate boundaries or hotspots; shield and composite types.",
          "Tsunamis: caused by undersea earthquakes; can devastate coastal areas.",
          "Weathering: mechanical (freeze‑thaw, exfoliation), chemical (oxidation, solution), biological.",
          "Erosion by rivers: hydraulic action, abrasion, attrition, solution.",
          "River features: V‑shaped valleys, meanders, ox‑bow lakes, floodplains, deltas.",
          "Coastal erosion: cliffs, wave‑cut platforms, caves, arches, stacks, stumps.",
          "The water cycle: evaporation, transpiration, condensation, precipitation, surface runoff, groundwater flow.",
          "Climate: difference between weather (short‑term) and climate (long‑term average).",
          "Climate zones: tropical, temperate, polar, arid/semi‑arid, Mediterranean.",
          "Factors affecting climate: latitude, altitude, distance from sea, ocean currents, prevailing winds.",
          "Natural vegetation: forests (tropical rainforest, coniferous), grasslands (savanna, temperate), deserts.",
          "Soils: formation, layers (horizons), types (sandy, clay, loam)."
        ]
      },
      {
        heading: "2. Human Geography",
        content: [
          "Population distribution: where people live; densely vs sparsely populated areas.",
          "Population density: number of people per square kilometre.",
          "Factors affecting population growth: birth rate, death rate, fertility rate, migration.",
          "Demographic Transition Model: stages 1–5 showing population change over time.",
          "Migration: push factors (e.g., unemployment, war) and pull factors (e.g., jobs, safety).",
          "Types of migration: internal, international, voluntary, forced (refugees).",
          "Urbanisation: growth of cities; causes (rural‑urban migration, natural increase) and effects.",
          "Settlement patterns: dispersed, linear, nucleated.",
          "Land use models: Burgess concentric zone model, Hoyt sector model.",
          "Economic sectors: primary (farming, mining), secondary (manufacturing), tertiary (services), quaternary (research).",
          "Development indicators: GDP per capita, HDI, literacy rate, life expectancy, infant mortality.",
          "Globalisation: increasing interconnectedness through trade, technology, and communication.",
          "Sustainable development: meeting present needs without compromising future generations."
        ]
      },
      {
        heading: "3. Geography of Lesotho",
        content: [
          "Location: southern Africa, completely surrounded by South Africa (enclave).",
          "Area: approximately 30,355 km².",
          "Topography: dominated by the Maloti/Drakensberg mountains; lowest point approx. 1,400 m above sea level.",
          "Highest peak: Thabana Ntlenyana (3,482 m), the highest in southern Africa.",
          "Rivers: Caledon (Mohokare) forms northern border; Orange (Senqu) originates in Lesotho and flows to Atlantic Ocean.",
          "Climate: temperate with cold, dry winters (May–August) and warm, wet summers (November–March).",
          "Snowfall common in highlands during winter.",
          "Natural vegetation: mainly grassland (highveld) and alpine vegetation.",
          "Soils: generally thin and prone to erosion; fertile alluvial soils in valleys.",
          "Natural resources: diamonds (e.g., Letseng mine), water, some agricultural land.",
          "Lesotho Highlands Water Project (LHWP): series of dams and tunnels transferring water to South Africa; generates hydroelectricity.",
          "Environmental challenges: severe soil erosion, deforestation, overgrazing, climate change impacts."
        ]
      }
    ]
  }
};
