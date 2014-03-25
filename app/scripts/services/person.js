'use strict';

angular.module('amboothcomApp')
    .constant('person', {
        profile: 'Passionate web developer with an interest in all forms' +
            'of technology. Completed degree in Information Systems Management' +
            'while refining skills through internships, freelance development work, ' +
            'and multiple side projects. Efficient, determined, self motivated learner ' +
            'with strong organizational skills. Group leader and team player with strong ' +
            'people skills resulting in many successful projects including client websites ' +
            'and web applications.',
        skills: [
            'Object Oriented PHP',
            'FuelPHP MVC Framework',
            'HTML5',
            'CSS3',
            'jQuery',
            'AngularJS',
            'MySQL & SQL',
            'Git / Github',
            'Amazon AWS',
            'Linux & Apache Setup/Management',
            'Regular Expressions (RegEx)',
            'Wordpress: Themes & Plugins',
            'Responsive Website Design'
        ],
        experience: [
            {
                start: 'Dec 2012',
                end: 'Present',
                title: 'Full Stack Web Developer',
                company: 'Flogistix LP',
                location: 'Oklahoma City, OK',
                text: 'Web application developer assigned as the lead on multiple projects used by corporate staff and ' +
                    'field mechanics. Introduced Object Oriented practices and optimized pre-existing code bringing ' +
                    'noticeably faster database interaction speeds. Transitioned existing web applications and websites ' +
                    'to Amazon EC2 instances and RDS databases. Created internal documentation system and work flows ' +
                    'using GitHub to maintain company code and push new versions to production servers. Extensive work ' +
                    'with responsive website design and development. Developed a native Windows 8 touch screen ' +
                    'application using WinJS frameworks used by manufacturing workers to track their time.',
                items: [
                    'Amazon AWS/Linux administrator',
                    'Web Developer using FuelPHP',
                    'Created internal documentation system',
                    'Heavy use of Git/Github',
                    'Created a Windows 8 application using Windows Javascript Frameworks'
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
                company: 'North Institute, Oklahoma Christian University',
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
                end: 'April 2009',
                title: 'Software Technician',
                company: 'Support Central, Oklahoma Christian University',
                location: 'Edmond, OK',
                text: 'Software Support Technician at Oklahoma Christian University Provided friendly support ' +
                    'to students, teachers and staff. Adapted quickly to workflow, mentored new and current student ' +
                    'workers.'
            },
            {
                start: 'May 2009',
                end: 'Aug 2009',
                title: 'Computer Specialist',
                company: 'iCafe',
                location: 'Lawrence, KS',
                text: 'Apple technical support specialist who provided support for clients on the phone and in person. ' +
                    'Diagnosed and repaired hardware and software issues on Macintosh computers.'
            },
            {
                start: '',
                end: '',
                title: '',
                company: '',
                location: '',
                text: ''
            }
        ]

    })
;
