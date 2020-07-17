//FaIcons
import {
	faEuroSign,
	faUsers,
	faPhone,
	faStoreAlt,
	faUserFriends,
	faHome,
	faMobile,
	faStore,
	faMap,
	faHandsHelping,
	faCogs,
	faDesktop,
	faStopwatch,
	faPeopleCarry,
	faUserCheck,
	faLightbulb,
	faTasks,
	faClock,
	faCoffee,
	faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

//Projects
import Pym from "../assets/img/projects/pym.webp";
import TheMask from "../assets/img/projects/the_mask.webp";
import ProjectPym from "../assets/img/projects/proj_pym.webp";
import ProjectTheMask from "../assets/img/projects/proj_mask.webp";
import ProjectJarvis from "../assets/img/projects/proj_jarvis.webp";

//Icons
import Technical from "../assets/img/icons/creativity_icon.webp";
import IconManagement from "../assets/img/icons/advertising.webp";
import Others from "../assets/img/icons/web_design_icon.webp";

//Certifications
import CertGoogle from "../assets/img/certifications/digital-active.webp";
import CertReact from "../assets/img/certifications/react.webp";
import CertReactNative from "../assets/img/certifications/react-native.webp";

//Profile
import Harry from "../assets/img/profile/harry.webp";
import Kirthy from "../assets/img/profile/kirthy.webp";

//Technologies
import React from "../assets/img/technologies/react.webp";
import Redux from "../assets/img/technologies/redux.webp";
import Bootstrap from "../assets/img/technologies/bootstrap.webp";
import Sass from "../assets/img/technologies/sass.webp";
import Mercure from "../assets/img/technologies/mercure.webp";
import Axios from "../assets/img/technologies/axios.webp";

//Free
import Free from "../assets/img/free/BGDefault.webp";

//Others
import Team from "../assets/img/others/team.webp";
import ESD from "../assets/img/others/esd.webp";

export const KeyFiguresEnterprise = [
	{
		id: 0,
		title: "Chiffre d'affaires 2019",
		icon: faEuroSign,
		value: "5.3G",
	},
	{
		id: 1,
		title: "Employés",
		icon: faUsers,
		value: "+11.000",
	},
	{
		id: 2,
		title: "Abonnés Mobile",
		icon: faMobile,
		value: "13.5M",
	},
	{
		id: 3,
		title: "Abonnés Fixe",
		icon: faPhone,
		value: "6.5M",
	},
];

export const KeyFiguresFD = [
	{
		id: 0,
		title: "Free Centers",
		icon: faStoreAlt,
		value: "91",
	},
	{
		id: 1,
		title: "Employés",
		icon: faUsers,
		value: "+750",
	},
	{
		id: 2,
		title: "Poles",
		icon: faUserFriends,
		value: "3",
	},
];

export const TimelineEnterprise = [
	{
		id: 0,
		date: "1991",
		title: "Fondation Iliad",
		description: "Xavier Niel rachète Fermic et Multimedia et le renomme en Iliad",
	},
	{
		id: 1,
		date: "1999",
		title: "Fondation Free",
		description: "Iliad obtient des licenses de télécoms, ce qui marque la naissance de Free.",
	},
	{
		id: 2,
		date: "2002",
		title: "Lancement du triple play",
		description: "Iliad propose le triple play: Internet, Fixe et TV",
	},
	{
		id: 3,
		date: "2007",
		title: "Lancement Fibre",
		description: "Free lance l'offre fibre optique avec un débit de 100 mbits/s",
	},
	{
		id: 4,
		date: "2010",
		title: "Révolution mobile",
		description: "Free obtient les licenses 3G et lance une véritable révolution sur les coûts des forfaits mobile",
	},
	{
		id: 5,
		date: "2018",
		title: "Italia !",
		description: "Initiation du déploiement a l'international avec un lancement en Italie",
	},
];

export const ObjectivesIliad = [
	{
		id: 0,
		icon: faHome,
		title: "Le fixe",
		description: [
			{ id: 1, text: "Part de marché Haut Débit et Très Haut Débit de 25%" },
			{ id: 0, text: "2 millions d’abonnés Fibre en 2020" },
		],
	},
	{
		id: 1,
		icon: faMobile,
		title: "Le mobile",
		description: [
			{ id: 0, text: "Part de marché mobile de 25%" },
			{ id: 1, text: "+ de 80% des abonnés sur le Forfait Free illimitée" },
			{ id: 2, text: "Plus de 25 000 sites en 2024" },
		],
	},
	{
		id: 2,
		icon: faStore,
		title: "Le B2B",
		description: [
			{ id: 0, text: "5% de part de marché sur le marché des entreprises d’environ en 2024" },
			{ id: 1, text: "CA de l’activité entreprises d’environ 400/500M d’€ en 2024" },
		],
	},
	{
		id: 3,
		icon: faMap,
		title: "Italie",
		description: [
			{ id: 0, text: "Environ 5 000 sites activés à fin 2020" },
			{ id: 1, text: "10 000 à 12 000 sites à fin 2024" },
			{ id: 2, text: "Générer 1,5 milliard€ de CA en Italie sur le long terme" },
		],
	},
];

export const ObjectivesFD = [
	{
		id: 0,
		title: "Souscriptions",
		description: [
			{ id: 1, text: "Vente de Freebox" },
			{ id: 0, text: "Souscriptions forfaits mobiles" },
		],
	},
	{
		id: 1,
		title: "Satisfaction",
		description: [
			{ id: 0, text: "+65% de satisfaction client" },
			{ id: 1, text: "Réduction du temps d'attente" },
			{ id: 2, text: "Réduction du temps de traitement" },
		],
	},
];

export const PolesFD = [
	{
		id: 0,
		icon: faHandsHelping,
		title: "Vente et opérations",
		description: "Gestion des Free Centers (boutiques Free), des coachs et managers de ces FC.",
	},
	{
		id: 1,
		icon: faCogs,
		title: "Déploiement et maintenance",
		description: "Gestion de l'ouverture et maintenance de toutes les Free Centers de France",
	},
	{
		id: 2,
		icon: faDesktop,
		title: "Recherche & développement",
		description: "Gestion de toutes les foncions supports, R&D (mon pôle), RH, etc.",
	},
];

export const ValuesFree = [
	{
		id: 0,
		color: "blue",
		icon: faStopwatch,
		title: "Flexibilité",
		description: "Souple, Agile, Réactif",
	},
	{
		id: 1,
		color: "orange",
		icon: faPeopleCarry,
		title: "Efficacité",
		description: "Objectifs, Réussite de l'équipe",
	},
	{
		id: 2,
		color: "pink",
		icon: faUserCheck,
		title: "Autonomie",
		description: "Initiatives, Prise de décision, Confiance",
	},
	{
		id: 3,
		color: "yellow",
		icon: faLightbulb,
		title: "Audace",
		description: "Prise de risque, Innovation",
	},
];

export const FunFacts = [
	{
		id: 0,
		title: "Projets",
		icon: faTasks,
		value: 3,
	},
	{
		id: 1,
		title: "Heures de travail",
		icon: faClock,
		value: "1.350",
	},
	{
		id: 2,
		title: "Cafés consommés",
		icon: faCoffee,
		value: "1.475",
	},
	{
		id: 3,
		title: "Lignes de code",
		icon: faLaptopCode,
		value: "37.912",
	},
];

// Profile
export const Projects = [
	{ id: 0, title: "Pym", imgSrc: Pym },
	{ id: 1, title: "The Mask", imgSrc: TheMask },
	{ id: 2, title: "Jarvis" },
];

export const Abilities = [
	{
		id: 0,
		img: Technical,
		title: "Compétences Techniques",
		descriptions: [
			{
				id: 0,
				title: "HTML / CSS / JS",
			},
			{
				id: 1,
				title: "React / React Native",
			},
			{
				id: 2,
				title: "Node / SQL / GraphQL",
			},
		],
	},
	{
		id: 1,
		img: IconManagement,
		title: "Compétences Managériales",
		descriptions: [
			{
				id: 0,
				title: "Gestion de projets",
			},
			{
				id: 1,
				title: "Capacité décisionnelle",
			},
			{
				id: 2,
				title: "Travail d'équipe",
			},
		],
	},
	{
		id: 2,
		img: Others,
		title: "Autres compétences",
		descriptions: [
			{
				id: 0,
				title: "UI / UX",
			},
			{
				id: 1,
				title: "SEO / SEA",
			},
			{
				id: 2,
				title: "Scrum / Kanban / Lean",
			},
		],
	},
];

export const Formations = [
	{
		id: 0,
		title: "Bac Scientifique",
		date: "2015",
		place: "Lycée Français Charles de Gaulle, Londres",
	},
	{
		id: 1,
		title: "CPGE MPSI",
		date: "2015-2017",
		place: "ISEP Paris",
	},
	{
		id: 2,
		title: "Bachelor Chargé de projet digital",
		date: "2017-2020",
		place: "ESD Paris",
	},
	{
		id: 3,
		title: "Master CTO & Tech Lead",
		date: "2020-2022",
		place: "EEMI Paris",
	},
];

export const Certifications = [
	{
		id: 0,
		img: CertGoogle,
		title: "Certification Google Digital Active",
		issuer: "Google",
		date: "2017",
	},
	{
		id: 1,
		img: CertReact,
		title: "React - The Complete Guide",
		issuer: "Udemy",
		date: "2019",
	},
	{
		id: 2,
		img: CertReactNative,
		title: "React Native - The Practical Guide",
		issuer: "Udemy",
		date: "2020",
	},
];

export const Experiences = [
	{
		id: 0,
		title: "Développeur Web",
		date: "2017",
		place: "Calmedica, Paris",
		description: [
			{ id: 0, text: "Développement site WordPress" },
			{ id: 1, text: "Refactoring back-office (Symfony)" },
		],
	},
	{
		id: 1,
		title: "Esport coach & manager",
		date: "2018",
		place: "Allegiance, Los Angeles",
		description: [
			{ id: 0, text: "Gestion d’une équipe professionnelle sur un jeu vidéo" },
			{ id: 1, text: "Organisation d’entrainements et de débriefing quotidiens" },
		],
	},
	{
		id: 2,
		title: "Développeur Full Stack (React & Node)",
		date: "2019",
		place: "onepoint, Paris",
		description: [
			{
				id: 0,
				text:
					"Automatisation des tests de performance, refactoring en front (React) et en back (Node / Express)",
			},
			{
				id: 1,
				text: "Déploiement de nouvelles fonctionnalités (React / Java)",
			},
			{
				id: 2,
				text: "Amélioration de l'aspect visuel de softwares",
			},
		],
	},
	{
		id: 3,
		title: "Développeur Front End (React)",
		date: "2019-2020",
		place: "Free, Paris",
		description: [
			{
				id: 0,
				text: "Développement de plusieurs projets (React/Symfony)",
			},
			{
				id: 1,
				text: "Déploiement de projets sous docker",
			},
			{
				id: 2,
				text: "Propositions UX/UI",
			},
		],
	},
];

//Missions
export const ProjectsDetails = [
	{
		id: 0,
		img: ProjectPym,
		title: "Pym",
		description:
			"Pym est un outil de sondage, d'évaluations, de quizs en live et d'analyse de réponses. Il est né de la nécessité d'avoir les réponses centralisé et surtout hébergées par Free et non une entreprise tierce.",
	},
	{
		id: 1,
		img: ProjectTheMask,
		title: "The Mask",
		description:
			"The Mask est un outil de gestion de stocks de différents produits. Ce projet est issu d'une nécessité réelle d'assurer un suivi de ces stocks durant le Covid. Il a pour vocation a être utilisé à des fins plus marketing.",
	},
	{
		id: 2,
		img: ProjectJarvis,
		title: "Jarvis",
		description:
			"Jarvis est un outil de ticketing et d'administration pour les entités de F Distribution. Il permet de centraliser toutes les demandes réalisées à ces dernières afin d'en simplifier la résolution et de permettre un gain de temps considérable.",
	},
];

export const Technologies = [
	{
		id: 0,
		img: React,
		title: "React",
		description:
			"React est une bibliothèque JavaScript développée par Facebook depuis 2013. Son but principal est de faciliter la création de sites web, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état. C'est un langage très populaire qui voit son taux d'utilisation continuellement grimper.",
	},
	{
		id: 1,
		img: Redux,
		title: "Redux",
		description:
			"Redux est une bibliothèque JavaScript parue en 2015 qui a pour but d'apporter une meilleure gestion des états (state) que ne le propose React de base. Elle permet notamment de mettre en place un état global qu'il devient beaucoup plus facile de modifier.",
	},
	{
		id: 2,
		img: Bootstrap,
		title: "Bootstrap",
		description:
			"Bootstrap est une collection de style et de classes permettant de mettre en place assez facilement un design. Il contient des styles pré-définis de boutons, formulaires, etc. (qui peuvent toutefois être adaptés) qui s'appellent avec une classe directement depuis le code HTML.",
	},
	{
		id: 3,
		img: Sass,
		title: "Sass",
		description:
			"Le Sass est un langage dynamique de génération de feuilles de style en cascade (CSS). C'est un langage compilé qui permet d'écrire son style directement en Sass mais qui octroie des fonctionnalités supplémentaires telles que la déclaration de variables ou l'utilisation de la syntaxe SCSS.",
	},
	{
		id: 4,
		img: Mercure,
		title: "Mercure",
		description:
			"Mercure est un protocole ouvert pour les communications en temps réel conçu pour être rapide, fiable et efficace. C'est un remplacement moderne et pratique de l'API Websocket et des bibliothèques et services de haut niveau qui en dépendent.",
	},
	{
		id: 5,
		img: Axios,
		title: "Axios",
		description:
			"Axios est un client HTTP pour JavaScript basé sur les 'promesses' qui permet de faire le parallèle entre le back et le front. En utilisant Axios, il est facile d'envoyer des requêtes HTTP asynchrones aux terminaux REST et d'effectuer des opérations CRUD.",
	},
];

//Bilan
export const Testimonials = [
	{
		id: 0,
		testimony:
			"Une belle évolution dans le code de Romain qui témoigne d'une vraie motivation à évoluer et à en apprendre toujours plus.",
		img: Harry,
		name: "Harry Amram",
		poste: "Lead Developer",
	},
	{
		id: 1,
		testimony:
			"Romain a permi d'accélérer la vitesse de déploiement de nos outils et a formé un excellent duo avec Harry !",
		img: Kirthy,
		name: "Kirthy Anandout",
		poste: "Responsable pôle R&D",
	},
];

export const Acknowledgements = [
	{
		id: 0,
		img: Free,
		title: "Free Distribution",
		description:
			"Je remercie F Distribution pour l'accueil et l'expérience que j'ai pu acquérir en participant à es projets divers et variés. C'est une entreprise innovante où chacun peut s'exprimer et faire part de sa créativité",
	},
	{
		id: 1,
		img: Team,
		title: "Mon équipe",
		description:
			"Je remercie mon équipe pour ces quelques mois passés à leurs côtés. Des profils diversifiés et une super ambiance de travail offrent un super cadre de travail. Mention spéciale à Harry pour son accompagnement quotidien, sa pédagogie et sa volonté de me faire toujours évoluer !",
	},
	{
		id: 2,
		img: ESD,
		title: "ESD",
		description:
			"Et enfin je remercie l'ESD pour ces 3 années passées au sein du bachelor chargé de projet digital. Ce fût une expérience humaine mais surtout très enrichissante d'un point de vue personnel ! ",
	},
];
