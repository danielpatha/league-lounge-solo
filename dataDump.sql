--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: league; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.league (
    id integer NOT NULL,
    league_city_name character varying(80),
    sport character varying(80),
    competitive_level character varying(30),
    season character varying(30),
    day_of_the_week character varying(100),
    time_of_day character varying(30),
    co_ed boolean DEFAULT false,
    notes character varying(1000),
    link character varying(500),
    photo character varying(1000)
);


ALTER TABLE public.league OWNER TO daniel;

--
-- Name: league_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.league_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.league_id_seq OWNER TO daniel;

--
-- Name: league_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.league_id_seq OWNED BY public.league.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL
);


ALTER TABLE public."user" OWNER TO daniel;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO daniel;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: league id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.league ALTER COLUMN id SET DEFAULT nextval('public.league_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: league; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.league (id, league_city_name, sport, competitive_level, season, day_of_the_week, time_of_day, co_ed, notes, link, photo) FROM stdin;
12	Richfield	Basketball	Gold or A	Winter 2022	Wednesday	Evening	f	Keep in shape with a weekly night of hoops! Two officials and a scorekeeper are assigned to each game. This 5 on 5 league will play under National Federation Rules. Richfield Basketball leagues will offer competition, fun, exercise, and it is a great way to socialize while staying in shape. Each team is guaranteed 8 regular season games and a single elimination playoffs. All games will have certified referees. Games will take place at Richfield Stem School or Richfield Middle School on Wednesday evenings. Register your team today! First come. First served. Registration deadline: Jan 4.	https://www.richfieldmn.gov/departments/parks_and_recreation/programs_athletics/adult_sports/basketball.php	https://cms9files.revize.com/richfieldmn/revize_photo_gallery/Department/Parks%20&%20Recreation/Program-%20Athletics/Adult%20Sports/635816297030400000.jpg
4	Apple Valley	Bean Bags/Corn Hole	Gold or A	Spring 2023	Friday	Evening	t	Grab a partner and get ready to play everyones favorite backyard game - bean bag toss.  We offer indoor leagues during the late fall, winter and spring seasons and outdoor leagues during the summer and early fall.  Teams of two of any gender can participate.	 https://www.ci.apple-valley.mn.us/645/Bean-Bags	https://www.ci.apple-valley.mn.us/ImageRepository/Document?documentID=13678
2	Roseville	Softball	Bronze or C	Fall 2022	Thursday	Evening	f	Roseville offers a wide array of adult softball leagues throughout the fall. Leagues are available five nights per week in Mens and Co-Rec across multiple skill levels with over 70 teams. \nGames are played throughout the city of Roseville and begin at 6:00, 7:00, 8:00 and 9:00 pm. Rally your team and join us for another season of fun and great competition!	https://www.cityofroseville.com/3570/Fall-Softball	https://www.cityofroseville.com/ImageRepository/Document?documentID=32707
6	Roseville	Basketball	Bronze or C	Winter 2022	Wednesday	Evening	f	A three game "preseason" to ensure teams end up in their proper division\nA seven game regular season schedule against similar skilled teams\nA multi-game playoff tournament that includes all teams (each team plays a minimum of 12 total games)\nAll games are officiated by qualified officials\nGames begin between 6:00pm and 10:00pm on Wednesday evenings\nLeague begins on November 30\nCost: $715 (per team)	https://www.cityofroseville.com/3562/Basketball-Leagues	https://www.cityofroseville.com/ImageRepository/Document?documentID=15816
7	Brooklyn Park	Pickleball	Bronze or C	Summer 2023	Monday	Morning	t	There will be 4 courts available for play with a limit of 26 participants per session.\nThe cost to play is $3 per session. Purchase single day coupons or a booklet of 10 tickets from the CAC front office.	https://www.brooklynpark.org/adults/adult-sports-2/adult-pickleball/	https://www.brooklynpark.org/wp-content/uploads/2019/06/Pickleball-1024x576.jpg
9	Eagan	Volleyball	Gold or A	Spring 2023	Friday	Evening	t	The 2023 spring season is set to start the week of March 20th. For more information please contact Jonathan Moore or call (651) 675-5523. 	https://cityofeagan.com/volleyball	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aRdGQe6an-_jlh9dnau1TJLLexr9vU1Zib55fUkjX4G_F5hzGUlMtMUDfwRQAf5YRtk&usqp=CAU
13	Richfield	Dodgeball	Bronze or C	Winter 2022	Thursday	Evening	t	Relive your childhood with a gym class favorite, Dodgeball! Matches will be supervised but teams will enforce rules and call themselves out when hit. Teams can be composed of a combination of both of men and women. Matches will take place at Richfield Stem School on Thursday evenings. Register your team today! First come. First served. Registration deadline: Jan 4.\nMatches will take place on Thursdays.  January 12 - March 2.  First match starts at 6:30pm.  Second match starts at 7:40pm\nSingle elimination Playoffs will take place on March 9 and March 16\nLocation of games will take place at Richfield STEM School (7020 12th Ave S)	 https://richfieldmn.gov/departments/parks_and_recreation/programs_athletics/adult_sports/dodgeball.php	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyBIE_shnyuQS8riX2oFcKZxKwpcqx_G9ig&usqp=CAU
14	Minneapolis SSL	Basketball	Social	Winter 2022	Tuesday	Evening	t	Whether you ball like Duncan or haven’t laced them up since grade school, Minneapolis Social Sports Leagues is the place for your social basketball experience! Come join us on the hardwood. Each week is filled with hoops, alley-oops and sometimes whoops. Happy hour follows every game where the term shot takes on a new meaning and teams throw it down!	https://minneapolisssl.com/basketball	https://img.athleticbusiness.com/files/base/abmedia/all/image/2013/01/ab.OOT-213-AB_web225x338.png?auto=format%2Ccompress&fit=max&q=70&w=400
3	Bloomington	Basketball	Silver or B	Winter 2022	Tuesday	Morning	f	Join our Winter Basketball League and play full court basketball! The season consists of eight weeks of regular season play followed by single elimination playoffs/championships. Players register as a team, with a max of ten people. All games are officiated. If you do not have a jersey, one will be given to you to use during games.	https://www.bloomingtonmn.gov/pr/adult-sports-and-leaguesSoftball\n	https://storage.googleapis.com/proudcity/ketteringohparks/uploads/2019/10/KetteringMensBasketball-18.jpg
15	Minneapolis SSL	Cornhole/Bags	Social	Summer 2023	Sunday	Afternoon	t	It’s time to put your Cornhole skills to the test! If you’ve got the soft toss down and throwing bean bags is in your blood, then this is the league for you. Join Minneapolis SSL’s Cornhole league and face off with your friends against other teams to crown the best Cornhole team in Minneapolis.	https://minneapolisssl.com/cornhole	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadXwv1iNuwCyLBX_74rje0EibO8qeDEjKJQ&usqp=CAU
1	Minneapolis SSL	Volleyball	Social	Summer 2022	Sunday	Afternoon	t	The SSL volleyball leagues are a great way to get in shape and meet new people. We have multiple options for adult co-ed volleyball leagues all over Minneapolis including indoor or sand volleyball. After every game, the SSL hosts a happy hour to celebrate victory or drink away your defeat, making great new friends either way!	https://minneapolisssl.com/volleyball	https://leaguelab-prod.s3.amazonaws.com/userimages/214510_ful.jpg
16	Minneapolis SSL	Dodgeball	Social	Fall 2022	Saturday	Morning	t	Our courts are calling for those who are down for a dodging good time! Whether you are an Average Joe or Purple Cobra, you’ll love our balls. Constructed of soft foam in two sizes for quick throws and devastating blows, our balls never leave embarrassing marks for you to explain at the post-game happy hour.	https://minneapolisssl.com/dodgeball	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0SMQtkJvggptcKBFJoiR--avumwjJYBnUw&usqp=CAU
17	Minneapolis SSL	Kickball	Social	Summer 2023	Tuesday	Evening	t	Remember your elementary school days when you lived for recess? Boot the ball in the classic playground game just like you did back then! Come join the more than 500 adults playing kickball with us every season. Each week is filled with costume contests, drinking games, and lots of laughs. No experience necessary! Happy hour follows every game and usually starts before the first pitch.	https://minneapolisssl.com/kickball	https://www.gannett-cdn.com/-mm-/e0f056c1ea01d0a6518e6aa760b255fd57da1f9e/c=0-131-1996-1258/local/-/media/2015/09/01/Westchester/Westchester/635767181554210654-lcjdc5-5z7makt7dzm16imib9ve-original.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp
19	St.Paul	Cornhole/Bags	Social	Fall 2023	Sunday	Afternoon	t	The City of Saint Paul offers Adult Cornhole leagues during the fall season. Registration begins in late June, with league play beginning in September. \n\nTeams consist of 2 people of any gender combination. Leagues are 7 weeks long, and league champions receive t-shirts.	https://www.stpaul.gov/departments/parks-and-recreation/athletics/adult-athletics/adult-cornhole	https://i0.wp.com/bhamnow.com/wp-content/uploads/2018/07/Photo-via-cornholeantics.com_..jpg?resize=983%2C678&ssl=1
8	Bloomington	Volleyball	Social	Summer 2023	Tuesday	Evening	t	Co-rec sand leagues are offered in the summer. Each season offers leagues with different levels of play to allow participants to choose the level of competition that suits their team. Please see designation definitions at the bottom of this section.\n\n**For the self-officiated Summer Sand Volleyball leagues, a City staff member will be at the courts each night to provide equipment, collect scorecards and supervise play.	https://www.bloomingtonmn.gov/pr/adult-sports-and-leagues	https://betteratvolleyball.com/wp-content/uploads/2019/07/largecoedbeach2.jpg
18	Minneapolis SSL	Softball	Social	Summer 2023	Friday	Evening	t	Crack open your cooler, fire up your grill, and swing the day away on a softball league! Multiple nights in multiple locations means there is a swinging shindig for everyone. Don’t worry if you strike out at the plate, you can always score yourself a double at the post-game happy hour! 	https://minneapolisssl.com/softball	https://ntprd.org/wp-content/uploads/2019/09/softball.jpg
5	Crystal 	Volleyball	Silver or B	Spring 2023	Sunday	Morning	t	Crystal offers some of the Twin Cities Metro's most popular volleyball leagues with over 60 teams playing each season.\n\nLeague Details:\nAll adult volleyball matches are officiated by certified officials\nTeams play one 3 game match per night\nMatches at Crystal Community Center or Forest Elementary	https://parksandrec.crystalmn.gov/recreation/activities/adult_volleyball	https://www.torontomu.ca/content/dam/recreation/volleyball_activity2_1.jpg
10	St.Paul	Volleyball	Bronze or C	Winter 2022	Saturday	Evening	t	The City of Saint Paul offers Womens and Co-Rec Adult Volleyball leagues during the fall and winter seasons.Fall Volleyball is individual registration - be placed on a team to make new friends! Players may indicate a buddy they wish to be placed with. 8-week season, No fall playoffs. Winter Volleyball is team registration - all teams are automatically entered into playoffs after an 8-week regular season. 	https://www.stpaul.gov/departments/parks-and-recreation/athletics/adult-athletics/adult-volleyball	https://www.libertymissouri.gov/ImageRepository/Document?documentID=25556
11	Minnetonka	Volleyball	Social	Fall 2023	Thursday	Evening	t	LEAGUE STRUCTURE: The fall volleyball season consists of 10 weeks of league play. After 10 weeks of play a\nminimum of the top four teams in each division will move into a one night playoff round. Games are scheduled to begin\nas early as 6:45 p.m. and as late as 8:45 p.m. All teams are scheduled for an equal number of games. Byes and double\nheaders may be scheduled depending on the number of teams in each division. Games will be held at the Royals\nAthletic Center (formally the Lindbergh Center) and occasionally at the Hopkins West Junior High. All leagues are six\nplayer. 	https://www.minnetonkamn.gov/our-city/recreation/adult-sports/volleyball-3515	https://www.minnetonkamn.gov/home/showpublishedimage/1345/637081230777830000
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public."user" (id, username, password) FROM stdin;
1	admin	$2a$10$NyyH7HkZh00FS6WcJm9VNuT.EqpKSnzhgT3Dacbkqxm26oYLjq7x6
\.


--
-- Name: league_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.league_id_seq', 30, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- Name: league league_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.league
    ADD CONSTRAINT league_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

