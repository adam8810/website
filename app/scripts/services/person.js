'use strict';

angular.module('amboothcomApp')
    .constant('person', {
        profile: 'Full stack web application developer with a passion for innovation. ' +
            'Completed degree in Information Systems Management ' +
            'while refining skills through internships, freelance development work ' +
            'and side projects. Efficient, determined, self motivated learner ' +
            'with strong organizational skills. Group leader and team player with strong ' +
            'people skills resulting in many successful projects.',
        email: 'adam@ambooth.com',
        phone: '(785) 813-1748',
        education: [
            {
                start: '2007',
                end: '2012',
                title: 'Oklahoma Christian University',
                location: 'Edmond, OK',
                major: 'Information Systems Management',
                text: 'Graduated April 2012'
            }
        ],
        skills: {
            column1: [
                'AngularJS',
                'NodeJS',
                'jQuery',
                'PHP / FuelPHP'
            ],
            column2: [
                'HTML5',
                'CSS3',
                'Bower',
                'Grunt Tasks'
            ],
            column3: [
                'Yeoman',
                'REST APIs',
                'Wordpress Themes',
                'Regular Expressions'
            ],
            column4: [
                'Amazon AWS',
                'MySQL & SQL',
                'Git / Github',
                'Vim'
            ]
        },
        xp: {
            'Experience': [
                {
                    start: 'Dec 2012',
                    end: 'Present',
                    title: 'Full Stack Web Developer',
                    company: 'Flogistix LP',
                    location: 'Oklahoma City, OK',
                    text: 'Full stack mobile & web application developer. Took lead role on many successful projects ' +
                        'used by internal team members as well as external clients. Introduced new Object Oriented ' +
                        'frameworks and practices while optimizing existing codebase yielding noticeably faster ' +
                        'execution speeds. Transitioned existing web applications and websites to Amazon EC2 & ' +
                        'RDS instances. Developed RESTful API used by all applications and clients.',
                    items: [
                        'Amazon AWS/Linux administrator',
                        'Introduced FuelPHP & OOP Methodologies',
                        'Created internal documentation system'
                    ]
                },
                {
                    start: 'Feb 2012',
                    end: 'Nov 2012',
                    title: 'Internal Developer',
                    company: 'LifeChurch.tv',
                    location: 'Edmond, OK',
                    text: 'Web developer position that focused on internal projects used by staff ' +
                        'and volunteers. Utilized the FuelPHP Framework and Git/Github for versioning ' +
                        'and collaboration. Worked with numerous REST-based APIs including Google Maps, ' +
                        'Fellowship One, the CellForce SMS system, and Active Directory. Created and ' +
                        'maintained Wordpress websites and plugins used by team members.',
                    items: [
                        'Used FuelPHP Framework and Git/Github',
                        'Used APIs for Google Maps, Fellowship One, CellForce SMS systems, and Active Directory interactions',
                        'Created web applications used by staff and volunteers',
                        'Created and maintain Wordpress websites and plugins'
                    ]
                },
                {
                    start: 'April 2010',
                    end: 'Sept 2011',
                    title: 'Web Developer',
                    company: 'T&S Web Design',
                    location: 'Edmond, OK',
                    text: 'Lead developer and go-to guy for technical support questions and issues. Gracefully ' +
                        'transitioned company into using Google Apps for email, calendars, and their internal wiki ' +
                        'system.',
                    items: [
                        'Created websites using WordPress framework, HTML, PHP, CSS, and JQuery based on designs made in-house',
                        'Conducted training meetings for clients',
                        'Provided technical support for staff and clients',
                        'On-site technical support and training sessions for clients'
                    ]
                },
                {
                    start: 'April 2010',
                    end: 'May 2010',
                    title: 'Programmer Intern',
                    company: 'North Institute, OCU',
                    location: 'Edmond, OK',
                    text: 'Student intern position. Made modifications to the organization website making it easier to ' +
                        'navigate and find content. Further developed internal media sharing system used to distribute ' +
                        'content to students.',
                    items: [
                        'Redesigned and managed North Institute website',
                        'Worked on internal media sharing software used to distribute videos and other media to students using C#, ASP, and HTML'
                    ]
                },
                {
                    start: 'Aug 2009',
                    end: 'April 2010',
                    title: 'Software Technician',
                    company: 'Support Central, OCU',
                    location: 'Edmond, OK',
                    text: 'Software Support Technician at Oklahoma Christian University Provided friendly support ' +
                        'to students, teachers and staff. Adapted quickly to workflow, mentored new and current student ' +
                        'workers.',
                    items: [
                        'Provided in-person technical support to fellow students, teachers and staff',
                        'Provided support for teachers in classroom (On and off the clock)',
                        'Minor hardware diagnostics before passing computer to hardware department if necessary'
                    ]
                },
                {
                    start: 'May 2009',
                    end: 'Aug 2009',
                    title: 'Computer Specialist',
                    company: 'iCafe',
                    location: 'Lawrence, KS',
                    text: 'Apple technical support specialist who provided support for clients on the phone and in person. ' +
                        'Diagnosed and repaired hardware and software issues on Macintosh computers.',
                    items: [
                        'Provided in-person and phone support to clients',
                        'Diagnosed and repaired Apple computers with hardware or software issues'
                    ]
                }
            ],
            'Other Experience': [
                {
                    start: 'Sept 2008',
                    end: 'Apr 2012',
                    title: 'Executive Secretary/Webmaster',
                    company: 'Psi Epsilon Fraternity',
                    location: 'Oklahoma Christian University, Edmond, OK',
                    text: 'Founded new fraternity, Psi Epsilon, during freshmen year in college. Grew fraternity to over ' +
                        '80 members before graduation. Highly involved with all decision-making and served as an ' +
                        'executive officer for 4 years. Created the website used by all members for information and ' +
                        'even payment of dues. Maintained emailing lists and overall organization of club which included ' +
                        'taking meeting notes and sending calendar invites.',
                    items: [
                        'Founded club and recruited 20 initial members which grew to 70+ by graduation',
                        'Created and maintained fraternity website',
                        'In charge of taking meeting notes and maintaining emailing lists'
                    ]
                },
                {
                    start: 'Sept 2007',
                    end: 'Apr 2009',
                    title: 'Male Class Representative',
                    company: 'OC Student Government Association',
                    location: 'Oklahoma Christian University, Edmond, OK',
                    text: 'On team of dedicated officers who met weekly and planned events to bring the students closer ' +
                        'together. Planned two banquets, two school-wide parties, and attended many student government ' +
                        'meetings on a weekly basis. Voted on significant developments and issues that affected the ' +
                        'entire school. Managed the SGA website which was used by the entire school.',
                    items: [
                        'Attended weekly SGA meetings as well as separate freshmen officer meetings',
                        'Planned two banquets and two school-wide parties',
                        'Maintained SGA website for two years'
                    ]
                }
            ]
        }

    })
;
