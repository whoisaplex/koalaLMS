let students = [{username: 'alexander',
              password: 'dahlberg123',
              full_name: 'Alexander Dahlberg',
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
  full_name: 'Mr Macnucklemuckle',
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
