/** Public curriculum summaries from the supplied course; no schedule is implied. */
export const courseEpisodes = [
  { title: "Episode 1: What exactly is a unit or measurement?", topics: "Measurement, units, metric prefixes, order of operations, and combining units." },
  { title: "Episode 2: Vectors are all around you", topics: "Number lines, position, direction of change, angles, radians, and time." },
  { title: "Episode 3: It all comes together", topics: "Displacement, graphs, slope, rates of change, velocity, and recording a rocket’s motion." },
  { title: "Episode 4: Pattern finding", topics: "Linear and quadratic patterns in equations, graphs, and tables; functions and motion." },
  { title: "Episode 5: Exploring differentiation", topics: "Derivatives from first principles, then position, velocity, and acceleration." },
  { title: "Episode 6: Divide and Rule — Part 1", topics: "Sequences, sums, displacement from velocity, and building area with rectangles." },
  { title: "Episode 7: Divide and Rule — Part 2", topics: "Riemann sums, definite integrals, unit-circle trigonometry, and sine and cosine in motion." },
  { title: "Episode 8: Two Dimensional Vectors", topics: "Coordinates, independent directions, projectile motion, and choosing useful axes." },
] as const;

export const positionData = [
  { time: 0, position: 5 }, { time: 2, position: 13 },
  { time: 4, position: 21 }, { time: 6, position: 29 },
] as const;

export const schoolFaqs = [
  {
    question: "Which students is the course for?",
    answer: "Students moving from Class 10 to Class 11. The course develops the mathematical ideas used in Physics, including units, vectors, graphs, and calculus, with worked examples and questions for practice.",
  },
  {
    question: "Is this a full Class 11–12 or JEE/NEET syllabus course?",
    answer: "This invitation is for the Physics bridge course. Its focus is on foundations and their application. The capstone chapter uses examples from later Physics topics to apply those tools; it is not a promise of complete syllabus coverage.",
  },
  {
    question: "How long is the school pilot, and what does it cost?",
    answer: "The school pilot runs for one month and is offered at no cost to participating schools. We would discuss delivery arrangements and student commitment with your school before agreeing on participation.",
  },
  {
    question: "What would the school and its teachers need to do?",
    answer: "The introductory conversation is where we would discuss curriculum fit, delivery, student commitment, and teacher involvement. Your feedback would help us refine the course and supporting platform for students and teachers.",
  },
  {
    question: "What will the 30-minute conversation cover?",
    answer: "We will introduce the course, hear your professional feedback, and discuss whether the pilot could be useful for your school. Booking a conversation does not commit the school to participating.",
  },
] as const;
