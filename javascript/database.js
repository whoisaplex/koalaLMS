let users = [{username: 'alexander',
              password: 'dahlberg123',
              full_name: 'Alexander Dahlberg',
              role: 'student',
              all_courses: [{ongoing: [{name: 'HTML', description: 'This is the HTML description', tempo: '100%'},
                                      {name: 'CSS', description: 'This is the CSS description', tempo: '50%'},
                                      {name: 'Javascript', description: 'This is the Javascript description', tempo: '100%'}]},
                            {upcoming: [{name: 'Swedish', description: 'This is the Swedish description', tempo: '30%'},
                                        {name: 'English', description: 'This is the English description', tempo: '100%'}]},
                            {finished: [{name: 'Java', description: 'This is the Java description', tempo: '100%', grade: 'A'},
                                        {name: 'C++', description: 'This is the C++ description', tempo: '100%', grade: 'C'}]}],

              all_upcoming: [{upcoming_exams: [{name: 'Javascript', description: 'Vanilla Javascript', due_date: '2017-12-14'},
                                        {name: 'HTML', description: 'Static websites', due_date: '2018-01-12'}, {name: 'Backend', description: 'Database logic', due_date: '2018-01-30'},
                                        {name: 'Arbetsmetodiker', description: 'Scrum', due_date: '2018-02-14'} ]},
                            {upcoming_assignments: [{name: 'Javascript', description: 'For loops', due_date: '2017-10-30'},
                                        {name: 'HTML', description: 'HTML5 & CSS3', due_date: '2017-11-06'},
                                        {name: 'Backend', description: 'PHP & MYSQL', due_date: '2017-11-15'},
                                        {name: 'Arbetsmetodiker', description: 'Scrum poker', due_date: '2017-11-27'}]}]}

];
