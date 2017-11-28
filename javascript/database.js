let students = [{username: 'alexander',
              password: 'dahlberg123',
              full_name: 'Student',
              role: 'student',
              all_courses: [{ongoing: [{name: 'Html', description: '<div class="courses-box-grid"><div class="courses-box-first"><h2>Kurspoäng</h2><p>30 Poäng</p><h2>Mål</h2><ul><li>HTML 5</li><li>Responsiv Design</li><li>Grundläggande SEO</li><li>Tillgänglighetsanpassing</li><li>Olika css-ramverk</li></ul></div><div class="courses-box-second"><h2>Innehåll</h2><p>Syftet med kursen är att den studerande ska få kunskap och färdigheter i hur man utvecklar webblösningar i HTML 5 och CSS3, både fristående och i publiceringssystem. Kursen belyser även den senaste  tekniken och ramverken inom HTML5/CSS3</p></div></div>', tempo: '100%', teacher: 'Mac Nucklemuckle'},
                                      {name: 'Css3', description: '<div class="courses-box-grid"><div class="courses-box-first"><h2>Kurspoäng</h2><p>30 Poäng</p><h2>Mål</h2><ul><li>HTML 5</li><li>Responsiv Design</li><li>Grundläggande SEO</li><li>Tillgänglighetsanpassing</li><li>Olika css-ramverk</li></ul></div><div class="courses-box-second"><h2>Innehåll</h2><p>Syftet med kursen är att den studerande ska få kunskap och färdigheter i hur man utvecklar webblösningar i HTML 5 och CSS3, både fristående och i publiceringssystem. Kursen belyser även den senaste  tekniken och ramverken inom HTML5/CSS3</p></div></div>', tempo: '50%', teacher: 'Mac Nucklemuckle'},
                                      {name: 'Javascript', description: `<div class="courses-box-grid"><div class="courses-box-first"><h2>Kurspoäng</h2><p>110 Poäng</p><h2>Mål</h2><ul><li>Javascript, grundläggande syntax</li><li>Javascript versioner och dess kompabilitet</li><li>Hur javascript körs i webbläsaren</li><li>Javascript-bibliotek</li><li>Javascript-ramverk</li><li>DOM</li><li>AJAX</li><li>HTTP 1.1 /2.0</li><li>Websockets och polling</li></ul></div><div class="courses-box-second"><h2>Innehåll</h2><p>Kursen ger de studerande avancerade kunskaper och färdigheter i att programmera och strukturera
                                      Javascript-projekt.<br><br>De studerande får kunskaper om att det finns olika Javascript-versioner och lär sig jämföra dessa samt
                                      får förståelse för deras olika kompabilitet med olika webbläsare och plattformar.<br><br>De studerande ges goda kunskaper gällande att använda olika Javascript-bibliotek t.ex. JQuery<br><br>De studerande ges goda kunskaper i hur ramverk fungerar samt kunna välja lämpliga tekniker utifrån
                                      projektspecifikationer<br>Kursen innehåller programmering i Javascript, däribland objektorienterade implementationer i
                                      Javascript m.m. Kursen tar även upp hur man använder ramverk i Javascript samt hur man tar hjälp av
                                      verktyg som är relevanta för Javascript-fokuserad utveckling.
                                      </p></div></div>`, tempo: '100%', teacher: 'Mac Nucklemuckle'}]},
                            {upcoming: [{name: 'Swedish', description: '<div class="courses-box-grid"><div class="courses-box-first"><h2>Kurspoäng</h2><p>30 Poäng</p><h2>Mål</h2><ul><li>HTML 5</li><li>Responsiv Design</li><li>Grundläggande SEO</li><li>Tillgänglighetsanpassing</li><li>Olika css-ramverk</li></ul></div><div class="courses-box-second"><h2>Innehåll</h2><p>Syftet med kursen är att den studerande ska få kunskap och färdigheter i hur man utvecklar webblösningar i HTML 5 och CSS3, både fristående och i publiceringssystem. Kursen belyser även den senaste  tekniken och ramverken inom HTML5/CSS3</p></div></div>', tempo: '30%', teacher: 'Mac Nucklemuckle'},
                                        {name: 'English', description: '<div class="courses-box-grid"><div class="courses-box-first"><h2>Kurspoäng</h2><p>30 Poäng</p><h2>Mål</h2><ul><li>HTML 5</li><li>Responsiv Design</li><li>Grundläggande SEO</li><li>Tillgänglighetsanpassing</li><li>Olika css-ramverk</li></ul></div><div class="courses-box-second"><h2>Innehåll</h2><p>Syftet med kursen är att den studerande ska få kunskap och färdigheter i hur man utvecklar webblösningar i HTML 5 och CSS3, både fristående och i publiceringssystem. Kursen belyser även den senaste  tekniken och ramverken inom HTML5/CSS3</p></div></div>', tempo: '100%', teacher: 'Mac Nucklemuckle'}]},
                            {finished: [{name: 'Java', description: 'This is the Java description', tempo: '100%', grade: 'A', teacher: 'Mac Nucklemuckle'},
                                        {name: 'C++', description: 'This is the C++ description', tempo: '100%', grade: 'C', teacher: 'Mac Nucklemuckle'}]}],

              all_upcoming: [{upcoming_exams: [{name: 'Javascript', description: 'Vanilla Javascript', due_date: '2017-12-14'},
                                        {name: 'HTML', description: 'Static websites', due_date: '2018-01-12'}, {name: 'Backend', description: 'Database logic', due_date: '2018-01-30'},
                                        {name: 'Arbetsmetodiker', description: 'Scrum', due_date: '2018-02-14'} ]},
                            {upcoming_assignments: [{name: 'Javascript', description: 'For loops', due_date: '2017-10-30'},
                                        {name: 'HTML', description: 'HTML5 & CSS3', due_date: '2017-11-06'},
                                        {name: 'Backend', description: 'PHP & MYSQL', due_date: '2017-11-15'},
                                        {name: 'Arbetsmetodiker', description: 'Scrum poker', due_date: '2017-11-27'}]}],

              all_finished_courses:  [{name: 'Java', average_grade: 'VG', assignment1: 'For loop', assignment2: 'While loop', assignment3: 'If-else condition', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'VG'},
                                        {name: 'C#', average_grade: 'G', assignment1: 'Object oriented programming', assignment2: 'Bit-wise operator', assignment3: 'Simple project', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'G'},
                                        {name: 'C++', average_grade: 'VG', assignment1: 'Finished loop', assignment2: 'Finished conditional expression', assignment3: 'Made a project using C++', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'VG'},
										{name: 'Javascript', average_grade: 'VG', assignment1: 'Finished a small project', assignment2: 'Finished HTML5 & CSS3', assignment3: 'Made a project using Javascript', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'VG'}]},
              {username: 'masud',
              password: 'masud123',
              full_name: 'Masud',
              role: 'student',
              all_courses: [{ongoing: [{name: 'Html', description: 'This is the HTML description', tempo: '100%', teacher: 'Mac Nucklemuckle'},
                                      {name: 'Css3', description: 'This is the CSS description', tempo: '50%', teacher: 'Mac Nucklemuckle'},
                                      {name: 'Javascript', description: 'This is the Javascript description', tempo: '100%', teacher: 'Mac Nucklemuckle'}]},
                            {upcoming: [{name: 'Swedish', description: 'This is the Swedish description', tempo: '30%', teacher: 'Mac Nucklemuckle'},
                                        {name: 'English', description: 'This is the English description', tempo: '100%', teacher: 'Mac Nucklemuckle'}]},
                            {finished: [{name: 'Java', description: 'This is the Java description', tempo: '100%', grade: 'A', teacher: 'Mac Nucklemuckle'},
                                        {name: 'C++', description: 'This is the C++ description', tempo: '100%', grade: 'C', teacher: 'Mac Nucklemuckle'}]}],

              all_upcoming: [{upcoming_exams: [{name: 'Javascript', description: 'Vanilla Javascript', due_date: '2017-12-14'},
                                        {name: 'HTML', description: 'Static websites', due_date: '2018-01-12'}, {name: 'Backend', description: 'Database logic', due_date: '2018-01-30'},
                                        {name: 'Arbetsmetodiker', description: 'Scrum', due_date: '2018-02-14'} ]},
                            {upcoming_assignments: [{name: 'Javascript', description: 'For loops', due_date: '2017-10-30'},
                                        {name: 'HTML', description: 'HTML5 & CSS3', due_date: '2017-11-06'},
                                        {name: 'Backend', description: 'PHP & MYSQL', due_date: '2017-11-15'},
                                        {name: 'Arbetsmetodiker', description: 'Scrum poker', due_date: '2017-11-27'}]}],

              all_finished_courses:  [{name: 'Java', average_grade: 'VG', assignment1: 'For loop', assignment2: 'While loop', assignment3: 'If-else condition', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'VG'},
                                        {name: 'C#', average_grade: 'G', assignment1: 'Object oriented programming', assignment2: 'Bit-wise operator', assignment3: 'Simple project', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'G'},
                                        {name: 'C++', average_grade: 'VG', assignment1: 'Finished loop', assignment2: 'Finished conditional expression', assignment3: 'Made a project using C++', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'VG'},
                                        {name: 'Javascript', average_grade: 'VG', assignment1: 'Finished a small project', assignment2: 'Finished HTML5 & CSS3', assignment3: 'Made a project using Javascript', tempo: '100%', grade1: 'VG', grade2: 'VG', grade3: 'VG'}]}

];


let teachers = [
  {username: 'aplex',
  password: '123',
  full_name: 'Teacher',
  role: 'teacher',
  courses: [
    {name: 'Html',
    students: [],
    assignments: [{name: 'HTML 5 assignment', description: 'This is how you should be doing the assignment', files: [{studentName: 'Alexander'}, {studentName: 'Masud'}, {studentName: 'Simon'}]},
                  {name: 'HTML 6 assignment', description: 'This is how you should be doing the assignment', files: [{studentName: 'alexander'}, {studentName: 'Masud'}, {studentName: 'Simon'}]}

    ],
    examinations: [{name: 'HTML 6 Examination', description: 'This is how you should be doing the assignment', files: [{studentName: 'Oskar'}]}],
    evaluations: [{name: 'Html5 Evaluation', data: [{name: 'Alexander', qustion1: 'Mycket bra', question2: 'väldigt bra', question3: 'Super bra'}]},
                  {name: 'Html6 Evaluation', data: [{name: 'Ja du pojk', qustion1: 'Mycket bra', question2: 'väldigt bra', question3: 'Super bra'}]}
                 ]
  },
  {name: 'Css3',
    students: [],
    assignments: [{name: 'Css3 assignment', description: 'This is how you should be doing the assignment', files: []}],
    examinations: [],
    evaluations: [{name: 'Html7 Evaluation', data: [{name: 'Alexander', qustion1: 'Mycket bra', question2: 'väldigt bra', question3: 'Super bra'}]},
                  {name: 'Html8 Evaluation', data: [{name: 'Alexander', qustion1: 'Mycket bra', question2: 'väldigt bra', question3: 'Super bra'}, {name: 'Alexander', qustion1: 'Mycket bra', question2: 'väldigt bra', question3: 'Super bra'}, {name: 'Alexander', qustion1: 'Mycket bra', question2: 'väldigt bra', question3: 'Super bra'}]}
                 ]
  }
  ]}
];

let admins = [
  {
    username:'admin',
    password:'123',
    full_name:'Edward Snowden',
    role: 'sysadmin'
  }
];

let courses = [
    {
        course_id:1, course_title:"HTML", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum fugit rem ipsum sit placeat modi suscipit nobis laboriosam, qui eum, accusamus dolor"
    },
    {
        course_id:2, course_title:"CSS", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum fugit rem ipsum sit placeat modi suscipit nobis laboriosam, qui eum, accusamus dolor"
    },

    {
        course_id:3, course_title:"CSS3", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dolorum fugit rem ipsum sit placeat modi suscipit nobis laboriosam, qui eum, accusamus dolor"
    }

];

let evaluations = [{evaluation_id:1, course_id:1, evaluation_title:"HTML Evaluation 1"},{evaluation_id:2, course_id:1,              evaluation_title:"HTML Evaluation 2"}, {evaluation_id:3, course_id:2, evaluation_title:"CSS Evaluation 1"}];

let evaluationQuestions = [
    {question_id : 1, evaluation_id:1, question:"Hur var lektionerna under kursen?" },
    {question_id : 2, evaluation_id:1, question:"Hur fungerade kommunikationen under kursen?" },
    {question_id : 3, evaluation_id:2, question:"Vad var bra/dåligt med kursen?" }
];

let EvaluationAnswers = [
    {answer_id:1, user_id:1, question_id:1, answer:"bla bla"},
    {answer_id:2, user_id:1, question_id:2, answer:"hello hello"},
    {answer_id:3, user_id:1, question_id:3, answer:"mew mew mew"}
];
